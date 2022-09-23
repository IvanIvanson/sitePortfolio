let barScroll = document.querySelectorAll('.progress-bar');
let navbar = document.querySelector('.navbar');
let navbarNav = document.querySelector(".nav-link");


window.addEventListener('scroll', function () {
   
    
    if (window.pageYOffset > innerHeight/10) {
      navbar.classList.remove("bg-light");
      navbar.classList.add("bg-secondary");
      navbar.style.opacity = 0.9;
      navbarNav.style.color = "white";
    } else {
      navbar.classList.remove("bg-secondary");
      navbar.classList.add("bg-light");
      navbar.style.opacity = 1;
      navbarNav.style.color = "black";
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