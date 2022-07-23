const http = require('http');
//http needs res.end()
const server = http.createServer((req, res)=> {
  if(req.url === '/'){
    res.write(`
    <html>
      <head>
        <title>Home</title>
        <style>
          body {
            font-family: verdana;
          }
          nav {
            padding: 1rem;
            background-color: dodgerBlue;
            display: flex;
            justify-content: space-around;
          }

          nav a {
            color: cornSilk;
            padding: 0.5rem;
          }
          nav a.selected {
            border: solid 1px cornSilk;
          }

        </style>
      </head>
      <body>
        <nav>
          <a href='/' class='selected'>Home</a>
          <a href='/products'>Products</a>
          <a href='/faqs'>FAQs</a>
        </nav>
      </body>
    </html>
    `);
    res.end();
  }
  else if(req.url === '/products'){
    res.write(`
    <html>
      <head>
        <title>Products</title>
        <style>
          body {
            font-family: verdana;
          }
          nav {
            padding: 1rem;
            background-color: dodgerBlue;
            display: flex;
            justify-content: space-around;
          }

          nav a {
            color: cornSilk;
            padding: 0.5rem;
          }
          nav a.selected {
            border: solid 1px cornSilk;
          }

        </style>
      </head>
      <body>
        <nav>
          <a href='/'>Home</a>
          <a href='/products' class='selected'>Products</a>
          <a href='/faqs'>FAQs</a>
        </nav>
      </body>
    </html>
    `);
    res.end();
  }
  else if(req.url === '/faqs'){
    res.write(`
    <html>
      <head>
        <title>FAQs</title>
        <style>
          body {
            font-family: verdana;
          }
          nav {
            padding: 1rem;
            background-color: dodgerBlue;
            display: flex;
            justify-content: space-around;
          }

          nav a {
            color: cornSilk;
            padding: 0.5rem;
          }
          nav a.selected {
            border: solid 1px cornSilk;
          }

        </style>
      </head>
      <body>
        <nav>
          <a href='/'>Home</a>
          <a href='/products'>Products</a>
          <a href='/faqs' class='selected'>FAQs</a>
        </nav>
      </body>
    </html>
    `);
    res.end();
  }
  else {
    res.statusCode = 404;
    res.write(`<h1>Not found <a href='/'>Try Again</a>`);
    res.end();
  }
});

const port = process.env.PORT || 3000;

server.listen(port, ()=> {
  console.log(`listening on port ${port}`);
});
