$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

/* */
  //when scroil
  $(window).scroll(function(){

    var sc= $(this).scrollTop();
    if(sc > 500){
        $('.headnav').addClass('staky');
    }else{
    $('.headnav').removeClass('staky'); 
    } 
    
    //scroltop
     if(sc > 500){
        $('.scroltop').fadeIn(3000);
    }else{
       $('.scroltop').fadeOut(); 
    }



      //smooth scrol
      $('.navlist ul li').click(function(){
        $('body,html').animate({
            scrollTop : $($(this).attr('href')).offset().top
        })
    })
     })

     //scroltop to top
    $('.scroltop').click(function(){
        $('body,html').animate({
            scrollTop :0},2000)
    });

    $('.nav-span').click(function(){
        $(this).toggleClass('nav-sp'),
        $('.navlist-span').slideToggle(1000);
    });

});