// /*SLIDER*/
// function next(){
//     document.querySelector(".window").scrollLeft += 300;
//   }
// function back(){
// document.querySelector(".window").scrollLeft += -300;
// }
//   /*FORM ;)*/
// document.querySelector("button").onclick=function(){
//     var url = document.querySelector("input").value;
//     if(url != ""){
//         var img = document.createElement("img");
//         img.src=url;
//         document.querySelector(".window").appendChild(img);
//         document.querySelector("input").value="";
//         //yapamadım aq
//         /* var sayi = 99999;
//         document.querySelector(".window").scrollLeft += sayi;
//         */
//         /*var i;
//         for(i = 1900; i < 9999; i=i+300){
//         document.querySelector(".window").scrollLeft = i;
//         }*/
//     }
// }

//* Slider on Project Page *//

const imgDiv = document.querySelector('#image2');
const images = document.querySelectorAll('.s-image');

const slider = document.getElementById('slider2');

document.querySelectorAll('.s-image').forEach(item => {
  item.addEventListener('click', event => {
    slider.classList.toggle('containerActive')
  })
})

const projPageSlider = document.querySelector('#slider2');
// console.log(projPageSlider);
const sliderWindow = document.querySelector('.window');


for (let i = 0; i < images.length; i++) {
  const element = images[i];
  element.addEventListener("click", function() {
    displayCode(slider2, element);
  });


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

window.addEventListener('mouseup',function(event){
  var slider2 = document.getElementById('slider2');
  if(event.target != slider2 && event.target.parentNode != slider2){
      slider2.style.display = 'none';
  }
});  