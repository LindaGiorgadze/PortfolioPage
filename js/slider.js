//* Hide Slider on Click *//
const projPageSlider = document.querySelector('#slider2');
// console.log(projPageSlider);
const sliderWindow = document.querySelector('.window');

const arrowBack = projPageSlider.querySelector('.back');
const arrowNext = projPageSlider.querySelector('.next');
const btnBar = projPageSlider.querySelector('.btn-bar')

window.onload = function() {
  document.onclick = function (e) {
    console.log(e.target);
    if (e.target == btnBar) {
      projPageSlider.style.display = 'none';
    }
    if (e.target == arrowNext ?? e.target == sliderWindow) {
      projPageSlider.style.display = 'block';
    }
  }
}

//* Slider on Project Page *//

const imgDiv = document.querySelector('#image2');
const images = document.querySelectorAll('.s-image');

const slider = document.getElementById('slider2');

document.querySelectorAll('.s-image').forEach(item => {
  item.addEventListener('click', event => {
    slider.classList.toggle('containerActive');
    slider.style.display = 'block';
  })
})

for (let i = 0; i < images.length; i++) {
  const element = images[i];

  // console.log(element);
  const imgSrc = element.src;
  // console.log(imgSrc);
  const sliderImages = document.createElement('img');
  sliderImages.classList.add('slider-p')
  sliderImages.src = imgSrc;
  sliderWindow.appendChild(sliderImages);
  // console.log(sliderImages)
}

function next(){
  const imgWidth = document.querySelector('.slider-p').width;
  // console.log(imgWidth)
  document.querySelector(".window").scrollLeft += imgWidth;
}
function back(){
  const imgWidth = document.querySelector('.slider-p').width;
  // console.log(imgWidth)
  document.querySelector(".window").scrollLeft += -imgWidth;
}
