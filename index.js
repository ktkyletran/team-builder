// Dependencies
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

// Data storage
const engineersArr = [];
const internsArr = [];
const managersArr =[];

// Prompts for each role
const addEmployeePrompts = {
  name: 'role',
  type: 'list',
  message: 'Would you like to add another team member?',
  choices: ['Manager', 'Engineer', 'Intern', "No, I'm finished building my team"]
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

// Add new manager
const addManager = () => {
  inquirer
  .prompt(managerPrompts)
  .then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.office, answers.role)
    manager.getRole()

    managersArr.push(manager)
  })
  .then(() => {
    newMember();
  })
}

// Add new engineer
const addEngineer = () => {
  inquirer
  .prompt(engineerPrompts)
  .then((answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    engineer.getGithub();
    engineer.getRole();

    engineersArr.push(engineer);

    engineersArr.forEach(newEngineer => generateEngineer(newEngineer));
  })
  .then(() => {
    newMember();
  })
}

// Add new intern
const addIntern = () => {
  inquirer
  .prompt(internPrompts)
  .then((answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    intern.getSchool();
    intern.getRole();

    internsArr.push(intern)

    internsArr.forEach(newIntern => generateEngineer(newIntern));
    console.log(Object.keys({...answers}));
  })
  .then(() => {
    newMember();
  })
}

// Add new member
const newMember = () => {
  inquirer
  .prompt(addEmployeePrompts)
  .then((answers) => {
    let roles = answers.role;
    console.log(answers)
    switch (roles) {
      case 'Manager':
        addManager();
        break;
      case 'Engineer':
        addEngineer();
        break;
      case 'Intern':
        addIntern();
        break;
      case "No, I'm finished building my team":
        renderHTML("teamBuilder.html", generateTeam(answers));
        break;
      default:
        console.log("Error");
        break;
    }
  })
}

// Writes HTML file
const renderHTML = (file, data) => {
  let directory = process.cwd() + "/";
  console.log('Your HTML has been rendered! (:')
  return fs.writeFileSync(path.join(directory, file), data)
};

const generateTeam = (answers) => {
  let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Builder | By Kyle Tran</title>
  <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
  <!-- CSS -->
  <link rel="stylesheet" href="./src/style.css">
  </head>
  
  <body>
    <div class="container" id="title-container">
      <div class="row">
        <div class="col-md-12" id="title">
          <p>Team<span><i class="fas fa-hammer"></i></span>Builder</p>
          <h1>By Kyle Tran</h1>
        </div>
      </div>
    </div>
  
    <div class="container" id="result-container">
      <div class="row">
        <div class="col-md-12" id="results">
  `

  let htmlEnd = `
        </div>
      </div>
    </div>
  
    <script src="/index.js"></script>
  </body>
  </html>
  `

  managersArr.forEach(newManager => {
    let managerHTML = generateManager(newManager)
    html += managerHTML;
    console.log(managerHTML);
  });
  engineersArr.forEach(newEngineer => {
    let engineerHTML = generateEngineer(newEngineer)
    html += engineerHTML;
  });
  internsArr.forEach(newIntern => {
    let internHTML = generateIntern(newIntern)
    html += internHTML;
  });

  html += htmlEnd;
  return html;
};

// addIntern();
// addEngineer();
newMember();
// renderHTML();
// addManager();
// generateTeam();