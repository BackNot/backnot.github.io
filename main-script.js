$(document).ready(function() {
loadPage("#page-content", "home", mainPageTextAnimation);

    function mainPageTextAnimation() {
        console.log('here');
        $("#avatar" ).animate({
            opacity: 1.00,
            left: "50%",
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
    $(".aboutme-page").click(function(){
       loadPage("#page-content", "aboutme", function() {
        $("#night-img" ).animate({
            opacity: 1.00,
            left: "0%",
        }, 2000);

        $( "#aboutme-text" ).animate({
            opacity: 1.00,
        }, 2500);
       });
      
    });

    $(".home-page").click(function(){
        loadPage("#page-content", "home", function() {
        mainPageTextAnimation();
       });    
    });

    $(".contact-page").click(function(){
        window.location.href = "contact.html";
    });
    
    $(".projects-page").click(function(){
        window.location.href = "projects.html";
    });

    function enableNightMode(addSessionStorage)
    {
        $(".container-fluid").removeClass("gradient-background").addClass("black-background");
        $(".container-fluid").addClass("text-white");
        $(".header").removeClass("lightgrey-bg");
        $(".black-border").addClass("white-border").removeClass("black-border");
        $(".bottom-border").addClass("bottom-border-white").removeClass("bottom-border");
        if (addSessionStorage)
            localStorage.setItem("nightmode", "true");
    }

    function disableNightMode(removeSessionStorage)
    {
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