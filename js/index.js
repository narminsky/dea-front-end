$(document).ready(function() {
    if (localStorage.getItem("span") != null) {
        $("#user-data").text(localStorage.getItem("span"));
        $(".login").addClass("d-none");
        $(".signout").removeClass("d-none");
        $(".my-items").removeClass("d-none");
    } else {
        $(".signout").addClass("d-none");
        $(".login").removeClass("d-none");
        $(".my-items").addClass("d-none");
    }
    $(".signout").click(function() {
        localStorage.removeItem("span");
        window.location.assign("index.html");
    });

});