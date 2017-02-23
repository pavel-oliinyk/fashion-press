
   $('.top-slider').slick({
   	 autoplay:false,
     prevArrow:'.left-arrow',
     nextArrow:'.right-arrow',
   	 slidesToShow: 1,

 

   })

1
  
      $('.menu-icon-header').click(function () {

          $('.menu-header').slideToggle('medium');
4
      });
5
 
$(function() {
  // при нажатии на кнопку scrollup
  $('.scrolltop').click(function() {
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})
// при прокрутке окна (window)
$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>600) {
    // то сделать кнопку scrollup видимой
    $('.scrolltop').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scrolltop').fadeOut();
  }
});