

  
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


// Lấy tất cả các phần tử button có lớp là "login-button"
const loginButtons = document.querySelectorAll(".login-button");

// Lặp qua từng nút đăng nhập và thêm sự kiện "click"
loginButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Chuyển hướng đến trang đăng nhập khi nhấp vào nút
        window.location.href = "login.html";
    });
});



const subMenus = document.querySelectorAll(".sub-menu");
const subMenuContents = document.querySelectorAll(".sub-menu-content");

subMenus.forEach((subMenu, index) => {
  let isSubMenuContentVisible = false;
  subMenu.addEventListener("click", () => {
    // Đóng tất cả các subMenu trước khi mở subMenu hiện tại
    subMenus.forEach((menu, idx) => {
      if (idx !== index) {
        subMenuContents[idx].classList.add("d-none");
        menu.classList.remove("active");
      }
    });

    if (!isSubMenuContentVisible) {
      subMenuContents[index].classList.remove("d-none");
      subMenu.classList.add("active");
      isSubMenuContentVisible = true;
    } else {
      subMenuContents[index].classList.add("d-none");
      subMenu.classList.remove("active");
      isSubMenuContentVisible = false;
    }
  });
});


// Hàm mở hoặc đóng menu di động
function openMenuMobile() {
  var mobileNav = document.querySelector('.mobile-nav'); // Chọn phần tử chứa menu di động
  event.preventDefault()
  // Kiểm tra trạng thái hiện tại của menu
  if (mobileNav.classList.contains('d-none')) {
      mobileNav.classList.remove('d-none');
  } else {
      // Nếu menu đang hiển thị, ẩn menu
      mobileNav.classList.add('d-none');
  }
}
