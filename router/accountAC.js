const express = require("express")
const router = new express.Router()

const accountController = require("../controller/accountController")

const checkPermission = require('../controller/permission');
const { verifyToken } = require('../controller/middleware');
const { verifyBranchForRead } = require('../controller/branchMiddleware');

 


//Accounts
// router.get('/get-all-account/:operation/:branchId?',verifyToken,checkPermission(''),verifyBranchForRead,accountController.getAllAccount)
router.get('/get-all-account/account/:branchId?',verifyToken,checkPermission('Viewed Account Information'),accountController.getAllAccount)

router.get('/get-all-account/order/:branchId?',verifyToken,checkPermission('Created a New Order'),accountController.getAllAccount)
router.get('/get-all-account/order-receipt/:branchId?',verifyToken,checkPermission('Created a New Order Receipt'),accountController.getAllAccount)
router.get('/get-all-account/invoice/:branchId?',verifyToken,checkPermission('Created a New Invoice'),accountController.getAllAccount)
router.get('/get-all-account/invoice-receipt/:branchId?',verifyToken,checkPermission('Created a New Receipt'),accountController.getAllAccount)
router.get('/get-all-account/credit-note/:branchId?',verifyToken,checkPermission('Created a New Credit Note'),accountController.getAllAccount)

router.get('/get-all-account/alteration/:branchId?',verifyToken,checkPermission('Created a New Alteration'),accountController.getAllAccount)
router.get('/get-all-account/alteration-receipt/:branchId?',verifyToken,checkPermission('Created a New Alteration Receipt'),accountController.getAllAccount)

router.get('/get-all-account/expense/:branchId?',verifyToken,checkPermission('Created a New Expense'),accountController.getAllAccount)
router.get('/get-all-account/inventory/:branchId?',verifyToken,checkPermission('Created a New Item'),accountController.getAllAccount)
router.get('/get-all-account/service/:branchId?',verifyToken,checkPermission('Created a New Service'),accountController.getAllAccount)
router.get('/get-all-account/membership/:branchId?',verifyToken,checkPermission('Created a New Membership'),accountController.getAllAccount)

router.get('/get-all-account/bill/:branchId?',verifyToken,checkPermission('Created a New Purchase Bill'),accountController.getAllAccount)
router.get('/get-all-account/bill-receipt/:branchId?',verifyToken,checkPermission('Created a New Purchase Payment'),accountController.getAllAccount)
router.get('/get-all-account/debit-note/:branchId?',verifyToken,checkPermission('Created a New Purchase Debit Note'),accountController.getAllAccount)

module.exports = router
