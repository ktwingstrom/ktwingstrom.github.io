var secret = "7765827379"; //mario
var input = "";
var timer;
var mode = false;


$(document).keyup(function(e) {
    //alert(e.which);
    input += e.which;

    clearTimeout(timer);
    timer = setTimeout(function() { input = ""; }, 2000);

    check_input();
});

function check_input() {
    if(input == secret) {
        //the secret code
        alert("Welcome to Mario Mode!!");
        $('.kevinHeadShot').hide();
        $('.mainContainer').prepend('<div align="center"><object width="640" height="480"><param name="movie" value="http://www.embeddablegames.net/embedgames/superflashmariobros.swf"><param name="quality" value="high"><embed src="http://www.embeddablegames.net/embedgames/superflashmariobros.swf" quality="high" width="640" height="400" type="application/x-shockwave-flash" pluginspage= "http://www.macromedia.com/go/getflashplayer"></embed></object><br/></div><p>');
        $('body').css('background-image', 'url(img/marioLuigiYoshi.jpg)').css('background-size','30% auto');

    }
}

$(document).ready(function() {
    setInterval(function() { $('#info').html('Keystroke: ' + input); }, 100);
});
