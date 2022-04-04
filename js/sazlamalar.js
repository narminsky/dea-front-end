$(document).ready(function() {
    $("#linkIndex").click(function() {
        window.location.assign("../index.html");
    });
    $("#resetButton").click(function() {
        localStorage.clear();
    });
});