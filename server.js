// const inquirer, mysql, consoleTable
const inquirer = require('inquirer')
const mysql = require('mysql2')
const consoleTable = require('console.table')

//create a connection to mysql database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employees_db",
})
//connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to the employee database.");
    start();
})

//function to display the main menu and prompt user for action
function start() {

}

//function to view all departments
function viewDepartments() {

}

//function to view all roles
function viewRoles() {

}

//function to view all employees
function viewEmployees() {

}

//function to add a department
function addDepartment() {

}

//function to add a role
function addRole() {

}

//function to add an employee
function addEmployee() {

}

//function to update an employee role
function updateEmployeeRole() {

}