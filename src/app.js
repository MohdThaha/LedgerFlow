const express = require("express");
const cors = require("cors");

// Routes
const organizationRoutes = require("./modules/organization/organization.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json(`Welcome to LedgerFlow API - Version ${process.env.VERSION} (${process.env.NODE_ENV})`);
});

// Routes
app.use("/", organizationRoutes);

module.exports = app;
