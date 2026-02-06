const { prisma } = require("../../config/db");

async function createClient({
  organizationName,
  organizationCode,
  adminName,
  adminEmail,
}) {
  return prisma.organization.create({
    data: {
      name: organizationName,
      code: organizationCode,
      users: {
        create: {
          name: adminName,
          email: adminEmail,
          role: "ADMIN",
        },
      },
    },
    include: {
      users: true,
    },
  });
}

module.exports = {
  createClient,
};
