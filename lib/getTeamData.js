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

const createManager = () => {
    prompt()
}