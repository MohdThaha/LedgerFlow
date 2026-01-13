//v 2.0
const moment = require("moment-timezone");


function convertToYYYYMMDD(data, dateFields, organization) {
  const format = organization.dateFormatExp || "DD/MM/YYYY";
  const timeZone = organization.timeZoneExp || "UTC";
  const dateSplit = organization.dateSplit || "/";

  dateFields.forEach(field => {
    const value = data[field];
    if (!value) return;

    // Normalize the input value by replacing the custom split with `/`
    const normalizedDate = value.replace(new RegExp(`[${dateSplit}]`, 'g'), '/');

    let parsedDate = moment.tz(normalizedDate, format, true, timeZone);

    if (!parsedDate.isValid()) {
      parsedDate = moment.tz(normalizedDate, timeZone);
    }

    if (!parsedDate.isValid()) {
      throw new Error(`Invalid date string in field "${field}": ${value}`);
    }

    data[field] = parsedDate.format("YYYY-MM-DD");
  });

  return data;
}


function convertDateFieldToOrgFormat(docOrDocs, fieldNames, organization) {
  const docs = Array.isArray(docOrDocs) ? docOrDocs : [docOrDocs];
  const outputFormat = organization.dateFormatExp || "DD/MM/YYYY";
  const timeZone = organization.timeZoneExp || "UTC";
  const dateSplit = organization.dateSplit || "/";

  docs.forEach(doc => {
    // Format each specified field (e.g., billDate, dueDate)
    fieldNames.forEach(fieldName => {
      const rawDate = doc[fieldName];
      if (!rawDate) return; // skip if field is missing

      const parsedDate = moment.tz(rawDate, "YYYY-MM-DD", true, timeZone);
      if (!parsedDate.isValid()) {
        console.warn(`Skipped invalid date in field "${fieldName}": ${rawDate}`);
      }

      let formatted = parsedDate.format(outputFormat);
      if (dateSplit) {
        formatted = formatted.replace(/\//g, dateSplit);
      }

      doc[fieldName] = formatted;
    });

    // Also format createdDateTime → createdDate and createdTime
    if (doc.createdDateTime) {
      const createdMoment = moment.tz(doc.createdDateTime, timeZone);

      let createdDate = createdMoment.format(outputFormat);
      if (dateSplit) {
        createdDate = createdDate.replace(/\//g, dateSplit);
      }

      doc.createdDate = createdDate;
      doc.createdTime = createdMoment.format("hh:mm:ss A");
    }
  });

  return Array.isArray(docOrDocs) ? docs : docs[0];
}



async function normalizeAndUpdateDateField(allDoc, variable, Model, timeZone = "UTC") {
  if (!Array.isArray(allDoc)) throw new Error("allDoc must be an array");

  for (const doc of allDoc) {
    const value = doc[variable];
    if (!value) continue;

    const parsed = moment.tz(value, timeZone);
    if (!parsed.isValid()) {
      console.error(`Invalid date in doc ${doc._id}: ${value}`);
      continue;
    }

    const formatted = parsed.format("YYYY-MM-DD");

    if (formatted !== value) {
      await Model.updateOne(
        { _id: doc._id },
        { [variable]: formatted }
      );
      console.log(`✅ Updated ${variable} for doc ${doc._id} → ${formatted}`);
    }
  }

  console.log("🎉 Date normalization complete.");
}


module.exports = {
  convertToYYYYMMDD,
  convertDateFieldToOrgFormat,
  normalizeAndUpdateDateField
};