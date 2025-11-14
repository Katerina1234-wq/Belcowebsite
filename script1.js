const clouds = document.querySelector(".clouds-animation");

function addCloudsAnimation(element) {

    if (!element) return;

    element.style.right = "-200px";
    element.style.top = "36vh";
    element.style.transition = "right 2.5s linear";

    void element.offsetWidth;

    setTimeout(() => {
        element.style.right = "200vh";
    }, 100);
    
}

addCloudsAnimation(clouds);

