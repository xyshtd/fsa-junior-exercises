const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use(express.static('assets'));
console.log(express.static('assets').toString());

/*
app.use((req, res, next)=> {
  console.log(`You made a ${req.method} request to ${req.url}`);
  next();
});
*/

const products = [
  { id: 1, name: 'foo'},
  { id: 2, name: 'bar'},
  { id: 3, name: 'bazz'},
];

app.get('/', (req, res)=> {
  res.send(`
    <html>
      <head>
        <title>Home</title>
        <link rel='stylesheet' href='/style.css' />
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
});

app.get('/products', (req, res)=> {
  res.send(`
    <html>
      <head>
        <title>Products</title>
        <link rel='stylesheet' href='/style.css' />
      </head>
      <body>
        <nav>
          <a href='/'>Home</a>
          <a href='/products' class='selected'>Products</a>
          <a href='/faqs'>FAQs</a>
        </nav>
        <ul>
        ${
          products.map( product => {
            return `<li>
              <a href='/products/${product.id}'>
                ${ product.name }
              </a>
            </li>`;
          }).join('')
        }
        </ul>
      </body>
    </html>
  `);
});

app.get('/products/:id', (req, res)=> {
  console.log(req.params.id);
  const product = products.find(product => product.id === req.params.id*1);

  res.send(`
    <html>
      <head>
        <title>Products ${product.name}</title>
        <link rel='stylesheet' href='/style.css' />
      </head>
      <body>
        <nav>
          <a href='/'>Home</a>
          <a href='/products' class='selected'>Products</a>
          <a href='/faqs'>FAQs</a>
        </nav>
        <div>Details for ${product.name}</div>
      </body>
    </html>
  `);
});

app.get('/faqs', (req, res)=> {
  res.send(`
    <html>
      <head>
        <title>FAQs</title>
        <link rel='stylesheet' href='/style.css' />
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
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
  console.log(`listening on port ${port}`);
});
