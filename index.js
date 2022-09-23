const barScroll = document.querySelectorAll('.progress-bar');
const navbar = document.querySelector('.navbar');
const navbarNav = document.querySelector(".nav-link");
const logo = document.querySelector(".logo");
 

window.addEventListener('scroll', function () {
    let attrLogo = logo.getAttribute("src"); 
    if (window.pageYOffset > innerHeight/10) {
      navbar.classList.remove("bg-light");
      navbar.classList.add("bg-secondary");
      navbar.style.opacity = 0.9;
      navbarNav.style.color = "white";
        // attrLogo.setAttribute("src", "./images/logo-lite.png");
   logo.src = "./images/logo-lite.png";

    } else {
      navbar.classList.remove("bg-secondary");
      navbar.classList.add("bg-light");
      navbar.style.opacity = 1;
        navbarNav.style.color = "black";
        logo.src = "./images/logo.png";
    }
    // 
    barScroll.forEach((item) => {
        if (window.pageYOffset >= (innerHeight/4)) {
            item.style.width = item.getAttribute("aria-valuenow") + "%";
            
        } else {
            item.style.width = 0 + '%';
            
         }
       

        
    })
    
})
const btn = document.querySelector('#btn');
const background = document.querySelectorAll(".changebg");
const colortext = document.querySelectorAll(".colortext");
const changeBgDark = function () {
    logo.src = "./images/logo-lite.png";
    background.forEach((item) => {
        item.classList.add("bg-dark");
        item.classList.remove("bg-light");
    });
    colortext.forEach((item) => {
        item.classList.add("text-light");
    });
}
const changeBgLight = function () {
     logo.src = "./images/logo.png";
  background.forEach((item) => {
    item.classList.add("bg-light");
    item.classList.remove("bg-dark");
  });
    colortext.forEach((item) => {
      item.classList.remove("text-light");
    });
};
let flag = true;
btn.addEventListener('click', function () {
    
    if (flag === false) {
        changeBgLight();
        btn.innerHTML = `<i class="fa-regular fa-moon"></i>`;
         flag = true;
    } else {
        changeBgDark();
      btn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
      flag = false;
    }
     
   
})