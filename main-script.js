$(document).ready(function() {
$("#page-content").load("home.html");

    var showTextLetterByLetter = function (target, message, index, interval) {   
        if (index < message.length) {
            $(target).append("_");
            setTimeout(function() {
                $(target).text($(target).text().substring(0,($(target).text().length - 1)));
                $(target).append(message[index++]);
                setTimeout(function () { 
                    showTextLetterByLetter(target, message, index, interval); }, interval);
            }, 25)
        }
        else
            makeUnderscoreFlashing(target);
    }

    function makeUnderscoreFlashing(target) {
        target = $(target);
        setInterval(function(){
            $(target).append("_");
            setTimeout(function () { 
                $(target).text($(target).text().substring(0,($(target).text().length - 1)));

        }, 200)},300);
    }
    
    showTextLetterByLetter("#index-text", $("#index-dummy-text").text(), 0, 1);

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
    // Events
    $(".aboutme-page").click(function(){
        window.location.href = "aboutme.html";
    });

    $(".home-page").click(function(){
        window.location.href = "index.html";
    });

    $(".contact-page").click(function(){
        window.location.href = "contact.html";
    });
    
    $(".projects-page").click(function(){
        window.location.href = "projects.html";
    });

    $("#enable-night").click(function() {
        $(".container-fluid").addClass("black-background");
        $(".container-fluid").addClass("text-white");
        $(".header").removeClass("lightgrey-bg");
        $(".black-border").addClass("white-border").removeClass("black-border");
        $(".bottom-border").addClass("bottom-border-white").removeClass("bottom-border")
    });
                
    $("#disable-night").click(function() {
        $(".container-fluid").removeClass("black-background");
        $(".container-fluid").removeClass("text-white");
        $(".header").addClass("lightgrey-bg");
        $(".white-border").addClass("black-border").removeClass("white-border");
        $(".bottom-border-white").addClass("bottom-border").removeClass("bottom-border-white");
    });

// Clock
    var opt = new AnalogClockOption(); 
    opt.width = 100;
    var clock = new AnalogClock("clock", opt);
   $("#clock").draggable();


});