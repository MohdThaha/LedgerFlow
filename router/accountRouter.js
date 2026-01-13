const express = require("express")
const router = new express.Router()

const accountController = require("../controller/accountController")
const journalController = require("../controller/journalController")

const accountDashboard = require("../controller/accountsDashboard")

const checkPermission = require('../controller/permission');
const { verifyToken } = require('../controller/middleware');
const { nexVerifyToken } = require('../controller/nexMiddleware');
const { verifyBranchForWrite, verifyBranchForRead } = require('../controller/branchMiddleware');




//Accounts
router.post('/add-account',verifyToken,checkPermission('Created a New Account'),verifyBranchForWrite,accountController.addAccount)
// router.get('/get-all-account/:branchId?',verifyToken,checkPermission('Viewed Account Information'),verifyBranchForRead,accountController.getAllAccount)
router.get('/get-all-account-balance/:branchId?',verifyToken,checkPermission('Viewed Account Information'),verifyBranchForRead,accountController.getAllAccountBalance)
router.get('/get-one-account/:accountId/:branchId?',verifyToken,checkPermission('Viewed Account Information'),verifyBranchForRead,accountController.getOneAccount)
router.put('/edit-account/:accountId',verifyToken,checkPermission('Edited Account Information'),verifyBranchForWrite,accountController.editAccount)
router.delete('/delete-account/:accountId/:branchId?',verifyToken,checkPermission('Deleted an Account'),verifyBranchForRead,accountController.deleteAccount)
router.get('/get-one-account-balance/:accountId/:branchId?',verifyToken,checkPermission('Viewed Account Balance'),verifyBranchForRead,accountController.getBalance)


// Dashboard
router.get('/get-accountDashboard-overview', verifyToken, checkPermission('Viewed Account Dashboard'), accountDashboard.getOverviewData)
router.get('/get-accountDashboard-totalRevenueOverTime', verifyToken, checkPermission('Viewed Account Dashboard'),accountDashboard.getTotalRevenueOverTime)
router.get('/get-accountDashboard-accountReceivableAging', verifyToken, checkPermission('Viewed Account Dashboard'),accountDashboard.getAccountReceivableAging)
router.get('/get-accountDashboard-accountPayableAging', verifyToken, checkPermission('Viewed Account Dashboard'), accountDashboard.getAccountPayableAging)
router.get('/get-accountDashboard-invoiceStatus', verifyToken, checkPermission('Viewed Account Dashboard'), accountDashboard.getInvoiceStatus)



//Journal
router.post('/add-journal-entry',verifyToken,checkPermission('Added a Journal Entry'),verifyBranchForWrite,journalController.addJournalEntry)
router.get('/get-all-journal/:branchId?',verifyToken,checkPermission('Viewed Journal Entry'),verifyBranchForRead,journalController.getAllJournal)
router.get('/get-one-journal/:id/:branchId?',verifyToken,checkPermission('Viewed Journal Entry'),verifyBranchForRead,journalController.getOneJournal)
router.get('/get-last-journal-prefix/:branchId?',verifyToken,checkPermission('Added a Journal Entry'),verifyBranchForRead,journalController.getLastJournalPrefix)
router.put('/update-journal/:id',verifyToken,checkPermission('Edited Journal Entry'),verifyBranchForWrite,journalController.updateJournalEntry)
router.delete('/delete-journal/:id/:branchId?',verifyToken,checkPermission('Deleted Journal Entry'),verifyBranchForRead,journalController.deleteJournalEntry)






//Trial Balance

router.get('/get-one-trial-balance/:accountId/:branchId?',verifyToken,checkPermission('Viewed Account Information'),verifyBranchForRead,accountController.getOneTrailBalance)



//Nexportal
router.get('/get-all-account-nexportal',nexVerifyToken,accountController.getAllAccount)


module.exports = router
