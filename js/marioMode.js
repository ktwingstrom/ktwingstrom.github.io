var secret = "7765827379"; //god
var input = "";
var timer;
var mode = false;

$(document).keyup(function(e) {
    //alert(e.which);
    input += e.which;

    clearTimeout(timer);
    timer = setTimeout(function() { input = ""; }, 200);

    check_input();
});

function check_input() {
    if(input == secret) {
        //the secret code
        alert("Welcome to Mario Mode!!");
        $('.mainHeader').css('zIndex:-2');
        $('.site').css('background-image','url(img/mario.jpg)','background-repeat:repeat');


    }
}

$(document).ready(function() {
    setInterval(function() { $('#info').html('Keystroke: ' + input); }, 100);
});
