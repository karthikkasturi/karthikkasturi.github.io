console.log("Hello, jQuery!", $);

isProduction = window.location.href == 'https://karthikkasturi.github.io/'

// $.keyframe.define({
//     name: 'logoReveal',
//     '0%': {'margin-left': '-50px'},
//     '100%': {'margin-left': '0px'},
// })

$(document).ready(function () {
    setTimeout(function () {
        if (isProduction) {
            $('.production').show();
            $('.dev').hide();
        }
        // $(selector).playKeyframe({
        //     name: 'logoReveal',
        //     duration: 2000,
        //     timingFunction: 'linear',
        //     });
        $(".loader").addClass("first-loaded").fadeOut();
    }, 3000);
})
