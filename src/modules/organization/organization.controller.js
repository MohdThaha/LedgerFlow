const { createClient } = require("./organization.service");

async function createClientController(req, res) {
  try {
    const {
      organizationName,
      organizationCode,
      adminName,
      adminEmail,
    } = req.body;

    if (
      !organizationName ||
      !organizationCode ||
      !adminName ||
      !adminEmail
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    const org = await createClient({
      organizationName,
      organizationCode,
      adminName,
      adminEmail,
    });

    return res.status(201).json({
      message: "Client created successfully",
      organizationId: org.id,
      organizationCode: org.code,
    });
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({
        error: "Organization code or admin email already exists",
      });
    }

    console.error(error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}

module.exports = { createClientController };
