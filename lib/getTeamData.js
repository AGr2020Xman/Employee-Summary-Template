const { prompt } = require("inquirer");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const questions = require("../utils/questions")

const path = require("path");
const fs = require("fs");
const render = require("./htmlRenderer");
const greetUser = require("./greetUser");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employees = [];
const exisitingIDs = [];

const createManager = () => {
    prompt(questions.managerQuestions).then((answers) => {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
            );
        employees.push(manager);
        selectQuestionSet();        
    })
}

const createEngineer = () => {
    prompt(questions.managerQuestions).then((answers) => {
        const engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
            );
        employees.push(engineer);
        selectQuestionSet();        
    })
}

const createIntern = () => {
    prompt(questions.managerQuestions).then((answers) => {
        const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
            );
        employees.push(intern);
        selectQuestionSet();        
    })
}

const selectQuestionSet = () => {
    prompt(questions.teamContinueQuestion).then((response) => {
        switch (response.continueType) {
            case "Manager":
                createManager();
                break;
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            case "Finished":
                buildTeam();
                break;
            default: return;
        }
    })
};

