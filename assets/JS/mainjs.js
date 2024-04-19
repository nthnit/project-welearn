



// function ready() {
//     if ('intersectionObserver' in window) {
//         var observer = new IntersectionObserver(function (entries) {
//             entries.forEach(function (entry) {
//                 if (entry.isIntersecting) {
//                     console.log('intersecting');
//                 } else {
//                     console.log('not intersecting');
//                 }
//             });
//         }, {
//             rootMargin: '0px 0px 0px 0px',
//             threshold: 0
//         });
//         var elements = document.querySelectorAll('.js-scroll-trigger');
//         for (var i = 0; i < elements.length; i++) {
//             observer.observe(elements[i]);
//         }
        
//     }
// }

// document.addEventListener('DOMContentLoaded', ready);

// Tạo một IntersectionObserver
// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.intersectionRatio > 0) {
//         // Khi phần tử trở nên nhìn thấy
//         const lazyElement = entry.target;
  
  
//         // Thêm lớp "go"
//         lazyElement.classList.add("go");
  
//         // Ngừng theo dõi phần tử đã tải
//         observer.unobserve(lazyElement);
        
//       }
//     });
//   });
  
//   // Lấy tất cả các phần tử cần tải lười biếng
//   const lazyElements = document.querySelectorAll('.lazyload');
  
//   // Đặt IntersectionObserver cho mỗi phần tử
//   lazyElements.forEach(element => {
//     observer.observe(element);
//   });
  
const elementsToExpand = document.querySelectorAll(".lazyload");

let expansionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const lazyElement = entry.target;
    if (entry.intersectionRatio > 0) {
        lazyElement.classList.add("go");
    } else {
        lazyElement.classList.remove("go");
    }
  });
});

elementsToExpand.forEach((element) => {
  expansionObserver.observe(element);
});

const elementsToMove = document.querySelectorAll(".move");

let moveObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `moving 2s ease-in-out`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});

elementsToMove.forEach((element) => {
  moveObserver.observe(element);
});


const login = document.querySelector(".login-button");

login.addEventListener("click", () => {
    // console.log("on click login");
  window.location.href = `\login.html`  ;
});

// const loginBanner = document.querySelector("#login-button-banner");

// login.addEventListener("click", () => {
//   window.location.href = `\login.html`  ;
// });

