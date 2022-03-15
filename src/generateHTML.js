// starter code
// TODO: update html content & add cards

function generateHTML(data) {
    return `${data.title}
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
    <div class="card-group">
      <div class="jumbotron-fluid">
        <div class="card m-3 jumbotron-fluid">
         <div class="card " style = "max-width:18rem;">
         <div class="card-body">
      <!-- // Employee -->
          <h5 class="card-title">Role:${data.role}</h5>
          <p class="card-text">Name: ${data.name}</p>
          <p class="card-text">Email: ${data.email}</p> 
        <!-- // Manager + override Role-->
          <p class="card-text">Office Number: ${data.officePhone}</p>
          <!-- // Engineer + override Role-->
          <p class="card-text">GitHub Username: ${data.userName}</p>
          <p class="card-text">GitHub Link: ${data.githubLink}</p>
          <!-- // Intern + override Role-->
          <p class="card-text">School: ${data.employeeID}</p>
        <p class="card-text"><small class="text-muted">${data.employeeID}</small></p>
        </div>
        </div>
      </div>
    </div>
    </body>
    </html>
`;
}

// export html file
module.exports = generateHTML;

