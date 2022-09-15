const { Manager, Engineer, Intern } = require("../classes");
const minify = require('html-minifier').minify;

const generateHTML = (employeeListHTML) => {

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
      />
      <link rel="stylesheet" href="assets/style.css" />
      <title>Work Day Scheduler</title>
    </head>
  
    <body>
      <header class="jumbotron">
        <h1 class="display-3">My Team</h1>
      </header>
      <div class="container">
        ${employeeListHTML}
      </div>
    </body>
  </html>`
}

const generateManagerHTML = (input) => {
return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${input.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${input.getRole()}</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${input.getId()}</li>
      <li class="list-group-item">Email: ${input.getEmail()}</li>
      <li class="list-group-item">Office Number: ${input.getOfficeNumber()}</li>
    </ul>
  </div>
</div>`
}

const generateEngineerHTML = (input) => {
return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${input.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${input.getRole()}</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${input.getId()}</li>
      <li class="list-group-item">Email: ${input.getEmail()}</li>
      <li class="list-group-item">Github: ${input.getGithub()}</li>
    </ul>
  </div>
</div>`
}

const generateInternHTML = (input) => {
return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${input.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${input.getRole()}</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${input.getId()}</li>
      <li class="list-group-item">Email: ${input.getEmail()}</li>
      <li class="list-group-item">School: ${input.getSchool()}</li>
    </ul>
  </div>
</div>`
}

const GenerateEmployeeHTML = (employees) => {
  let innerHTML = "";

  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    if (employee instanceof Manager) {
      innerHTML += generateManagerHTML(employee);
    } else if (employee instanceof Engineer) {
      innerHTML += generateEngineerHTML(employee);
    } else if (employee instanceof Intern) {
      innerHTML += generateInternHTML(employee);
    }
  }

  return minify(generateHTML(innerHTML), {
    collapseWhitespace: true
  });
}

module.exports = GenerateEmployeeHTML;