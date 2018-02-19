$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '6302712367',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '6302712367.1677ed0.33725b065af147b6b378112875110780',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});