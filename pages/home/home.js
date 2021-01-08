$(document).ready(function() {
    testAjax();
});

function testAjax() {

    $.ajax({
        type: "GET",
        url: "https://restcountries.eu/rest/v2/lang/es",
    }).done(function(resp) {
        console.log(resp);
    })

}