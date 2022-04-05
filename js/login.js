$(document).ready(function() {
    let usersArray = [{
        username: "user01",
        password: "u01"
    }, {
        username: "user09",
        password: "u09"
    }, {
        username: "user06",
        password: "u06"
    }];

    $("#username").keyup(function() {
        if ($("#username").val() != "") {
            $("#username").removeClass("is-invalid");
            $("#username").addClass("is-valid");
        }
    });
    $("#password").keyup(function() {
        if ($("#password").val() != "") {
            $("#password").removeClass("is-invalid");
            $("#password").addClass("is-valid");
        }
    });
    $("#log-in").submit(function(e) {
        e.preventDefault();
        let u = true,
            p = true,
            mark = false;
        if ($("#username").val() == "") {
            $("#username").addClass("is-invalid");
            $("#username").removeClass("is-valid");
            u = false;
        }
        if ($("#password").val() == "") {
            $("#password").addClass("is-invalid");
            $("#password").removeClass("is-valid");
            p = false;
        }
        if (u && p) {
            for (let i = 0; i < usersArray.length; i++) {
                if ($("#username").val() == usersArray[i].username) {
                    mark = true;
                    if ($("#password").val() == usersArray[i].password) {
                        // alert("Ugurlu log in");
                        $("#success").fadeIn(800);
                        $("#success").removeClass("d-none");
                        $("#success").fadeOut(800);
                        setTimeout(function() {
                            window.location.assign("../index.html");
                        }, 1600);

                    } else {
                        alert("parol sehvdir");
                    }
                }
            }
            if (mark == false) {
                for (let i = 1; i <= localStorage.getItem("ID"); i++) {
                    if (localStorage.getItem(`u-${i}-username`) == $("#username").val()) {
                        mark = true;
                        if (localStorage.getItem(`u-${i}-password`) == $("#password").val()) {
                            // alert("Ugurlu local log in");
                            $("#success").fadeIn(800);
                            $("#success").removeClass("d-none");
                            $("#success").fadeOut(800);
                            setTimeout(function() {
                                window.location.assign("../index.html");
                            }, 1600);
                        } else {
                            alert("local parol sehvdir");
                        }
                    }
                }
            }
            if (mark == false) {
                alert("istifadeci tapilmadi");
            }
        }
    });
});