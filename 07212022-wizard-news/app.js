/* Install and Require 3rd Party Packages  */
const express = require('express');
const morgan = require('morgan');//const volleyball = require('volleyball')
const path = require('path');

/* Require Internal Modules  */
const posts = require('./postBank');
const postList = require('./views/postList');
const pozstDetails = require('./views/postDetails');

//instantiate a new Express app
const app = express();


app.use(morgan('dev'))//'dev' mode optional //app.use(volleyball)

/* Static routing */
app.use(express.static(path.join(__dirname, 'public')))//app.use(express.static('public'))

/* Express routing */
//Syntax: app.get("", (req, res) => res.send("Hello World!"));
app.get('/',(req, res)=>{
  //refactored: call the postList function to generate the HTML for the response.
  res.send(postList(posts));
});

/* Dynamic routing - Post pages by id 
using route parameters (req.params)*/
//const post = postBank.find(id)
app.get('/posts/:id', (req, res) => {
  const post = posts.find(post => post.id === req.params.id*1); 
  res.send(postDetails(post))
})

/* error Handling e.g. with inline HTML block*/
app.get('*', function(req, res){
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
});

/* Listen: Set up port and start the server to accept requests */ 
const PORT = process.env.PORT || 1337;//3000 univeral open port
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
  console.log('middleware called')
  next()
}) 
*/

//The req.params property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /student/:id, then the “id” property is available as req.params.id. This object defaults to {}.