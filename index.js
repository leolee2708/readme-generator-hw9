var fs = require("fs");
const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title:",
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Installation instruction:",
    },
    {
        type: "input",
        name: "usage",
        message: "Usage information you'd like to add:",
    },
    {
        type: "input",
        name: "rules",
        message: "none-contributions please!(please type: NONE)",
    },
    
    {
        type: "list",
        name: "licenses",
        message: "Choose your license for your project:",
        choices: [
            "MIT",
            "ISC",
            "BSD-3-Clause",
            "UNLICENSED",
        ]
    },
    {
        type: "input",
        name: "test",
        message: "How to test your project:",
    },
    {
        type: "input",
        name: "username",
        message: "what is your github username?"

    },
    {
        type: "input",
        name: "emailaddress",
        message: "what is your email address",
    }
]

function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [License](#license)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation 
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## Contributors rules
  ${data.rules}
  
  ## License
  ${data.licenses}
  
  ## Test
  ${data.test}
  ## Questions
  Contact me:
  
  Github:[${data.username}](https://github.com/leolee2708)
  
  Email:[${data.emailaddress}](https://github.com/leolee2708)
  `;
}
function writetoFile(filename, data) {
    fs.writeFile(filename, data, (err) =>
        err ? console.log(err) : console.log("No errors"));
}
function initiation() {
    inquirer.prompt(questions).then((data) => {
        writetoFile('README.md', generateMarkdown({...data}),
        console.log('Generating READ...'),
        console.log(data),
    )})


}



initiation();

