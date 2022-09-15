const inquirer = require('inquirer')
const { Manager, Engineer, Intern } = require("./classes")
const GenerateEmployeeHTML = require("./templates")
const fs = require('fs');

const manager = "manager";
const engineer = "engineer";
const intern = "intern";

const addManager = async () => {
    const type = "Manager"
    const {name, id, email, officeNumber} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: `Enter the ${type}'s name`,
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter the ${type}'s ID`,
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter ${type}'s email address`,
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `Enter ${type}'s office nubmer`,
        }
    ])

    return new Manager(name, id, email, officeNumber)
}

const addEngineer = async () => {
    const type = "Engineer"
    const {name, id, email, github} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: `Enter the ${type}'s name`,
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter the ${type}'s ID`,
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter ${type}'s email address`,
        },
        {
            type: 'input',
            name: 'github',
            message: `Enter ${type}'s github`,
        }
    ])

    return new Engineer(name, id, email, github)
}

const addIntern = async () => {
    const type = "Intern"
    const {name, id, email, school} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: `Enter the ${type}'s name`,
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter the ${type}'s ID`,
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter ${type}'s email address`,
        },
        {
            type: 'input',
            name: 'school',
            message: `Enter ${type}'s school`,
        }
    ])

    return new Intern(name, id, email, school)
}

const employeeType = async () => {
    const response = await inquirer
    .prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Select employee type',
            choices: ['engineer', 'intern']
        }
    ])

    return response;
}

const shouldAddAnotherEmployee = async () => {
    const response = await inquirer
    .prompt([
        {
            type: 'confirm',
            name: 'shouldAddAnotherEmployee',
            message: 'Enter another employee?'
        }
    ])
    
    return response
}

const init = async () => {
    const teamMemberInfo = [];
    teamMemberInfo.push(await addManager());
    while (true) {
        const type = await employeeType();
        switch(type.employeeType) {
            case engineer:
                teamMemberInfo.push(await addEngineer());
                break;
            case intern:
                teamMemberInfo.push(await addIntern());
                break;
        }
        const cont = await shouldAddAnotherEmployee();
        if (cont.shouldAddAnotherEmployee) {
            continue;
        } else {
            break;
        }
    }

    const filename = `./output/index.html`;

    fs.writeFile(filename, GenerateEmployeeHTML(teamMemberInfo), (err) =>
    err ? console.log(err) : console.log('Success!')
    );

};

init();