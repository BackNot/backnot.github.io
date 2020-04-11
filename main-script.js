$(document).ready(function() {
$("#page-content").load("home.html");
var timeout1;
var timeout2;

    // var showTextLetterByLetter = function (target, message, index, interval) {   
    //     if (index < message.length) {
    //         $(target).append("_");
    //          timeout1 = setTimeout(function() {
    //             $(target).text($(target).text().substring(0,($(target).text().length - 1)));
    //             $(target).append(message[index++]);
    //             timeout2 = setTimeout(function () { 
    //                 showTextLetterByLetter(target, message, index, interval); }, interval);
    //         }, 25)
    //     }
    //     else
    //         makeUnderscoreFlashing(target);
    // }

    // function makeUnderscoreFlashing(target) {
    //     target = $(target);
    //     setInterval(function(){
    //         $(target).append("_");
    //         setTimeout(function () { 
    //             $(target).text($(target).text().substring(0,($(target).text().length - 1)));

    //     }, 200)},300);
    // }
    
    // showTextLetterByLetter("#index-text", $("#index-dummy-text").text(), 0, 1);

    var currentdate = new Date(); 
    var datetime = {};
    datetime.date =  currentdate.getDate() + "/"
                    + "0" + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear();

    var minutes = checkTime(currentdate.getMinutes());
    var hours = checkTime(currentdate.getHours());

    datetime.time = hours + ":" + minutes;
    $("#time").text(datetime.time);

    setInterval(function() {
        var currentdate = new Date(); 
        var minutes = checkTime(currentdate.getMinutes());
        var hours = checkTime(currentdate.getHours());
    
        datetime.time = hours + ":" + minutes;
        $("#time").text(datetime.time);
    }, 60000);
   
    function checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }

      function mainPageTextAnimation() 
      {
        $("#avatar" ).animate({
            opacity: 1.00,
            left: "0%",
        }, 2000);

        $( "#index-text" ).animate({
            opacity: 1.00,
        }, 2500);
      }

    // Events
    function loadPage(destination, page, callback)
    {
        if (timeout1)
            clearTimeout(timeout1);
        if (timeout2)
            clearTimeout(timeout2);
            
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
        $(".container-fluid").addClass("black-background");
        $(".container-fluid").addClass("text-white");
        $(".header").removeClass("lightgrey-bg");
        $(".black-border").addClass("white-border").removeClass("black-border");
        $(".bottom-border").addClass("bottom-border-white").removeClass("bottom-border");
        if (addSessionStorage)
            localStorage.setItem("nightmode", "true");
    }

    function disableNightMode(removeSessionStorage)
    {
        $(".container-fluid").removeClass("black-background");
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

// Clock
    var opt = new AnalogClockOption(); 
    opt.width = 100;
    var clock = new AnalogClock("clock", opt);
   $("#clock").draggable();
   

});