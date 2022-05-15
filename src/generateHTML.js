// starter code
// TODO: update html content & add cards

function addManager(manager) {

  // function to add manager to html
  const output = `
  
  <div class="col"> 
    <div class="card-body card m-3">
      <h5 class="card-title card-header">Manager </h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${manager.id}</li>
        <li class="list-group-item card-title">Name: ${manager.name}</li>
        <li class="list-group-item">Email: ${manager.email}</li>
        <li class="list-group-item">Office phone: ${manager.officePhone}</li>      
      </ul>    
    </div>
  </div>
  `;

  return output;
}

function addEngineer(engineer) {
  const output = `
  
  <div class="col"> 
    <div class="card-body card m-3">
      <h5 class="card-title card-header">Manager </h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${engineer.id}</li>
        <li class="list-group-item card-title">Name: ${engineer.name}</li>
        <li class="list-group-item">Email: ${engineer.email}</li>
        <li class="list-group-item">Office phone: ${engineer.gitHub}</li>
        <li class="list-group-item">Office phone: ${engineer.githubLink}</li>        
      </ul>    
    </div>
  </div>
  `;

  return output;
}

function addInter(intern) {
  const output =`
   
  <div class="col"> 
    <div class="card-body card m-3">
      <h5 class="card-title card-header">Manager </h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${intern.id}</li>
        <li class="list-group-item card-title">Name: ${intern.name}</li>
        <li class="list-group-item">Email: ${intern.email}</li>
        <li class="list-group-item">Office phone: ${intern.school}</li>   
      </ul>    
    </div>
  </div>
  `;

  return output;
}

function generateHTML(data) {
  let htmlString = ` <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>My Team</title>
  </head>
  <body>
    <div class="jumbotron-fluid">
      <div class="jumbotron-fluid">
        <div class="border m-3" style = "center max-width:18rem;">
          <h1 class="text-bg-secondary text-center mt-3"> MY TEAM ROCKS</h1>
        </div> 
        <div class="row row-cols-1 row-cols-md-3 g-4">
`;

  for (const m of data.manager) {
    htmlString += addManager(m);
  }

  for (const e of data.engineer) {
    htmlString += addEngineer(e);
  }

  for (const i of data.intern) {
    htmlString += addInter(i);
  }

  htmlString += `
            </div>
          
        </div>
      </div>
    </div>
  </body>
  </html>`;

  return htmlString;
}

// export html file
module.exports = generateHTML;
