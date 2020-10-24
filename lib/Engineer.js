// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
    constructor(name, email, id, github){
        super(name, email, id);
        this.github = github;
        this.role = "Engineer";
    }

    getGithub = () => this.github;
};

module.exports = Engineer;