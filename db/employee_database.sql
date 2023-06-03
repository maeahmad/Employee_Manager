DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db; 
CREATE TABLE department (id INT PRIMARY KEY AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30));
CREATE TABLE role (id INT PRIMARY KEY AUTO_INCREMENT PRIMARY KEY, title VARCHAR (30), salary DECIMAL, department_id INT, FOREIGN KEY (department_id) REFERENCES department(id) );
CREATE TABLE employee (id INT PRIMARY KEY AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(30), last_name VARCHAR(30), role_id INT, manager_id INT, FOREIGN KEY (role_id) REFERENCES role(id), FOREIGN KEY (manager_id) REFERENCES employee(id));
INSERT INTO department (name) VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');
INSERT INTO role (title, salary, department_id) VALUES  ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Software Engineer', 145000, 2),
    ('Accountant', 120000, 3),
    ('Account Manager', 120000, 3),
    ('Legal Team Lead', 120000, 4),
    ('Lawyer', 80000, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Mike', 'Johnson', 3, 1),
    ('Emily', 'Williams', 4, 3),
    ('David', 'Brown', 5, 4),
    ('Sarah', 'Taylor', 6, 4);

SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, '', manager.last_name) AS manager FROM employees_db.employee
INNER JOIN employees_db.role ON employee.role_id = role.id
INNER JOIN employees_db.department ON role.department_id = department.id
LEFT JOIN employees_db.employee AS manager ON employee.manager_id = manager.id; 
