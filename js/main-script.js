$(document).ready(function() {
    loadPage("#page-content", "home", mainPageTextAnimation);

    function mainPageTextAnimation() {
        console.log('here');
        $("#avatar" ).animate({
            opacity: 1.00,
            left: "30%",
        }, 2000);

        $( "#index-text" ).animate({
            opacity: 1.00,
        }, 2500);

        setTimeout(function () {
            $(".background-image").animate({
                opacity: 1.00,
            }, 1500);
        }, 1500);

    }

    function aboutmePageTextAnimation() {
        $("#night-img" ).animate({
            opacity: 1.00,
            left: "0%",
        }, 2000);

        $( "#aboutme-text" ).animate({
            opacity: 1.00,
        }, 2500);
    }

    function contactPageTextAnimation() {
        $("#contact-text").animate({
            opacity: 1.00
        }, 1500);
    }

    function projectsPageTextAnimation() {
        $( "#projects-text" ).animate({
            opacity: 1.00,
        }, 1000);

        $("#game-img" ).animate({
            opacity: 1.00,
            left: "10%",
        }, 2000);

        $( "#game-text" ).animate({
            opacity: 1.00,
        }, 3000);
    }

    // Events
    function loadPage(destination, page, callback)
    {       
        $.ajax({
            url: page + ".html",
            method: "GET",
            success: function(html){
                $(destination).html(html);
                callback();
            }
    });
}
    $(".aboutme-page").click(function() {
       loadPage("#page-content", "aboutme", aboutmePageTextAnimation);
    });

    $(".home-page").click(function(){
        loadPage("#page-content", "home", function() {
        mainPageTextAnimation();
       });    
    });

    $(".projects-page").click(function() {
        loadPage("#page-content", "projects", projectsPageTextAnimation);
    });
    
    $(".contact-page").click(function() {
        loadPage("#page-content", "contact", contactPageTextAnimation);
    });

    function enableNightMode(addSessionStorage) {
        $(".container-fluid").removeClass("gradient-background").addClass("black-background");
        $(".container-fluid").addClass("text-white");
        $(".header").removeClass("lightgrey-bg");
        $(".black-border").addClass("white-border").removeClass("black-border");
        $(".bottom-border").addClass("bottom-border-white").removeClass("bottom-border");
        if (addSessionStorage)
            localStorage.setItem("nightmode", "true");
    }

    function disableNightMode(removeSessionStorage) {
        $(".container-fluid").removeClass("black-background").addClass("gradient-background");
        $(".container-fluid").removeClass("text-white");
        $(".header").addClass("lightgrey-bg");
        $(".white-border").addClass("black-border").removeClass("white-border");
        $(".bottom-border-white").addClass("bottom-border").removeClass("bottom-border-white");
        if (removeSessionStorage)
            localStorage.removeItem("nightmode");
    }

    $("#enable-night").click(function() {
        enableNightMode(true);
    });
                
    $("#disable-night").click(function() {
        disableNightMode(true);
    });

    if (localStorage.getItem("nightmode") != null)
        enableNightMode(false);
});