// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict

var places = {
    vielse: new google.maps.LatLng(55.769348, 12.451729),
    reception: new google.maps.LatLng(55.7717256, 12.4507801),
    fest: new google.maps.LatLng(55.016741, 11.875907),
    overnatning1: new google.maps.LatLng(55.008302, 11.911308),
    overnatning2: new google.maps.LatLng(55.024054, 11.898026)
};

for (var place in places) {
    var position = places[place];

    var mapCanvas = document.getElementById(place);
    var mapOptions = {
        center: position,
        zoom: 15,
        scrollwheel: false,
        draggable: false,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: false,
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: position,
        map: map
    });
}
