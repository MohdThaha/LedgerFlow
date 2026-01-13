
//Role
const roles = [
  {
    description: 'Admin',
    roleName: 'Admin',
    permissions: [  
      // Accounts 
      { action: "AccountAdd", note: "Created a New Account" },          
      { action: "AccountView", note: "Viewed Account Information" },
      { action: "AccountDashboard", note: "Viewed Account Dashboard" },
      { action: "AccountBalance", note: "Viewed Account Balance" },
      { action: "AccountEdit", note: "Edited Account Information" },
      { action: "AccountDelete", note: "Deleted an Account" },
      
      //Journal
      { action: "JournalAdd", note: "Added a Journal Entry" },
      { action: "JournalView", note: "Viewed Journal Entry" },
      { action: "JournalEdit", note: "Edited Journal Entry" },
      { action: "JournalDelete", note: "Deleted Journal Entry" },

      // Customers 
      { action: "CustomersCreate", note: "Created a New Customer" },
      { action: "CustomersView", note: "Viewed Customer details" },
      { action: "CustomersDashboard", note: "Viewed Customer Dashboard" },          
      { action: "CustomersEdit", note: "Edited Customer information" },
      { action: "CustomerDelete", note: "Deleted Customer" },
      
      // Inventory 
      { action: "ItemAdd", note: "Created a New Item" },
      { action: "ItemView", note: "Viewed Item Information" },
      { action: "ItemViewCostPrice", note: "Viewed Item Cost Price Information" },
      { action: "ItemDashboard", note: "Viewed Item Dashboard" },          
      { action: "ItemEdit", note: "Edited Item Information" },
      { action: "ItemDelete", note: "Deleted an Item" },

      // Warehouse 
      { action: "WarehouseAdd", note: "Created a New Warehouse" },
      { action: "WarehouseView", note: "Viewed Warehouse Information" },
      { action: "WarehouseEdit", note: "Edited Warehouse Information" },
      { action: "WarehouseDelete", note: "Deleted an Warehouse" },
      
      // Organization Module
      { action: "OrganizationSetup", note: "Setup/Modified Organization Details" },
      { action: "OrganizationDashboard", note: "Viewed Organization Dashboard" },
      
      // Organization Module - Setting
      { action: "SettingView", note: "Viewed Setting details" },
      { action: "SettingAdd", note: "Added a new Setting" },
      { action: "SettingEdit", note: "Edited Setting details" },
      { action: "SettingDelete", note: "Deleted a Setting" },          

      //Purchase Order
      { action: "PurchaseOrderAdd", note: "Created a New Purchase Order" },
      { action: "PurchaseOrderView", note: "Viewed Purchase Order" },
      { action: "PurchaseOrderEdit", note: "Edited Purchase Order" },
      { action: "PurchaseOrderDelete", note: "Deleted Purchase Order" },
      
      { action: "PurchaseBillAdd", note: "Created a New Purchase Bill" },
      { action: "PurchaseBillView", note: "Viewed Purchase Bill" },
      { action: "PurchaseBillEdit", note: "Edited Purchase Bill" },
      { action: "PurchaseBillDelete", note: "Deleted Purchase Bill" },
      
      { action: "PurchasePaymentAdd", note: "Created a New Purchase Payment" },
      { action: "PurchasePaymentView", note: "Viewed Purchase Payment" },
      { action: "PurchasePaymentEdit", note: "Edited Purchase Payment" },
      { action: "PurchasePaymentDelete", note: "Deleted Purchase Payment" },
      
      { action: "PurchaseDebitNoteAdd", note: "Created a New Purchase Debit Note" },
      { action: "PurchaseDebitNoteView", note: "Viewed Purchase Debit Note" },
      { action: "PurchaseDebitNoteEdit", note: "Edited Purchase Debit Note" },
      { action: "PurchaseDebitNoteDelete", note: "Deleted Purchase Debit Note" },
      
       //Supplier Module
      { action: "SupplierCreate", note: "Created a New Supplier" },
      { action: "SupplierView", note: "Viewed Supplier Details" },
      { action: "SupplierDashboard", note: "Viewed Supplier Dashboard" },
      { action: "SupplierEdit", note: "Edited Supplier Information" },
      { action: "SupplierDelete", note: "Deleted Supplier Information" },
      
      //Sales Module - Invoice
      { action: "InvoiceCreate", note: "Created a New Invoice" },
      { action: "InvoiceView", note: "Viewed Invoice Details" },
      { action: "InvoiceDashboard", note: "Viewed Invoice Dashboard" },
      { action: "InvoiceEdit", note: "Edited Invoice Information" },
      { action: "InvoiceDelete", note: "Deleted Invoice Information" },
      { action: "InvoiceProfit", note: "View Invoice Profit" },
      
      //Sales Module - Receipt
      { action: "ReceiptCreate", note: "Created a New Receipt" },
      { action: "ReceiptView", note: "Viewed Receipt Details" },
      { action: "ReceiptEdit", note: "Edited Receipt Information" },
      { action: "ReceiptDelete", note: "Deleted Receipt Information" },
     
      //Sales Module - Credit Note
      { action: "CreditNoteCreate", note: "Created a New Credit Note" },
      { action: "CreditNoteView", note: "Viewed Credit Note Details" },
      { action: "CreditNoteEdit", note: "Edited Credit Note Information" },
      { action: "CreditNoteDelete", note: "Deleted Credit Note Information" },
      
      //Staff Module 
      { action: "StaffCreate", note: "Created a New Staff" },
      { action: "StaffView", note: "Viewed Staff Details" },
      { action: "StaffDashboard", note: "Viewed Staff Dashboard" },
      { action: "StaffEdit", note: "Edited Staff Information" },
      { action: "StaffDelete", note: "Deleted Staff Information" },

    ],
  }
];



//Prefix
const prefix = [
  { series: [{
    seriesName: 'Default Series',
    status:true,
    journal:"JN-",journalNum:1,        
    creditNote: "CN-",creditNoteNum: 1,        
    receipt: 'CP-',receiptNum: 1,
    purchaseOrder: "PO-",purchaseOrderNum: 1,        
    salesOrder: "SO-",salesOrderNum: 1,
    payment: "VP-",paymentNum: 1,
    bill: "BS-",billNum: 1,
    debitNote: "CDN-",debitNoteNum: 1,
    invoice:"INV-",invoiceNum: 1,
    quote: "QT-",quoteNum: 1,        
    expense: "EX-",expenseNum: 1,
  }]},            
];
 

//Unit 
const units = [
  { unitName: 'Number', symbol: 'No', quantityCode: 'NUM', precision: '0'},
  { unitName: 'Pieces', symbol: 'Pc', quantityCode: 'PCS', precision: '0'},
  { unitName: 'Meter', symbol: 'm', quantityCode: 'MTR', precision: '2'},
  { unitName: 'Inch', symbol: 'in', quantityCode: 'INCH', precision: '2'},     
  { unitName: 'Centimeter', symbol: 'cm', quantityCode: 'CM', precision: '1'},
  { unitName: 'Yard', symbol: 'yd', quantityCode: 'YD', precision: '2'},
  { unitName: 'Set', symbol: 'set', quantityCode: 'SET', precision: '0'},
  { unitName: 'Dozen', symbol: 'dz', quantityCode: 'DOZ', precision: '0'},
  { unitName: 'Roll', symbol: 'roll', quantityCode: 'ROLL', precision: '0'},
  { unitName: 'Bundle', symbol: 'bdl', quantityCode: 'BDL', precision: '0'},
  { unitName: 'Foot', symbol: 'ft', quantityCode: 'FT', precision: '2'},
  { unitName: 'Pair', symbol: 'pr', quantityCode: 'PR', precision: '0'}             
]; 



//Currency
const currencies = [
  { currencyCode: 'INR', currencySymbol: '₹', currencyName: 'Indian Rupee', decimalPlaces: '2', format: '1,234,567.89', baseCurrency: false },
  { currencyCode: 'SAR', currencySymbol: 'SAR', currencyName: 'Saudi Riyal', decimalPlaces: '2', format: '1,234,567.89', baseCurrency: false },
  { currencyCode: 'AED', currencySymbol: 'AED', currencyName: 'UAE Dirham', decimalPlaces: '2', format: '1,234,567.89', baseCurrency: false },
  { currencyCode: 'QAR', currencySymbol: 'QAR', currencyName: 'Qatari Riyal', decimalPlaces: '2', format: '1,234,567.89', baseCurrency: false },
  { currencyCode: 'OMR', currencySymbol: 'OMR', currencyName: 'Omani Rial', decimalPlaces: '3', format: '1,234,567.890', baseCurrency: false },
  { currencyCode: 'BHD', currencySymbol: 'BHD', currencyName: 'Bahraini Dinar', decimalPlaces: '3', format: '1,234,567.890', baseCurrency: false },
  { currencyCode: 'KWD', currencySymbol: 'KWD', currencyName: 'Kuwaiti Dinar', decimalPlaces: '3', format: '1,234,567.890', baseCurrency: false },
  { currencyCode: 'MYR', currencySymbol: 'RM', currencyName: 'Malaysian Ringgit', decimalPlaces: '2', format: '1,234,567.89', baseCurrency: false },
  { currencyCode: 'SGD', currencySymbol: 'S$', currencyName: 'Singapore Dollar', decimalPlaces: '2', format: '1,234,567.89', baseCurrency: false },
  { currencyCode: 'BDT', currencySymbol: '৳', currencyName: 'Bangladeshi Taka', decimalPlaces: '2', format: '1,234,567.89', baseCurrency: false },
  { currencyCode: 'LKR', currencySymbol: 'Rs', currencyName: 'Sri Lankan Rupee', decimalPlaces: '2', format: '1,234,567.89', baseCurrency: false },
  { currencyCode: 'THB', currencySymbol: '฿', currencyName: 'Thai Baht', decimalPlaces: '2', format: '1,234,567.89', baseCurrency: false },
  { currencyCode: 'VND', currencySymbol: '₫', currencyName: 'Vietnamese Dong', decimalPlaces: '0', format: '1,234,567', baseCurrency: false },
  { currencyCode: 'NPR', currencySymbol: 'Rs', currencyName: 'Nepalese Rupee', decimalPlaces: '2', format: '1,234,567.89', baseCurrency: false },
  { currencyCode: 'BTN', currencySymbol: 'Nu', currencyName: 'Bhutanese Ngultrum', decimalPlaces: '2', format: '1,234,567.89', baseCurrency: false },
  { currencyCode: 'JOD', currencySymbol: 'JOD', currencyName: 'Jordanian Dinar', decimalPlaces: '3', format: '1,234,567.890', baseCurrency: false },
  { currencyCode: 'EGP', currencySymbol: 'E£', currencyName: 'Egyptian Pound', decimalPlaces: '2', format: '1,234,567.89', baseCurrency: false },
  { currencyCode: 'ZAR', currencySymbol: 'R', currencyName: 'South African Rand', decimalPlaces: '2', format: '1,234,567.89', baseCurrency: false },
  { currencyCode: 'CAD', currencySymbol: 'C$', currencyName: 'Canadian Dollar', decimalPlaces: '2', format: '1,234,567.89', baseCurrency: false },
  { currencyCode: 'USD', currencySymbol: '$', currencyName: 'US Dollar', decimalPlaces: '2', format: '1,234,567.89', baseCurrency: false },
  { currencyCode: 'GBP', currencySymbol: '£', currencyName: 'British Pound Sterling', decimalPlaces: '2', format: '1,234,567.89', baseCurrency: false }
];

//Tax
const tax = [
  { taxType:"",
    enableTax:false,
    gstTaxRate:[
      {taxName: "GST0",taxRate:0,cgst:0,sgst:0,igst:0},
      {taxName: "GST5",taxRate:5,cgst:2.5,sgst:2.5,igst:5},
      {taxName: "GST12",taxRate:12,cgst:6,sgst:6,igst:12},
      {taxName: "GST18",taxRate:18,cgst:9,sgst:9,igst:18},
      {taxName: "GST28",taxRate:28,cgst:14,sgst:14,igst:28},],
    vatTaxRate:[
      {taxName: "VAT0",taxRate:0,},
      {taxName: "VAT5",taxRate:5,},
      {taxName: "VAT10",taxRate:10,},
      {taxName: "VAT15",taxRate:15,},
      {taxName: "VAT20",taxRate:20,},
    ]    
}];

// Settings
const settings = [
  {
  //Item
  itemDuplicateName:false, hsnSac:false, 
  priceList:false, priceListAtLineLevel:false, 
  compositeItem:false, stockBelowZero:false,
  OutOfStockBelowZero :false, notifyReorderPoint:false, 
  trackCostOnItems:false,barcodeGeneration:false,
  //Customer
  duplicateCustomerMobile:false, duplicateCustomerEmail:false, 
  duplicateCustomerDisplayName:false,
  //Tax
  defaultTaxPreference:'Exclusive',
  //Supplier
  duplicateSupplierDisplayName:false, duplicateSupplierEmail:false, 
  duplicateSupplierMobile:false, 
  //Sales Order
  salesOrderAddress: false, salesOrderCustomerNote: false,
  salesOrderTermsCondition: false, salesOrderClose: 'invoice', 
  restrictSalesOrderClose: false,
  //Shipment
  carrierNotification: false, manualNotification: false,
  //Invoice
  invoiceEdit: false, displayExpenseReceipt: false,
  paymentReceipt: false, invoiceQrCode: false, 
  //Credit Note
  overideCostPrice: false, creditNoteQr: false,
  recordLocking: false,
  //batch
  enableBatch:false,
  //Warehouse
  enableWarehouse:false,
  // whatsapp settings
  invoiceWhatsapp:true,
  orderWhatsapp:true,
}];






const accounts = [

  //Current Asset
  { accountName: "Advance Tax", accountSubhead: "Current Asset", accountHead: "Asset", accountGroup: "Asset",accountCode:"AC-01",systemAccounts: true,description: "Any tax which is paid in advance is recorded into the advance tax account. This advance tax payment could be a quarterly, half yearly or yearly payment." },
  { accountName: "Employee Advance", accountSubhead: "Current Asset", accountHead: "Asset", accountGroup: "Asset",accountCode:"AC-02",systemAccounts: true,description: "Money paid out to an employee in advance can be tracked here till it's repaid or shown to be spent for company purposes." },
  { accountName: "Input Tax Credit", accountSubhead: "Current Asset", accountHead: "Asset", accountGroup: "Asset",accountCode:"AC-03",systemAccounts: true,description: "Input Tax Credits" },
  { accountName: "Prepaid Expense", accountSubhead: "Current Asset", accountHead: "Asset", accountGroup: "Asset",accountCode:"AC-04",systemAccounts: false,description: "An asset account that reports amounts paid in advance while purchasing goods or services from a vendor." },
  { accountName: "Reverse Charge Tax Input but not due", accountSubhead: "Current Asset", accountHead: "Asset", accountGroup: "Asset",accountCode:"AC-05",systemAccounts: true,description: "The amount of tax payable for your reverse charge purchases can be tracked here." },
  { accountName: "Sales to Customers (Cash)", accountSubhead: "Current Asset", accountHead: "Asset", accountGroup: "Asset",accountCode:"AC-06",systemAccounts: true,description: "Sales to Customers (Cash)." },
  { accountName: "TDS Receivable", accountSubhead: "Current Asset", accountHead: "Asset", accountGroup: "Asset",accountCode:"AC-07" ,systemAccounts: false,description: "TDS Receivable."},
  { accountName: "Inventory Asset", accountSubhead: "Current Asset", accountHead: "Asset", accountGroup: "Asset",accountCode:"AC-09",systemAccounts: true,description: "An account which tracks the value of goods in your inventory.." },

  //Non-Current Asset
  { accountName: "Furniture and Equipment", accountSubhead: "Non-Current Asset", accountHead: "Asset", accountGroup: "Asset",accountCode:"AC-08",systemAccounts: false,description: "Purchases of furniture and equipment for your office that can be used for a long period of time usually exceeding one year can be tracked with this account." },

  //Cash
  { accountName: "Petty Cash", accountSubhead: "Cash", accountHead: "Asset", accountGroup: "Asset",accountCode:"AC-10",systemAccounts: true,description: "It is a small amount of cash that is used to pay your minor or casual expenses rather than writing a check." },
  { accountName: "Undeposited Funds", accountSubhead: "Cash", accountHead: "Asset", accountGroup: "Asset",accountCode:"AC-11" ,systemAccounts: true,description: "Record funds received by your company yet to be deposited in a bank as undeposited funds and group them as a current asset in your balance sheet."},

  //Equity
  { accountName: "Capital Stock", accountSubhead: "Equity", accountHead: "Equity", accountGroup: "Asset",accountCode:"AC-12" ,systemAccounts: false,description: "An equity account that tracks the capital introduced when a business is operated through a company or corporation."},
  { accountName: "Distribution", accountSubhead: "Equity", accountHead: "Equity", accountGroup: "Asset",accountCode:"AC-13",systemAccounts: false,description: "An equity account that tracks the payment of stock, cash or physical products to its shareholders." },
  { accountName: "Dividends Paid", accountSubhead: "Equity", accountHead: "Equity", accountGroup: "Asset",accountCode:"AC-14",systemAccounts: false,description: "An equity account to track the dividends paid when a corporation declares dividend on its common stock." },
  { accountName: "Drawings", accountSubhead: "Equity", accountHead: "Equity", accountGroup: "Asset",accountCode:"AC-15",systemAccounts: true,description: "The money withdrawn from a business by its owner can be tracked with this account." },
  { accountName: "Investments", accountSubhead: "Equity", accountHead: "Equity", accountGroup: "Asset",accountCode:"AC-16" ,systemAccounts: false,description: "An equity account used to track the amount that you invest."},
  { accountName: "Opening Balance Offset", accountSubhead: "Equity", accountHead: "Equity", accountGroup: "Asset",accountCode:"AC-17",systemAccounts: true,description: "This is an account where you can record the balance from your previous years earning or the amount set aside for some activities. It is like a buffer account for your funds." },
  { accountName: "Owner's Equity", accountSubhead: "Equity", accountHead: "Equity", accountGroup: "Asset",accountCode:"AC-18",systemAccounts: true,description: "The owners rights to the assets of a company can be quantified in the owner''s equity account." },
  { accountName: "Retained Earning", accountSubhead: "Equity", accountHead: "Equity", accountGroup: "Asset",accountCode:"AC-19",systemAccounts: true,description: "Retained Earnings." },

  //Sales
  { accountName: "Sales", accountSubhead: "Sales", accountHead: "Income", accountGroup: "Asset",accountCode:"AC-26",systemAccounts: true,description: "The income from the sales in your business is recorded under the sales account."},

  //Indirect Income 
  { accountName: "Interest Income", accountSubhead: "Indirect Income", accountHead: "Income", accountGroup: "Asset",accountCode:"AC-22",systemAccounts: true,description: "A percentage of your balances and deposits are given as interest to you by your banks and financial institutions. This interest is recorded into the interest income account." },
  { accountName: "Late Fee Income", accountSubhead: "Indirect Income", accountHead: "Income", accountGroup: "Asset",accountCode:"AC-23",systemAccounts: true,description: "Any late fee income is recorded into the late fee income account. The late fee is levied when the payment for an invoice is not received by the due date."},
  { accountName: "Other Charges", accountSubhead: "Indirect Income", accountHead: "Income", accountGroup: "Asset",accountCode:"AC-24",systemAccounts: true,description: "Miscellaneous charges like adjustments made to the invoice can be recorded in this account."},
  { accountName: "Purchase Discount", accountSubhead: "Indirect Income", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-56",systemAccounts: true,description: "Tracks any reduction that your vendor offers on your purchases. Some vendors also provide them to encourage quick payment settlement." },

  //Current Liability
  { accountName: "Employee Reimbursements", accountSubhead: "Current Liability", accountHead: "Liabilities", accountGroup: "Liability",accountCode:"AC-27",systemAccounts: true,description: "This account can be used to track the reimbursements that are due to be paid out to employees." },
  { accountName: "Output Tax Credit", accountSubhead: "Current Liability", accountHead: "Liabilities", accountGroup: "Liability",accountCode:"AC-28",systemAccounts: true,description: "Output Tax Credit" },
  { accountName: "Opening Balance Adjustments", accountSubhead: "Current Liability", accountHead: "Liabilities", accountGroup: "Liability",accountCode:"AC-29" ,systemAccounts: true,description: "This account will hold the difference in the debits and credits entered during the opening balance."},
  { accountName: "Tax Payable", accountSubhead: "Current Liability", accountHead: "Liabilities", accountGroup: "Liability",accountCode:"AC-30" ,systemAccounts: true,description: "The amount of money which you owe to your tax authority is recorded under the tax payable account. This amount is a sum of your outstanding in taxes and the tax charged on sales."},
  { accountName: "TDS Payable", accountSubhead: "Current Liability", accountHead: "Liabilities", accountGroup: "Liability",accountCode:"AC-31",systemAccounts: false,description: "TDS Payable" },
  { accountName: "Unearned Revenue", accountSubhead: "Current Liability", accountHead: "Liabilities", accountGroup: "Liability",accountCode:"AC-32" ,systemAccounts: true,description: "A liability account that reports amounts received in advance of providing goods or services. When the goods or services are provided, this account balance is decreased and a revenue account is increased."},
  
  //Non-Current Liability
  { accountName: "Construction Loan", accountSubhead: "Non-Current Liability", accountHead: "Liabilities", accountGroup: "Liability",accountCode:"AC-33",systemAccounts: false,description: "An expense account that tracks the amount you repay for construction loans." },
  { accountName: "Mortgages", accountSubhead: "Non-Current Liability", accountHead: "Liabilities", accountGroup: "Liability",accountCode:"AC-34" ,systemAccounts: false,description: "An expense account that tracks the amounts you pay for the mortgage loan."},
  
  
  //Direct Expense
  { accountName: "Fuel/Mileage Expenses", accountSubhead: "Direct Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-45",systemAccounts: false,description: "Fuel/Mileage Expenses" },
  { accountName: "Raw Material and Consumables", accountSubhead: "Direct Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-57" ,systemAccounts: false,description: "An expense account to track the amount spent on purchasing raw materials and consumables."},
  
  //Cost of Goods Sold
  { accountName: "Cost of Goods Sold", accountSubhead: "Cost of Goods Sold", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-65" ,systemAccounts: true,description: "An expense account which tracks the value of the goods sold."},
  
  //Indirect Expense
  { accountName: "Sales Discount", accountSubhead: "Indirect Expense", accountHead: "Income", accountGroup: "Asset",accountCode:"AC-20",systemAccounts: true,description: "Any reduction on your selling price as a discount can be recorded into the discount account."},
  { accountName: "Advertising and Marketing", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-36",systemAccounts: false,description: "Your expenses on promotional, marketing and advertising activities like banners, web-adds, trade shows, etc. are recorded in advertising and marketing account." },
  { accountName: "Exchange Gain or Loss", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-66" ,systemAccounts: true,description: "Changing the conversion rate can result in a gain or a loss. You can record this into the exchange gain or loss account."},
  { accountName: "Bad Debt", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-38" ,systemAccounts: true,description: "Any amount which is lost and is unrecoverable is recorded into the bad debt account."},
  { accountName: "Bank Fees and Charges", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-39" ,systemAccounts: true,description: "Any bank fees levied is recorded into the bank fees and charges account. A bank account maintenance fee, transaction charges, a late payment fee are some examples."},
  { accountName: "Consultant Expense", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-40" ,systemAccounts: false,description: "Charges for availing the services of a consultant is recorded as a consultant expenses. The fees paid to a soft skills consultant to impart personality development training for your employees is a good example."},
  { accountName: "Credit Card Charges", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-42" ,systemAccounts: false,description: " Service fees for transactions , balance transfer fees, annual credit fees and other charges levied on a credit card are recorded into the credit card account."},
  { accountName: "Depreciation Expense", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-44",systemAccounts: false,description: "Any depreciation in value of your assets can be captured as a depreciation expense." },
  { accountName: "IT and Internet Expense", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-46",systemAccounts: false,description: "Money spent on your IT infrastructure and usage like internet connection, purchasing computer equipment etc is recorded as an IT and Computer Expense." },
  { accountName: "Janitorial Expense", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-47" ,systemAccounts: false,description: "All your janitorial and cleaning expenses are recorded into the janitorial expenses account."},
  { accountName: "Lodging", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-48" ,systemAccounts: true,description: "Any expense related to putting up at motels etc while on business travel can be entered here."},
  { accountName: "Office Supplies", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-51",systemAccounts: false,description: "All expenses on purchasing office supplies like stationery are recorded into the office supplies account." },
  { accountName: "Other Expenses", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-52",systemAccounts: true,description: "Any minor expense on activities unrelated to primary business operations is recorded under the other expense account." },
  { accountName: "Postage", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability" ,accountCode:"AC-54",systemAccounts: false,description: "Your expenses on ground mails, shipping and air mails can be recorded under the postage account."},
  { accountName: "Printing and Stationary", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-55",systemAccounts: false,description: "Expenses incurred by the organization towards printing and stationery." },
  { accountName: "Rent Expense", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-58",systemAccounts: false,description: "The rent paid for your office or any space related to your business can be recorded as a rental expense." },
  { accountName: "Repairs and Maintenance", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-59",systemAccounts: false,description: "The costs involved in maintenance and repair of assets is recorded under this account." },
  { accountName: "Salaries", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-60",systemAccounts: false,description: "Salaries for your employees and the wages paid to workers are recorded under the salaries and wages account." },
  { accountName: "Telephone Expense", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-61",systemAccounts: false,description: "The expenses on your telephone, mobile and fax usage are accounted as telephone expenses." },
  { accountName: "Travel Expense", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-63",systemAccounts: false,description: "Expenses on business travels like hotel bookings, flight charges, etc. are recorded as travel expenses." },
  { accountName: "Uncategorized", accountSubhead: "Indirect Expense", accountHead: "Expenses", accountGroup: "Liability",accountCode:"AC-64",systemAccounts: true,description: "This account can be used to temporarily track expenses that are yet to be identified and classified into a particular category." },
  
];





exports.data = {
  roles,
  paymentTerm,
  prefix,
  invoiceTemplate,
  units,
  barcodeTemplate,
  currencies,
  tax,
  settings,
  sewnexSettings,
  accounts,
  reward,
  branch,
  branchManagement,
  mainWarehouse
};