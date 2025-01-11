$(document).ready(function() {
    
    // Menu toggle function
    $("#mynavmenu").click(function() {
        $(this).toggleClass("responsive");
    });

    // Dark mode toggle
    $("#toggle-switch").click(function() {
        $("body").toggleClass("dark");
    });

    // Typing Effect (assuming Typed.js is included)
    var typingEffect = new Typed(".typedtext", {
        strings: ["Designer", "Coder", "Developer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
    });

    // Scroll animation
    const sr = ScrollReveal({
        origin: "top",
        distance: "80px",
        duration: 2000,
        reset: true,
    });

    sr.reveal(".featuerd-name", { delay: 100 });
    sr.reveal(".text-info", { delay: 200 });
    sr.reveal(".text-bin", { delay: 200 });
    sr.reveal(".social-icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 320 });
    sr.reveal(".project-box", { interval: 200 });
    sr.reveal(".top-header", {});

    const srLeft = ScrollReveal({
        origin: "left",
        distance: "80px",
        duration: 2000,
        reset: true,
    });

    srLeft.reveal(".about-info", { delay: 100 });
    srLeft.reveal(".contact-info", { delay: 100 });

    const srRight = ScrollReveal({
        origin: "left",
        distance: "80px",
        duration: 2000,
        reset: true,
    });

    srRight.reveal(".skill", { delay: 100 });
    srRight.reveal(".skill-box", { delay: 100 });

    // Active link on scroll
    $(window).on("scroll", function() {
        var scrollY = $(this).scrollTop();

        $(".section[id]").each(function() {
            var $section = $(this);
            var sectionHeight = $section.outerHeight();
            var sectionTop = $section.offset().top - 50; // Adjust the offset if needed
            var sectionId = $section.attr("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                $(".nav-menu a[href*=" + sectionId + "]").addClass("active-link");
            } else {
                $(".nav-menu a[href*=" + sectionId + "]").removeClass("active-link");
            }
        });
    });

});
