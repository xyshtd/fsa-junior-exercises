module.exports = function postDetails(post){
  return `<!DOCTYPE html>
  <html>
  <head>
    <title>${post.title}</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
    <a href="/"><header><img src="/logo.png"/>Wizard News</header></a>
        <div class='news-item'>
          <p>
            ${post.title}
            <small>(by ${post.name})</small>
          </p>
          <p>${post.content}</p>
        </div>
    </div>
  </body>
</html>`;
}
