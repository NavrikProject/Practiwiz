/*header start*/

document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');

    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) { // Change 100 to whatever scroll position you prefer
        header.classList.add('headeractive');
      } else {
        header.classList.remove('headeractive');
      }
    });
});

/*header end*/






/*responsive navbar start*/

const navToggle = document.querySelector("#nav-toggler");

document.addEventListener("DOMContentLoaded", function() {    
    const navExpand = document.querySelector("#navbarSupportedContent");

    navToggle.addEventListener("click", function() {
        if (navExpand.classList.contains("navbarmenucollapse")) {
            navExpand.classList.remove("navbarmenucollapse");
        } else {
            navExpand.classList.add("navbarmenucollapse");
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {    
    const barIcon = document.querySelector("#bar-icon");   
    const closeIcon = document.querySelector("#close-mark-icon");

    navToggle.addEventListener("click", function() {
        if (barIcon.classList.contains("navbar-toggler-icon")) {
            barIcon.classList.remove("navbar-toggler-icon") & closeIcon.classList.remove("d-none");
        } else {
            barIcon.classList.add("navbar-toggler-icon") & closeIcon.classList.add("d-none");
        }
    });
});

/*responsive navbar end*/

