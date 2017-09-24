(function($) {
    "use strict"; // Start of use strict

    // Dummy data for events
    var events = [{
        name: 'One Event',
        date: '20/10/2017',
        time: '5:00 PM',
        img:  '1.jpg'
    },{
        name: 'Two Event',
        date: '27/10/2017',
        time: '5:00 PM',
        img:  '2.jpg'
    },{
        name: 'Three Event',
        date: '3/11/2017',
        time: '7:00 PM',
        img:  '3.jpg'
    },{
        name: 'Four Event',
        date: '10/11/2017',
        time: '8:00 PM',
        img:  '4.jpg'
    },{
        name: 'Five Event',
        date: '12/11/2017',
        time: '9:00 PM',
        img:  '5.jpg'
    }];

    // on Document load, set up Events view.
    $(document).ready(function() {
        var eventsHtml = _.reduce(events, function(html,event){
            html += '<div class="col-lg-4 col-sm-6">' +
                '<a href="images/portfolio/fullsize/' + event.img + 
                '" class="portfolio-box"> <img src="images/portfolio/thumbnails/' +
                event.img + '" class="img-responsive" alt="">' +
                '<div class="portfolio-box-caption">' + 
                '<div class="portfolio-box-caption-content">' +
                '<div class="project-category text-faded">'+ event.date +
                ' at '+ event.time + '</div>' +
                '<div class="project-name">' + event.name + '</div></div>' +
                '</div></a></div>';
            return html;
        },'');
        if(events.length % 2 == 1){
            eventsHtml += '<div class="col-lg-4 col-sm-6">' +
            '<a href="images/portfolio/fullsize/6.jpg" class="portfolio-box">' +
            '<img src="images/portfolio/thumbnails/6.jpg" class="img-responsive" alt="">' +
            '<div class="portfolio-box-caption">' + 
            '<div class="portfolio-box-caption-content">' +
            '<div class="project-category text-faded">previous events</div>' +
            '<div class="project-name">Click Here</div></div>' +
            '</div></a></div>'
        }
        $('#events-load').append(eventsHtml);

        // Initialize and Configure Magnific Popup Lightbox Plugin
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        });
    });
   
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
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
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    


})(jQuery); // End of use strict

