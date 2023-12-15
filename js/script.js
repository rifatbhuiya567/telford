/* 
----------------
Table Of Content
----------------
1. Sticky Navbar JS Start
2. Mobile DropdownMenu JS Start
3. Scroll Top JS Start
*/

const btt = document.querySelector('.btt i');

window.onload = () => {
  btt.style.display = 'none';
}

window.onscroll = () => {
  let mainHeader = document.querySelector(".main-header"),
    mobileHeader = document.querySelector(".mobile-header"),
    webLogo = document.querySelector(".web-logo"),
    mobileLogo = document.querySelector(".mobile-logo"),
    tel = document.querySelector(".header-links .tel"),
    mail = document.querySelector(".header-links .h-mail");

  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    mainHeader.classList.add("stick-nav");
    mobileHeader.classList.add("stick-nav");
    mainHeader.style.padding = "8px 0";
    webLogo.style.width = "220px";
    tel.style.fontSize = "18px";
    mail.style.fontSize = "16px";
    mobileHeader.style.padding = "8px 0";
    mobileLogo.style.width = "180px";
  } else {
    mainHeader.classList.remove("stick-nav");
    mobileHeader.classList.remove("stick-nav");
    mainHeader.style.padding = "16px 0";
    webLogo.style.width = "260px";
    tel.style.fontSize = "22px";
    mail.style.fontSize = "18px";
    mobileHeader.style.padding = "16px 0";
    mobileLogo.style.width = "220px";
  }

  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btt.style.display = 'block';
  }else {
      btt.style.display = 'none';
  }
};
// Sticky Navbar JS End

const mobileDropdown = () => {
  let dropdown = document.querySelector(".mobile-header .dropdown a"),
    dropdownMenu = document.querySelector(".mobile-header .nav-item-dropdown");

  dropdownMenu.style.display = "none";
  $(dropdown).click(function () {
    $(dropdownMenu).toggle(500);
    $(dropdown).toggleClass("active-dropdown");
  });
};
mobileDropdown();
// Mobile DropdownMenu JS End

btt.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
// Scroll Top Js End
