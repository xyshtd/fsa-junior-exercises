/* Install and Require 3rd Party Packages  */
const express = require('express');
const morgan = require('morgan');//const volleyball = require('volleyball')
const path = require('path');

/* Require Internal Modules  */
const postBank = require('./postBank');
const postList = require('./views/postList');
const postDetails = require('./views/postDetails');

//instantiate a new Express app
const app = express();


app.use(morgan('dev'))//'dev' mode optional //app.use(volleyball)

/* Static routing */
app.use(express.static(path.join(__dirname, 'public')))//app.use(express.static('public'))

/* Express routing */
//Syntax: app.get("", (req, res) => res.send("Hello World!"));
app.get('/',(req, res)=>{
  const posts = postBank.list();
  //refactored: call the postList function to generate the HTML for the response.
  res.send(postList(posts));
});
//template literals use the toString() method which by default joins the returned array by map with a comma. Use join('') to avoid this.

/* Dynamic routing - Post pages by id 
using route parameters (req.params)*/
app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id); 
  res.send(postDetails(post))
})

/* error Handling with inline HTML block*/
app.get('*', function(req, res, next){
  const errorHTML = `<html>
  <head>
    <title>Page Not Found</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
    <a href="/"><header><img src="/logo.png"/>Wizard News</header></a>
          <p>Sorry, Page Not Found</p>
    </div>
  </body>
  </html>
  `;
  res.status(404);
  res.send(errorHTML);
  next()
});

/* Listen: Set up port and start the server to accept requests */ 
const PORT = 1337;//3000 univeral open port
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

/* optional package for html template literal
npm i lit-html; 
import {html} from 'lit-html'
package.json add:  "type": "module"
*/

/* Middlewares are in the middle of the client's request and the server's response. middleware have access to the request and response objects and they can modify the request and response for things like adding authentication, request headers, parsing request bodies, handling errors. 

Using app.use() means that this middleware will be called for every call to the application. 

middleware can either terminate the HTTP request or pass it on to another middleware function using next

/* if not use morgan
app.use((req, res, next) => {
  console.log(e.g. 'Time:', Date.now())
  next()
}) 
*/