console.log("Hello, jQuery!", $);

isProduction = window.location.href == 'https://karthikkasturi.github.io/'


$(document).ready(function () {
    setTimeout(function () {
        if (isProduction) {
            $('.production').show();
            $('.dev').hide();
        }
        $(".loader").addClass("first-loaded").fadeOut();
    }, 3000);
    $(".hover-listener").click(function(e){
        $('.content-container').animate({
            scrollTop: document.documentElement.clientHeight - 50
        }, 500, 'linear');
    });
    $(".content-container").on('scroll', function(e){
        console.log(e);
    })
})
