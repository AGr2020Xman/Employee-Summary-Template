const managerQuestion = [
    {
        type: "input",
        name: "name",
        message: "Please enter the manager's name "
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the manager's Employee Id ",
        validate: (input) => /^[0-9]+$/.test(input) ? true : "The ID can only contain numbers. Please enter only numbers."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the manager's email address ",
        validate: (input) => {
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm
            .test(input) ? true : "Please enter a valid email address "
        }            
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number "
    }
];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name? "
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's employee id? ",
        validate: (input) => /^[0-9]+$/.test(input) ? true : "The ID can only contain numbers. Please enter only numbers." 
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email address? ",
        validate: (input) => {
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm
            .test(input) ? true : "Please enter a valid email address "
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username? "
    },

];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name? "
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's employee id? ",
        validate: (input) => /^[0-9]+$/.test(input) ? true : "The ID can only contain numbers. Please enter only numbers." 
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address? ",
        validate: (input) => {
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm
            .test(input) ? true : "Please enter a valid email address "
        }
    },
    {
        type: "input",
        name: "school",
        message: "What school does the intern's go to? "
    },
];

const teamContinueQuestion = [
    {
        type: "list",
        name: "teamMember",
        message: "Would you like to add another team member? ",
        choices: ["Engineer, Intern, I don't need to add any more team members."]
    }
];

module.exports = { managerQuestion, engineerQuestions, internQuestions, teamContinueQuestion }