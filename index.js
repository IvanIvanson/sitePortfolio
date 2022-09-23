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