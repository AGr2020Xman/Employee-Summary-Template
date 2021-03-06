const { prompt } = require("inquirer");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const questions = require("../utils/questions")

const path = require("path");
const fs = require("fs");
const render = require("./htmlRenderer");
const { resolve } = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "../output"); //../output maybe
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employees = [];
let resolveFn;

const addManager = () => {
    prompt(questions.managerQuestions).then((answers) => {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
            );
        employees.push(manager);
        questions.existingIDs.push(answers.id);
        selectQuestionSet();        
    })
}

const addEngineer = () => {
    prompt(questions.engineerQuestions).then((answers) => {
        const engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
            );
        employees.push(engineer);
        questions.existingIDs.push(answers.id);
        selectQuestionSet();        
    })
}

const addIntern = () => {
    prompt(questions.internQuestions).then((answers) => {
        const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
            );
        employees.push(intern);
        questions.existingIDs.push(answers.id);
        selectQuestionSet();        
    })
}

const selectQuestionSet = () => {
    prompt(questions.teamContinueQuestion).then((response) => {
        switch (response.continueType) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "Finished":
                resolveFn();
                break;
        }
    })
};

const buildTeam = () => new Promise((resolve, reject) => {
    resolveFn = resolve;
    console.log("=== Begin adding team members. ===")
    addManager();    
})

const startBuild = () => prompt(questions.beginOrLeave).then((answer) => answer.init);

const renderEmployees = () => new Promise ((resolve, reject) => {
        console.log("===  Profiles recorded. Creating profile dashboard. ===");
        console.log("=======================================================");
        const renderedHTML = render(employees);
        resolve(renderedHTML);
});

const generateTeamHTML = (teamDetails) => {
    console.log("=== Generating HTML ===");
    fs.writeFileSync(outputPath, teamDetails, "utf-8");
};

module.exports = { addManager, addEngineer, addIntern, selectQuestionSet, buildTeam, startBuild, renderEmployees, generateTeamHTML }

