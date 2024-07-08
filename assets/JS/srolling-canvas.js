const html = document.documentElement;

const canvasParent = document.querySelector(".banner-scroll");
const canvas = document.getElementById("banner-scroll-canvas");
const context = canvas.getContext("2d");
const feedbackSection = document.querySelector(".feedback-section");
var currentFrame;
let hasPreload = false;



const frameCount = 56;

//

let imageUrlDesktop;
let imgaeUrlMobile;
const language = document.getElementsByTagName("html")[0].getAttribute("lang");

if (!language) {
    imageUrlDesktop = "../assets/kv-animation/desktop/";
    imgaeUrlMobile = "../assets/kv-animation/m/";
} else if (language === "en") {
    imageUrlDesktop = "../assets/kv-animation/desktop/";
    imgaeUrlMobile = "../assets/kv-animation/m/";
} else {
    imageUrlDesktop = "../assets/kv-animation/desktop/";
    imgaeUrlMobile = "../assets/kv-animation/m/";
}

if (document.body.clientWidth > 700) {
    currentFrame = (index) =>
        `${imageUrlDesktop}Frame${index.toString()}.jpg.webp`;
    canvas.width = 2000;
    canvas.height = 2000;
} else {
    currentFrame = (index) =>
        `${imgaeUrlMobile}Frame${index.toString()}.jpg.webp`;
    canvas.width = 2000;
    canvas.height = 2000;
}

// tai hinh dau tien

const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
        // console.log(i);
        const img = new Image();
        img.src = currentFrame(i);
    }
};

const img = new Image();
img.src = currentFrame(0);
img.onload = function () {
    context.drawImage(img, 0, 0);
};

const updateImage = (index) => {
    console.log(index);

    if (index >= frameCount ) {
        canvas.classList.remove("active");

        $(".fixed-nav").addClass("fixed");
        
        
    } else {
        canvas.classList.add("active");
        $(".fixed-nav").removeClass("fixed");
    }
    context.imageSmoothingEnabled = true;
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);


    
};

// const header = document.querySelector('.fixed-nav');

//     window.addEventListener('scroll', function() {
//       const scrollY = window.scrollY;
//       const headerHeight = header.offsetHeight;
//       const fadeFactor = Math.min(1, scrollY / headerHeight); // Adjust for smoother transition

//       header.style.opacity = 1 - fadeFactor; // Fade out with increasing scroll
//     });

const drawCanvas = () => {
    let scrollTop = html.scrollTop;
    let maxScrollTop = canvasParent.clientHeight;
    let scrollFraction = (scrollTop / maxScrollTop) * 1.01;
    let frameIndex = Math.min(
        frameCount || 0,  Math.ceil(scrollFraction * frameCount || 0)
    );
    requestAnimationFrame(() => updateImage(frameIndex));

    
};

document.addEventListener("DOMContentLoaded", function (event) {
    // load fisrt image
    console.log("Draw Canvas");
    drawCanvas();
});

window.addEventListener("scroll", () => {
    if (!hasPreload) {
        preloadImages();
        hasPreload = true;
    }
    drawCanvas();
});
let imagesLoaded = 0;



