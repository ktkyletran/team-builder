const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generateHtml = require('./src/generateHtml');
const generateManager = require('./src/generateManager');
const generateEngineer = require('./src/generateEngineer');
const generateIntern = require('./src/generateIntern');

const engineersArr = [];
const internsArr = [];

const addEmployeePrompts = {
  name: 'role',
  type: 'list',
  message: 'Would you like to add another team member?',
  choices: ['manager', 'engineer', 'intern', "No, I'm finished building my team"]
}

const managerPrompts = [
  {
    name: 'name',
    type: 'input',
    message: "What is the manager's name?"
  },
  {
    name: 'id',
    type: 'input',
    message: "What is the manager's id?"
  },
  {
    name: 'email',
    type: 'input',
    message: "What is the manager's email?"
  },
  {
    name: 'office',
    type: 'input',
    message: "What is the manager's office number?"
  }
];

const engineerPrompts = [
  {
    name: 'name',
    type: 'input',
    message: "What is the engineer's name?"
  },
  {
    name: 'id',
    type: 'input',
    message: "What is the engineer's id?"
  },
  {
    name: 'email',
    type: 'input',
    message: "What is the engineer's email?"
  },
  {
    name: 'github',
    type: 'input',
    message: "What is the engineer's GitHub username?"
  }
];

const internPrompts = [
  {
    name: 'name',
    type: 'input',
    message: "What is the intern's name?"
  },
  {
    name: 'id',
    type: 'input',
    message: "What is the intern's id?"
  },
  {
    name: 'email',
    type: 'input',
    message: "What is the intern's email?"
  },
  {
    name: 'school',
    type: 'input',
    message: "What school did the intern atend?"
  }
];