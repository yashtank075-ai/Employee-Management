const express = require('express');
const Employee = require('../models/Employee');

//create the employee
exports.createEmployee = async (req,res)=>{
    try{
     const {name,email,position,salary} = req.body;
     
     const newEmployee = new Employee({
        name,email,position,salary
     });

     await newEmployee.save();

     res.status(201).json({
        message:"employee created sucessfully",
        employee:newEmployee
     });

    }catch(err){
        res.status(500).json({
            message:"error creating employee",
            error:err
        });
    }
};

//get all employee
exports.getAllEmployee = async (req,res)=>{
    try{
      const employees = await Employee.find();
      res.status(200).json({
        employees,
        message:"employee fetched successfully"
      });

    }catch(err){
      res.status(500).json({
        message:"error fetching employee"
      });
    }
};


//delete the employee
exports.deleteEmployee = async (req,res)=>{
    try{
       const EmployeeId = req.params.id;
        await Employee.findByIdAndDelete(EmployeeId);
        res.status(200).json({
            message:"employee deleted successfully"
        });
    }catch(err){
        res.status(500).json({
            message:"error deleting employee"
        });
    }
};

//update the employee
exports.updateEmployee = async (req,res)=>{
    try{
       const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id,req.body,{returnDocument: "after"});
        res.status(200).json({
            updatedEmployee,
            message:"employee updated successfully",
        });

    }catch(err){
     res.status(500).json({
        message:"error updating employee"
     });
    }
};

//get single employee
exports.getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    res.status(200).json({
      employee
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};