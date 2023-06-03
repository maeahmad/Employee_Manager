// const inquirer, mysql, consoleTable
const inquirer = require('inquirer')
const mysql = require('mysql2')
const consoleTable = require('console.table')

//create a connection to mysql database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Rrania11",
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
    inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a new department",
                "Add a new role",
                "Add a new employee",
                "Update employee role",
                "Exit"
            ]
        }])
        .then(function (answer) {
            switch (answer.action) {
                case "View all departments":
                    viewDepartments();
                    break;
                case "View all roles":
                    viewRoles();
                    break;
                case "View all employees":
                    viewEmployees();
                    break;
                case "Add a new department":
                    addDepartment();
                    break;
                case "Add a new role":
                    addRole();
                    break;
                case "Add a new employee":
                    addEmployee();
                    break;
                case "Remove an employee":
                    removeEmployee();
                    break;
                case "Update employee roles":
                    updateEmployee();
                    break;
                case "Exit":
                    connection.end();
                    break;
            }
        });
}

//function to view all departments
function viewDepartments() {
    connection.query("select * from department", (err, res) => {
        if (err) throw err
        console.table(res)
        start()
    })
}

//function to view all roles
function viewRoles() {
    connection.query("select * from role", (err, res) => {
        if (err) throw err
        console.table(res)
        start()
    })
}

//function to view all employees
function viewEmployees() {
    connection.query("select * from employee", (err, res) => {
        if (err) throw err
        console.table(res)
        start()
    })
}

//function to add a department
function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "newDepartment",
            message: "Please, enter the name of the new department."
        }
    ]).then(data => {
        connection.query("insert into department set ?", {
            name: data.newDepartment
        }, function (err) {
            if (err) throw err
            start()
        })

    })
}

//function to add a role
function addRole() {
    connection.query("select * from department", (err, res) => {
        inquirer.prompt([
            {
                type: "input",
                name: "newTitle",
                message: "Please, enter the name of the title."
            },
            {
                type: "input",
                name: "newSalary",
                message: "Please, enter the amount of salary."
            },
            {
                type: "list",
                name: "newDepartment_id",
                message: "Please, enter the name of the department id new role",
                choices: res.map(department => department.name)
            }
        ]).then(data => {
            let departmentAnswer = res.find(department => department.name === data.newDepartment_id)
            connection.query("insert into role set ?", {
                title: data.newTitle, salary: data.newSalary, department_id: departmentAnswer.id
            })
            start()
        })
    })
}

//function to add an employee similar to role 
function addEmployee() {

}

//function to update an employee role, need to find id of employee I would like to update from employee table. 1. select all from employee then 2. select the role I like to give that employee by quering the role table (2 query) use an update query. Use id of choicen role to adjust the employess new role. 
function updateEmployeeRole() {

}