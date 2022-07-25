const express = require('express')
const morgan = require('morgan')
const app = express();
const movies=require('./movieData')
app.use(morgan('dev'))
app.use(express.static('public'))

//listing 
app.get('/', (req,res) => {
    res.send(`
    <html>
    <head>
        <title>IMDb Top 10 Movies</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="/style.css"></link>
    </head>
    <body>
    <header>
        <nav>
        <a href="/">IMDb Top 10 Movies</a>
        </nav>
    </header>
    <div class='listing'>
      <ul>
        ${movies.map(movie=>{
            return `<li><span>${movie.rank}&nbsp&nbsp<a href='/movies/${movie.rank}'>
            ${movie.title}</a></span><br>
            <small>Genre: ${movie.genre}&nbsp&nbsp&nbsp|&nbsp&nbsp&nbspYear: ${movie.year}&nbsp&nbsp&nbsp|&nbsp&nbsp&nbspRating: ${movie.rating}</small>
            </li>`
        }).join('')
        }
      </ul>
    </div>
    </body>
    </html>
`)
})

//details pages
app.get('/movies/:rank', (req,res) => {
    const movie = movies.find(movie=>movie.rank === req.params.rank*1);
    if(!movie){
        res.status(404).send(`<html>
        <head>
            <title>Movie Not Found</title>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="/style.css"></link>
        </head>
        <body>
        <header>
            <nav>
            <a href="/">IMDb Top 10 Movies</a>
            </nav>
        </header>
          <div class='error'>
          <h1>Movie not found</h1>
          <a href='/movies/1'>Go Back</a>
          </div>
        </body>
        </html>`)
    }
    res.send(`
    <html>
    <head>
        <title>${movie.title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="/style.css"></link>
    </head>
    <body>
    <header>
        <nav>
        <a href="/">IMDb Top 10 Movies</a>
        <a href="/movies/${movie.rank-1}">Previous</a>
        <a href="/movies/${movie.rank+1}">Next</a>
        </nav>
    </header>
    <div>
        <img class="hero-image" src="/${movie.rank}.jpg" />
    </div>
    <div class="summary">
        <h1>${movie.rank}. ${movie.title}</h1>
        <p>${movie.summary}</p>
    </div>
    </body>
    </html>
`)
})

//404 page
app.use((req,res)=>{
    res.status(404).send(
    `<html>
        <head>
            <title>Page Not Found</title>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="/style.css"></link>
        </head>
        <body>
        <header>
            <nav>
            <a href="/">IMDb Top 10 Movies</a>
            </nav>
        </header>
          <div class='error'>
          <h1>Page not found</h1>
          <a href='/'>Go back to homepage</a>
          </div>
        </body>
    </html>`
    )
})


const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`App listening in port ${port}`)
})