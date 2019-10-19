$( function() {
	"use strict";
	$( '.navbar-toggle, nav.header-main-nav' ).click( function() {
		$( '.navbar-toggle' ).toggleClass( 'is-active' );
		$( 'nav.header-main-nav' ).fadeToggle();
		$( 'nav.header-main-nav' ).toggleClass( 'nav-hide' );
		$( 'nav.header-main-nav ul' ).toggleClass( 'nav-anim' );
	} );
} );
$( document ).ready( function() {
	"use strict";
        // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
	$( '.hero-slide' ).slick( {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)'
	} );

	$( '.animatemarker' ).waypoint( function() {
		$( this.element ).addClass( 'animatetrigger' );
	}, {
		offset: '100%'
	} );
	
	$('.content-fade').waypoint( function(){
		$( this.element).addClass('content-fade-in');
	}, {
		offset: '80%'
	});
	
	$('.inside-content-fade').waypoint( function(){
		$( this.element).addClass('inside-content-fade-in');
	}, {
		offset: '100%'
	});
	/*$('.animatemarker-hero').waypoint(function () {
		$(this.element).addClass('animatemarker-hero-trig');
	}, {offset: '90%'}); */
	$( '.header-bg-animate' ).waypoint( function( direction ) {
		if ( 'down' != direction ) return;
		$( ".header-bg" ).addClass( 'header-bg-in' );
		$( ".header_logo" ).addClass( 'header_logo-in' );
	}, {
		offset: '-30%'
	} );
	$( '.header-bg-animate' ).waypoint( function( direction ) {
		if ( 'up' != direction ) return;
		$( ".header-bg" ).removeClass( 'header-bg-in' );
		$( ".header_logo" ).removeClass( 'header_logo-in' );
	}, {
		offset: '-30%'
	} );
} );
$( window ).load( function() {
	"use strict";
	$( ".fadein" ).addClass( 'fadein-in' );
	$( ".fadein-slide" ).addClass( 'fadein-slide-in' );
} );
$( window ).resize( function() {
	//imagecenteralize();
} );