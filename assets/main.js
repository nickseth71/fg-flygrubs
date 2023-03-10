$(function(){
    //Home spotlight parallax
    $.fn.parallax = function(resistance, mouse) {
        $el = $(this);
        TweenLite.to($el, 0.2, {
          x: -((mouse.clientX - window.innerWidth / 2) / resistance),
          y: -((mouse.clientY - window.innerHeight / 2) / resistance)
        });
      };
    $(document).mousemove(function(e) {
        $(".worm1").parallax(-30, e);
        $(".worm2").parallax(30, e);
        $(".worm3").parallax(-35, e);
        $(".worm4").parallax(-30, e);
        $(".worm5").parallax(20, e);
        $(".worm6").parallax(-10, e);
        $(".worm7").parallax(20, e);
        $(".worm8").parallax(-5, e);
        $(".worm9").parallax(-30, e);
        $(".worm10").parallax(15, e);
        $(".Pack").parallax(-60, e);
        $(".Hen").parallax(-50, e);
    });

    //Bowl animation home page
    $('.Circle__Wrap ul li').on('click', function(){
      var _currIndex = $(this).index();
      $('.Circle__Wrap ul li').removeClass('active');
      $(this).addClass('active');
      TweenMax.to($('.Home__Bowl__Wrap .Left .Bowl__Image'), 1, { rotation: "+=45deg" });
      $('.Circle__Content ul li').addClass('d-none');
      $('.Circle__Content ul li:eq('+_currIndex+')').removeClass('d-none');
    });

    //Graph animation inview
    inView('.home--graph-section .Graph__Container')
    .on('enter', function(){setTimeout(function(){$('.Graph__Container').addClass('active');},1000);})
    .on('exit', function(){$('.Graph__Container').removeClass('active');});

    //Accordion script 
    $(".Accr__Wrap .Head").click(function(){
      $(this).next(".Content").slideToggle().siblings(".Content:visible").slideUp();
      $(this).toggleClass("active");
          $(this).siblings(".Head").removeClass("active");
    });
  //Accordion script 
    $(".accr-wrap .head").on('click',function(){
		$(this).next(".content").slideToggle().siblings(".content:visible").slideUp();
		$(this).toggleClass("active");
        $(this).siblings(".head").removeClass("active");
	});
    $(".bsub-widget__toggle-details-btn").click(function(event){
    event.preventDefault(); 

  });
});