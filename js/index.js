$(document).ready(function() {
    if (localStorage.getItem("span") != null)
        $("#user-data").text(localStorage.getItem("span"));
});