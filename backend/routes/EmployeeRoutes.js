const express = require('express');
const router = express.Router();
const EmployeeRouter = require('../controllers/EmployeeController');


router.post('/create',EmployeeRouter.createEmployee);
router.get('/getall',EmployeeRouter.getAllEmployee);
router.delete('/delete/:id',EmployeeRouter.deleteEmployee);
router.put('/update/:id',EmployeeRouter.updateEmployee);
router.get('/:id',EmployeeRouter.getEmployee);

module.exports = router;