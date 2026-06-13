(function ($) {

    "use strict";
  
      // COLOR MODE
      let themeClicks = 0;
      $('.color-mode').click(function(){
          $('.color-mode-icon').toggleClass('active')
          $('body').toggleClass('dark-mode')
          themeClicks++;
          if (themeClicks >= 3) {
              window.location.href = 'ai-portfolio.html';
          }
      })
  
      // HEADER
      $(".navbar").headroom();
  
      // PROJECT CAROUSEL
      $('.owl-carousel').owlCarousel({
          items: 1,
          loop:true,
          margin:10,
          nav:true
      });
  
      // SMOOTHSCROLL
      $(function() {
        $('.nav-link, .custom-btn-link').on('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
          event.preventDefault();
        });
      });  
  
      // TOOLTIP
      $('.social-links a').tooltip();
  
  })(jQuery);
  