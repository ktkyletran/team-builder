const inquirer = require('inquirer');

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return inquirer
      .prompt([
        {
          name: 'name',
          type: 'input',
          message: "What is the employee's name?",
          validate: answer => /[a-z]/gi.test(answer)
        }
      ])
      .then(answer => {
        this.name = answer.name;
        console.log(this.name)
      })
  }

  getId() {
    return inquirer
    .prompt([
      {
        name: 'id',
        type: 'input',
        message: "What is the employee's id?",
        validate: answer => /[a-z]/gi.test(answer)
      }
    ])
    .then(answer => {
      this.id = answer.id;
      console.log(this.id)
    })
  }

  getEmail() {
    return inquirer
    .prompt([
      {
        name: 'email',
        type: 'input',
        message: "What is the employee's email?",
        validate: answer => /[a-z]/gi.test(answer)
      }
    ])
    .then(answer => {
      this.email = answer.email;
      console.log(this.email)
    })
  }

  getRole() {
    return "Employee"
  }
}

module.exports = Employee;

const employee = new Employee('Kyle', 1, 'fake@email.com')
console.log('---NAME---')
employee.getName();
employee.getId();
employee.getEmail();