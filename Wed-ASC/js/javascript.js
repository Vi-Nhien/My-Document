

$(document).ready(function() {

    $("#f-row").each(function() {
      $(this).owlCarousel({
            items:6,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause:true
      });
    });

    $("#s-row").each(function() {
        $(this).owlCarousel({
              items:5,
              loop:true,
              margin:10,
              autoplay:true,
              autoplayTimeout:1000,
              autoplayHoverPause:true
        });
      });

      $("#carousel-media").each(function(){
            $(this).owlCarousel({
            loop:true,
            margin:16,
            nav:true,
            responsive:{
            0:{
                  items:1
            },
            600:{
                  items:2
            },
            1000:{
                  items:3
            }
            }
      });
      });



});