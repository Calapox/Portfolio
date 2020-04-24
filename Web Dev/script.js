$(document).ready(function(){

    $('.navi a[href*="#"]').on('click', function(e) {
        e.preventDefault()
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top -100,
        },500,'linear'
      )
    })

    $('.navi a').click( function() {
        $(this).parent().siblings().children().removeClass('active');
        $(this).addClass('active');
    });

})


$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('nav').addClass('scrollBar');
    }
    else {
        $('nav').removeClass('scrollBar');
    }
    

    
});










