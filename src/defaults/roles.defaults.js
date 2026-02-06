module.exports = [
  {
    roleName: "ADMIN",
    description: "Full system access",
    permissions: [
      { action: "ALL", note: "Full access" },
    ],
  },
  {
    roleName: "ACCOUNTANT",
    description: "Accounting operations",
    permissions: [
      { action: "VIEW_LEDGER", note: "View ledger" },
      { action: "CREATE_VOUCHER", note: "Create vouchers" },
    ],
  },
  {
    roleName: "SALES",
    description: "Sales operations",
    permissions: [
      { action: "CREATE_INVOICE", note: "Create invoices" },
    ],
  },
];
