let barScroll = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll', function () {
    barScroll.forEach((item) => {
        if (window.pageYOffset >= (innerHeight/2)) {
             item.style.width = item.getAttribute("aria-valuenow") + "%";
        } else {
            item.style.width = 0 + '%';
         }
       
//     item.setAttribute("style", 50+'px');
// item.getAttribute("aria-valuenow");

        // item.style.width = item.getAttribute("aria-valuenow");
        // if (item.getAttribute("aria-valuenow") === '75') {
        //     item.style.width = '75%';
        // }
        
    })
    
})