const plane = document.querySelector(".plane-animation");

function addPlaneAnimation(element) {

    if (!element) return;

    element.style.left = "-200px";
    element.style.top = "10vh";
    element.style.transition = "left 2.5s linear";

    void element.offsetWidth;

    setTimeout(() => {
        element.style.left = "200vh";
    }, 100);
    
}

addPlaneAnimation(plane);

