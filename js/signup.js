$(document).ready(function() {
    $("#name").keyup(function() {
        if ($("#name").val() == "" || $("#name").val().length < 3 || $("#name").val().length > 30) {
            $("#name").addClass("is-invalid");
            $("#name").removeClass("is-valid");
            $(".invalid-feedback.name").addClass("d-block");
            $(".valid-feedback.name").removeClass("d-block");
        } else {
            $("#name").addClass("is-valid");
            $("#name").removeClass("is-invalid");
            $(".invalid-feedback.name").removeClass("d-block");
            $(".valid-feedback.name").addClass("d-block");
        }
    });
    $("#phone").keyup(function() {
        let ans = phonenumber($("#phone").val());
        if ($("#phone").val() == "" || ans == false) {
            $("#phone").addClass("is-invalid");
            $("#phone").removeClass("is-valid");
            $(".invalid-feedback.phone").addClass("d-block");
            $(".valid-feedback.phone").removeClass("d-block");
        } else {
            $("#phone").addClass("is-valid");
            $("#phone").removeClass("is-invalid");
            $(".invalid-feedback.phone").removeClass("d-block");
            $(".valid-feedback.phone").addClass("d-block");
        }
    });
    $("#username").keyup(function() {
        if ($("#username").val() == "" || $("#username").val().length < 3 || $("#username").val().length > 30) {
            $("#username").addClass("is-invalid");
            $("#username").removeClass("is-valid");
            $(".invalid-feedback.username").addClass("d-block");
            $(".valid-feedback.username").removeClass("d-block");
        } else {
            $("#username").addClass("is-valid");
            $("#username").removeClass("is-invalid");
            $(".invalid-feedback.username").removeClass("d-block");
            $(".valid-feedback.username").addClass("d-block");
        }
    });
    $("#password").keyup(function() {
        if ($("#password").val() == "" || $("#password").val().length < 3 || $("#password").val().length > 30) {
            $("#password").addClass("is-invalid");
            $("#password").removeClass("is-valid");
            $(".invalid-feedback.password").addClass("d-block");
            $(".valid-feedback.password").removeClass("d-block");
        } else {
            $("#password").addClass("is-valid");
            $("#password").removeClass("is-invalid");
            $(".invalid-feedback.password").removeClass("d-block");
            $(".valid-feedback.password").addClass("d-block");
        }
    });
    // form submit
    if (localStorage.getItem("ID") == null) {
        localStorage.setItem("ID", 0);
    }
    $("#sign-up").submit(function(e) {
        e.preventDefault();
        let num = Number(localStorage.getItem("ID")) + 1;
        localStorage.setItem(`u-${num}-name`, $("#name").val());
        localStorage.setItem(`u-${num}-phone`, $("#phone").val());
        localStorage.setItem(`u-${num}-username`, $("#username").val());
        localStorage.setItem(`u-${num}-password`, $("#password").val());
        localStorage.setItem("ID", num);
    });
    // functions
    function phonenumber(inputtxt) {
        if ((inputtxt.match(/^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/))) {
            return true;

        } else {
            return false;
        }
    }
});