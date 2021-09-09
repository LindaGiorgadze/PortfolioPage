$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: 'linear',
    touchMove: true,
    prevArrow:'<button class="slick-prev"> < </button>',
    nextArrow:'<button class="slick-next"> > </button>',
    
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });
  
  
  var imgs = $('.slider img');
  imgs.each(function(){
    var item = $(this).closest('.item');
    item.css({
      'background-image': 'url(' + $(this).attr('src') + ')', 
      'background-position': 'center',            
      '-webkit-background-size': 'cover',
      'background-size': 'cover', 
    });
    $(this).hide();
  });