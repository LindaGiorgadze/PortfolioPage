/*SLIDER*/
function next(){
    document.querySelector(".window").scrollLeft += 300;
  }
function back(){
document.querySelector(".window").scrollLeft += -300;
}
  /*FORM ;)*/
document.querySelector("button").onclick=function(){
    var url = document.querySelector("input").value;
    if(url != ""){
        var img = document.createElement("img");
        img.src=url;
        document.querySelector(".window").appendChild(img);
        document.querySelector("input").value="";
        //yapamadım aq
        /* var sayi = 99999;
        document.querySelector(".window").scrollLeft += sayi;
        */
        /*var i;
        for(i = 1900; i < 9999; i=i+300){
        document.querySelector(".window").scrollLeft = i;
        }*/
    }
}

