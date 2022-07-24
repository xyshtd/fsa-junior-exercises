const express = require('express');

const app = express();

app.use((req, res, next)=> {
  console.log(`${ req.method} - ${ req.url }`);
  next();
});

const employees = [
  { id: 1, name: 'moe'},
  { id: 2, name: 'larry', managerId: 1},
  { id: 4, name: 'shep', managerId: 2},
  { id: 3, name: 'curly', managerId: 1},
  { id: 5, name: 'groucho', managerId: 3},
  { id: 6, name: 'harpo', managerId: 5},
  { id: 8, name: 'shep Jr.', managerId: 4},
  { id: 99, name: 'lucy', managerId: 1}
];
console.log(employees);

app.use(express.static('assets'));

app.get('/', (req, res)=> {
  res.send(`
  <html>
    <head>
      <title>Acme Employees Web</title>
      <link href='/styles.css' rel='stylesheet' /> 
    </head>
    <body>
      <h1>Acme Employees Web</h1>
      <ul>
        ${
          employees.map( employee => {
            return `<li><a href='/employees/${employee.id}'>${ employee.name }</a></li>`;
          }).join('')
        }
      </ul>
    </body>
  </html>
  `);
});

app.get('/employees/:id', (req, res)=> {
  const employee = employees.find(employee => employee.id === +req.params.id);
  if(!employee){
    res.status(404).send(`
      <html>
        <head>
          <title>
            Employee Not Found
          </title>
          <link href='/styles.css' rel='stylesheet' />
        </head>
        <body>
          <div>
            A user with an id of ${req.params.id} does not exist
            <a href='/'>Try Again</a>
          </div>
        </body>
      </html>
    `);
  }
  else {
    const managerId = employee.managerId;
    const manager = employees.find(employee => employee.id === managerId);
    res.send(`
    <html>
      <head>
        <title>Acme Employees Web</title>
        <link href='/styles.css' rel='stylesheet' /> 
      </head>
      <body>
        <h1>Acme Employees Web</h1>
        <a href='/'>All Employees</a>
        <div>
          Details for ${ employee.name }
          <br />
          ${ employee.name } is managed by ${ manager ? manager.name : 'nobody' }
        </div>
      </body>
    </html>
    `);
  }
});


app.use((req, res)=> {
  res.status(404).send(`
    <html>
      <head>
        <title>
          Page Not Found
        </title>
        <link href='/styles.css' rel='stylesheet' />
      </head>
      <body>
        <div>
          ${req.url } does not exist
          <a href='/'>Try Again</a>
        </div>
      </body>
    </html>
  `);

});


const port = process.env.PORT || 3000;


app.listen(port, ()=> console.log(`listening on port ${port}`));
