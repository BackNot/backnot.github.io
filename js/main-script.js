$(document).ready(function() {
    loadPage("#page-content", "home", mainPageTextAnimation);

    function mainPageTextAnimation() {
        $("#avatar" ).animate({
            opacity: 1.00,
            left: "30%",
        }, 2000);

        $("#index-text").animate({
            opacity: 1.00,
        }, 2500);
    }

    function aboutmePageTextAnimation() {
        $("#night-img" ).animate({
            opacity: 1.00,
            left: "25%"
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
            left: "15%",
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
});