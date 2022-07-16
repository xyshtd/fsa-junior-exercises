const Loader = {
  loadImages: function (urls, callback) {
    const urlCount = urls.length;
    const loadedImages = [];
    let loadedCount = 0;
    //[...urls] spread operator can't be used on a string
    //common use: copy an array or add other elems
    //urls.forEach((url, index) => {

    [urls].forEach((url, index) => {
      const image = new Image();
      image.onload = () => {
        loadedImages[index] = image;
        loadedCount++
        if (loadedCount === urlCount) {
          callback(loadedImages)
        }
      }
      image.src = url;
    })
  }
}

Loader.loadImages('https://www.fullstackacademy.com/images/fa-logo.png', (loadedImages) => {
  // All images finished loading.
})
