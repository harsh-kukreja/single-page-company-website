$(function () {
    new WOW().init();


    /***********************************
        WORK SECTION
    ***********************************/

    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function (openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
    
    /***********************************
        TEAM SECTION
    ***********************************/
    
    $(".team-members").owlCarousel({
        items: 3,
        autoplay: true, 
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true, 
        responsive:{
          0:{
              items: 1,
              autoplayHoverPause: false,
          },
          480:{
            items:2,  
          },
          760:{
              items:3,
          },
        },
    });
    
    $(".customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true, 
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true, 
    });
    
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
        
    });
    $(".client-logos").owlCarousel({
        items: 6,
        autoplay: true, 
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true, 
        responsive:{
          0:{
              items: 2,
              autoplayHoverPause: false,
          },
          480:{
            items:4,  
          },
          760:{
              items:5,
          },
          992:{
             item:6, 
          } , 
        },
    });
    
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $("nav").addClass("wg-top-nav");
            $(".btn-back-to-top").fadeIn();
        }
        else{
             $("nav").removeClass("wg-top-nav");
             $(".btn-back-to-top").fadeOut();
        }
    });
    
    $("a.smooth-scroll").click(function(event){
        //Prevents to perform the default operation
        event.preventDefault();
        
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 69,
        }, 1250, "easeInOutExpo");
    });
    
    if($(this).scrollTop() > 100){
        $("nav").addClass("wg-top-nav");
        $(".btn-back-to-top").fadeIn();
    }
    else{
         $("nav").removeClass("wg-top-nav");
         $(".btn-back-to-top").fadeOut();
    }
});
