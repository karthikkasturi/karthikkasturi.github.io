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
        $('html, body').animate({
            scrollTop: $("#section-2").offset().top
        }, 500, 'linear');
    })
})
