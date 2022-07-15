const header = document.getElementsByTagName('header')[0];

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 65) {
    header.classList.add('active');
  }
  else {
    header.classList.remove('active');
  }
});

/*NodeList(4) [img.carousel-image, img.carousel-image.hidden, img.carousel-image.hidden, img.carousel-image.hidden]
0: img.carousel-image
1: img.carousel-image.hidden
2: img.carousel-image.hidden
3: img.carousel-image.hidden
*/
const carouselImage = document.querySelectorAll('.carousel-image');


let counter = 1;

setInterval(function () {
  for (let i = 0; i < 4; i++) {
    carouselImage[i].classList.add('hidden');
  }

  carouselImage[counter].classList.remove('hidden');

  counter++;

  if (counter === 4) {
    counter = 0;
  }

}, 2000);