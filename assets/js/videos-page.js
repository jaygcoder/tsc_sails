$(function whenDomIsReady(){
    $('.the-list-of-videos .loading').show();

    setTimeout(function afterRetrievingVideos() {
        var videos = [{
            title: 'FUNNY BABY VIDEOS',
            src:    'https://youtube.com/embed/_FvTVWjLiHM'
        },{
            title: 'Justin Bieber - Baby ft. Ludacris',
            src:    'https://youtube.com/embed/kffacxfA7G4'
        },{
            title: 'Charlie bit my finger - again',
            src: 'https://youtube.com/embed/_OBlgSz8sSM'
        }];
        $('.the-list-of-videos .loading').hide();
        
        var videosHtml = _.reduce(videos, function(html, video){
            html += '<li class="video">' +
            '<h2>' + video.title + '</h2>' +
            '<iframe width="640" height="390" src="' + video.src + '" ' +
            'frameborder="0" allowfullscreen></iframe>' +
            '</li>';
            return html;
        },'');
        $('.the-list-of-videos ul').replaceWith(videosHtml);
    }, 750);
});