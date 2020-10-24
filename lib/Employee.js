// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, email, id){
        this.name=name;
        this.email=email;
        this.id=id;
        this.role="Employee";
    }

    getName = () => this.name;
    getEmail = () => this.email;
    getId = () => this.id;
    getRole = () => this.role;
}  

module.exports = Employee;