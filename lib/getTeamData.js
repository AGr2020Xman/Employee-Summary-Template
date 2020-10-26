const { prompt } = require("inquirer");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const questions = require("../utils/questions")

const path = require("path");
const fs = require("fs");
const render = require("./htmlRenderer");

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
        exisitingIDs.push(answers.id);
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
        exisitingIDs.push(answers.id);
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
        exisitingIDs.push(answers.id);
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
                renderEmployees();
                break;
            default: return;
        }
    })
};

const buildTeam = () => {
    console.log("Begin adding team members. ")
    createManager();    
};

const startBuild = () => {
    prompt(questions.beginOrLeave).then((answer) => answer.init);
};

const renderEmployees = () => {
    new Promise ((resolve, reject) => {
        console.log("===  Profiles recorded. Creating profile dashboard. ===");
        console.log("=======================================================");
        resolve(render(employees));
});
};

const generateTeamHTML = (teamDetails) => {
    console.log("=== Generating HTML ===");
    fs.writeFileSync(outputPath, teamDetails, "utf-8");
};

module.exports = { createManager, createEngineer, createIntern, selectQuestionSet, buildTeam, startBuild, generateTeamHTML }

