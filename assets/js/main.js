$(document).ready(function () {
    $('.bar').click(function () {
        $("aside").toggleClass("w-70");
        $("aside").toggleClass("d-block");
        $(".logo-lg").toggleClass("d-none");
        $(".logo-sm").toggleClass("d-block");
        $("header").toggleClass("ml-70");
        $(".main-content").toggleClass("ml-70");
        $(".nav-link span ,.nav-arrow,.nav-hot,.menu-title").toggle("");
        $(".ri-more-fill").toggleClass("d-block");
        // best way to toggle icone
        $(this).toggleClass("  ri-menu-2-fill  ri-arrow-right-fill");
    });

    // dropdown and change arrow
    $('.nav-item').click(function () {
        $(this).next('.dropdown').toggle();
        $('.dropdown').not($(this).next()).slideUp();
        $(this).find('.nav-arrow').toggleClass('ri-arrow-right-s-line ri-arrow-down-s-line');
    });
    // change color 
    $(".ri-moon-line").click(function () {
        $(".ri-moon-line").hide();
        $(".ri-sun-line").show();
        $(":root").css("--primary", "#212529")
        $(":root").css("--white", "#212529")
        $(":root").css("--black", "white")
        $(":root").css("--founder", "#292e32")
        $(":root").css("--main-bg", "#1a1d21")
        $(":root").css("--btn", "#173433")
        $('rect').attr('fill', '#212529');

    })
    $(".ri-sun-line").click(function () {
        $(".ri-moon-line").show();
        $(".ri-sun-line").hide();
        $(":root").css("--primary", " #405189")
        $(":root").css("--white", "#fff")
        $(":root").css("--black", "black")
        $(":root").css("--founder", "#f3f3f9")
        $(":root").css("--main-bg", "#f3f3f9")
        $('rect').attr('fill', 'white');
        $(":root").css("--btn", "#dff0fa")


    })
    $(".ri-function-line").click(function () {
        $(".category").toggle()
        $(".languages").hide()
        $(".founder-content").hide()
    })
    $(".flag").click(function () {
        $(".languages").toggle()
        $(".category").hide()
        $(".founder-content").hide()
    })
    $(".founder").click(function () {
        $(".founder-content").toggle()
        $(".category").hide()
        $(".languages").hide()
    })
    // back to top
    $('.top').click(function () {
        $('html').animate({ scrollTop: 0 });
    });
    $(window).scroll(function () {
        if (scrollY > 10) {

            $('.top').fadeIn(1000);
        }
        else {

            $('.top').fadeOut(1000);

        }
    });
    // full scrren
    $('.ri-fullscreen-line').click(function () {
        $(".ri-fullscreen-exit-line").show()
        $(this).hide()
    });
    $('.ri-fullscreen-exit-line').click(function () {
        $(".ri-fullscreen-line").show()
        $(this).hide()
    });
    // form password toggle

    $(".toggle-password").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        input = $(this).parent().find("input");
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    // setting start
    $(".settings").click(function () {
        $(".setting-menu").toggleClass("d-block")
    })
    $(".blue").click(function () {
        $(":root").css("--primary", "blue")
        $(":root").css("--white", "blue")
        $(":root").css("--black", "white")
        $(":root").css("--light-white", "#abb9e8")
        $(":root").css("--main-bg", " rgba(0, 0, 255, 0.800)")
        $(":root").css("--founder", "rgba(0, 0, 255, 0.100)")
        $('rect').attr('fill', 'blue');
        $(":root").css("--btn", "#173433")

    })
    $(".red").click(function () {
        $(":root").css("--primary", "red")
        $(":root").css("--light-white", "black")
        $(":root").css("--black", "white")
        $(":root").css("--white", "red")
        $(":root").css("--main-bg", "pink")
        $(":root").css("--founder", "orange")
        $('rect').attr('fill', 'red');
        $(":root").css("--btn", "#dff0fa")
    })
    $(".orange").click(function () {
        $(":root").css("--primary", "orange")
        $(":root").css("--light-white", "black")
        $(":root").css("--black", "white")
        $(":root").css("--white", "orange")
        $(":root").css("--main-bg", "pink")
        $(":root").css("--founder", "rgba(255, 192, 203, 0.871)")
        $('rect').attr('fill', 'orange');
        $(":root").css("--btn", "#dff0fa")
    })
    $(".black").click(function () {
        $(":root").css("--light-white", "#abb9e8")
        $(":root").css("--primary", "#212529")
        $(":root").css("--white", "#212529")
        $(":root").css("--black", "white")
        $(":root").css("--founder", "#292e32")
        $(":root").css("--main-bg", "#1a1d21")
        $(":root").css("--btn", "#173433")
        $('rect').attr('fill', '#212529');


    })
    $(".white").click(function () {
        $(":root").css("--light-white", "#abb9e8")
        $(":root").css("--primary", "#405189")
        $(":root").css("--white", "#fff")
        $(":root").css("--black", "black")
        $(":root").css("--founder", "#f3f3f9")
        $(":root").css("--main-bg", "#f3f3f9")
        $('rect').attr('fill', 'white');
        $(":root").css("--btn", "#dff0fa")
    })
    //    drop
    $(".sbt1").click(function () {
        $(".drop1").toggleClass("d-block")

    })
    $(".sbt2").click(function () {
        $(".drop2").toggleClass("d-block")

    })
    $(".sbt3").click(function () {
        $(".drop3").toggleClass("d-block")

    })
    // calender 
    $("#date").datepicker();

});

