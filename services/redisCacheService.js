// redisCacheService.js
//v2.1
const clientPromise = require('../database/connection/redisClient');

async function getClientSafe() {
  try {
    const client = await clientPromise;
    if (!client.status || client.status !== 'ready') {
      // Redis not connected
      return null;
    }
    return client;
  } catch {
    return null; // Redis offline
  }
}

module.exports = {
  set: async (key, value, ttl) => {
    try {
      const client = await getClientSafe();
      if (!client) return; // skip if Redis offline

      const val = typeof value === 'string' ? value : JSON.stringify(value);

      if (ttl) {
        await client.set(key, val, 'EX', ttl); // set with expiration
      } else {
        await client.set(key, val);
      }
    } catch (err) {
      console.warn(`⚠️ Redis SET failed for key "${key}":`, err.message);
    }
  },

  get: async (key) => {
    try {
      const client = await getClientSafe();
      if (!client) return null;

      return await client.get(key);
    } catch (err) {
      console.warn(`⚠️ Redis GET failed for key "${key}":`, err.message);
      return null;
    }
  },

  getJSON: async (key) => {
    try {
      const client = await getClientSafe();
      if (!client) return null;

      const data = await client.get(key);
      return data ? JSON.parse(data) : null;
    } catch (err) {
      console.warn(`⚠️ Redis GET(JSON) failed for key "${key}":`, err.message);
      return null;
    }
  },

  del: async (keys) => {
    try {
      const client = await getClientSafe();
      if (!client) return;

      if (!keys) return;
      if (Array.isArray(keys) && keys.length > 0) {
        await client.del(keys);
      } else if (typeof keys === 'string') {
        await client.del(keys);
      }
    } catch (err) {
      console.warn(`⚠️ Redis DEL failed:`, err.message);
    }
  },

  delByPattern: async (pattern) => {
  try {
    const client = await getClientSafe();
    if (!client) return;

    let cursor = 0;
    do {
      const [nextCursor, keys] = await client.scan(
        cursor,
        'MATCH',
        pattern,
        'COUNT',
        100
      );
      cursor = Number(nextCursor);

      if (keys.length > 0) {
        await client.del(keys);
      }
    } while (cursor !== 0);

    // 🟢 Also handle "base key" (without trailing colon/branchId)
    const baseKey = pattern.endsWith(':*')
      ? pattern.replace(':*', '') // remove wildcard
      : null;

    if (baseKey) {
      const exists = await client.exists(baseKey);
      if (exists) {
        await client.del(baseKey);
      }
    }

  } catch (err) {
    console.warn(`⚠️ Redis delByPattern failed (${pattern}):`, err.message);
  }
},

  flushAll: async () => {
    try {
      const client = await getClientSafe();
      if (!client) return;

      await client.flushall();
      console.log('🧹 Redis cache flushed');
    } catch (err) {
      console.warn('⚠️ Redis FLUSHALL failed:', err.message);
    }
  }
};
