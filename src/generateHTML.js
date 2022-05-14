// starter code
// TODO: update html content & add cards

function addManager(manager) {

  // TODO: fix the css classes and UI.
  // this is an example UI just to get things working!
  // function to add manager to html
  const output = `
  <div class="card" style="width: 18rem;"> 
  <div class="card-body">
    <h5 class="card-title card-header">Manager</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id: ${manager.id}</li>
      <li class="list-group-item">Name: ${manager.name}</li>
      <li class="list-group-item">Email: ${manager.email}</li>
      <li class="list-group-item">Office phone: ${manager.officePhone}</li>      
    </ul>    
  </div>
</div>
  `;

  return output;

}

function addEngineer(engineer) { 

  const output = `<div class="card" style="width: 18rem;">`
    + `<div class="card-body">`
    + `<h5 class="card-title card-header">Engineer</h5>`
    + `<ul class="list-group list-group-flush">`
    + `<li class="list-group-item">Id: ${engineer.id}</li>`
    + `<li class="list-group-item">Name: ${engineer.name}</li>`
    + `<li class="list-group-item">Email: ${engineer.email}</li>`
    + `<li class="list-group-item">Github: ${engineer.gitHub}</li>`
    + `<li class="list-group-item">Github Link: ${engineer.githubLink}</li>`
    +`</ul></div></div>`;
  return output;

}

function addInter(intern) {

  const output = `<div class="card" style="width: 18rem;">`
  + `<div class="card-body">`
  + `<h5 class="card-title card-header">Intern</h5>`
  + `<ul class="list-group list-group-flush">`
  + `<li class="list-group-item">Id: ${intern.id}</li>`
  + `<li class="list-group-item">Name: ${intern.name}</li>`
  + `<li class="list-group-item">Email: ${intern.email}</li>`
  + `<li class="list-group-item">School: ${intern.school}</li>`
  +`</ul></div></div>`;

return output;

 }


function generateHTML(data) {

  let htmlString = ` <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>`;

  for (const m of data.manager) {
    htmlString += addManager(m);
  }

  for (const e of data.engineer) {
    htmlString += addEngineer(e);
  }

  for (const i of data.intern) {
    htmlString += addInter(i);
  }

  htmlString += `</body></html>`;

  return htmlString;
}


// function generateHTMLDeprecated(data) {
//   return `${data.title}
    
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//       <title>Document</title>
//     </head>
//     <body>
//     <div class="card-group">
//       <div class="jumbotron-fluid">
//         <div class="card m-3 jumbotron-fluid">
//          <div class="card m-2" style = "max-width:18rem;">
//          <div class="card-body">
//       <!-- // Employee -->
//           <h5 class="card-title">Role:${data.title}</h5>
//           <p class="card-text">Name:${data.name} </p>
//           <p class="card-text">Email: ${data.email} </p> 
//         <!-- // Manager + override Role-->
//           <p class="card-text">Office Number:${data.officePhone} </p>
//         <p class="card-text"><small class="text-muted">ID:${data.employeeID}</small></p>
    
//           </div>
//           </div>
//           <div class="card m-2" style = "max-width:18rem;">
//             <div class="card-body">
//               <div class="card-body">
//                 <!-- // Employee -->
//                     <h5 class="card-title">Role:${data.manager}</h5>
//                     <p class="card-text">Name:${data.name}</p>
//                     <p class="card-text">Email:${data.email}</p> 
//           <!-- // Engineer + override Role-->
//           <p class="card-text">GitHub Username: ${data.userName} </p>
//           <p class="card-text">GitHub Link:${data.githubLink} </p>
//         <p class="card-text"><small class="text-muted">ID:${data.employeeID}</small></p>
    
//           </div>
//         </div>
       
//         <div class="card m-2" style = "max-width:18rem;">
//           <div class="card-body">
//             <div class="card-body">
//               <!-- // Employee -->
//                   <h5 class="card-title">Role:${data.title}</h5>
//                   <p class="card-text">Name: </p>
//                   <p class="card-text">Email: </p>
//           <!-- // Intern + override Role-->
//           <p class="card-text">School: </p>
//         <p class="card-text"><small class="text-muted">ID: ${data.employeeID}</small></p>
//         </div>
//         </div>
//       </div>
//     </div>
//     </body>
//     </html>
// `;
// }

// export html file
module.exports = generateHTML;

