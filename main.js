function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if(startTime === null) startTime = currentTime;
        var timeElaspsed = currentTime - startTime;
        var run = ease(timeElaspsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElaspsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;

    }

    requestAnimationFrame(animation);
}

    
var aboutSection = document.querySelector(".about-section");
aboutSection.addEventListener("click", function() {
    smoothScroll("#about", 1000);
});

var projectSection = document.querySelector(".project-section");
projectSection.addEventListener("click", function() {
    smoothScroll("#projects", 1000);
});

var contactSection = document.querySelector(".contact-section");
contactSection.addEventListener("click", function() {
    smoothScroll("#contact", 1000);
});

var homeSection = document.querySelector(".home-section");
homeSection.addEventListener("click", function() {
    smoothScroll("#home", 1000);
});
