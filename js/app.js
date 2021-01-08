var Access;
var loadCount = 0;
var objCookies;

$(document).ready(function() {

    // Animation for ajax request status
    $(document).bind("ajaxSend", function() {
        loadCount++;
        if (loadCount == 1) {
            $('#loader').toggleClass('visible');
            $("#ChargeZone").css("position", "relative");
        } else {}
    }).bind("ajaxComplete", function() {
        loadCount--;
        if (loadCount == 0) {
            $('#loader').toggleClass('visible');
            $("#ChargeZone").css("position", "inherit");
        } else {

        }
    });

    $('#ChargeZone').load('pages/home/home.html');

});