//* Slider on Project Page *//

const imgDiv = document.querySelector('#image2');
const images = document.querySelectorAll('.s-image');

const projPageSlider = document.querySelector('#slider2');
const sliderWindow = document.querySelector('.window');


for (let i = 0; i < images.length; i++) {
  const element = images[i];
  element.addEventListener("click", function() {
    projPageSlider.style.display = 'block';
  });
  // console.log(element);
  const imgSrc = element.src;
  // console.log(imgSrc);
  const sliderImages = document.createElement('img');
  sliderImages.classList.add('slider-p');
  sliderImages.src = imgSrc;
  sliderWindow.appendChild(sliderImages);
  // console.log(sliderImages)
};

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
