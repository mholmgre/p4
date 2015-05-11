var main = function() {
    "use strict";
    var knockCount = 0
    $("#left").on("click", function(event) {
        knockCount += 1
        if (knockCount == 3) {
            $("#indicator").css("background-color", "green");
        }
        if (knockCount > 3) {
            $("#indicator").css("background-color", "red");
            $("#nob").css("cursor", "auto");
            knockCount = 0
        };
    });

    $("#nob").on("click", function(event) {
        if (knockCount == 3) {
            $("#left").addClass("animation");
            setTimeout(function() {
                $("#left").css("display", "none");
            }, 2000);

            setTimeout(function() {
                joking()
            }, 2000);
        };
    });
};


var joking = function() {
    $("#joke p:nth-child(1)").css("display", "block").animate({
        fontSize: "1.5em"
    }, 1000, function() {
        // Animation complete.
    });
    setTimeout(function() {
        $("#joke p:nth-child(2)").css("display", "block").animate({
            fontSize: "1.5em"
        }, 1000, function() {
            // Animation complete.
        });
    }, 2000);

    setTimeout(function() {
        $("#joke p:nth-child(3)").css("display", "block").animate({
            fontSize: "1.5em"
        }, 1000, function() {
            // Animation complete.
        });
    }, 4000);

    setTimeout(function() {
        $("#joke p:nth-child(4)").css("display", "block").animate({
            fontSize: "4em"
        }, 1000, function() {
            // Animation complete.
        });
    }, 6000);

}

$(document).ready(main);
