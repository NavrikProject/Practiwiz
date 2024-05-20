/* home page banner slider start */

$('.udguafr_slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        } 
    }
})

/* home page banner slider end */





/* mentors slider start */

 $('.owldihsard').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

/* mentors slider end */



    $('.gfhghg').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });

  

   
        $('.ghghtyh').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
  
/*complete profile end*/









/*mentor dashboard start*/


/*complete profile start*/

window.addEventListener("DOMContentLoaded", () => {
    // update circle when range change
    const pie = document.querySelectorAll(".pie");
    const range = document.querySelector('[type="range"]');
  
    range.addEventListener("input", (e) => {
      pie.forEach((el, index) => {
        const options = {
          index: index + 1,
          percent: e.target.value
        };
        circle.animationTo(options);
      });
    });
  
    // start the animation when the element is in the page view
    const elements = [].slice.call(document.querySelectorAll(".pie"));
    const circle = new CircularProgressBar("pie");
  
    // circle.initial();
  
    if ("IntersectionObserver" in window) {
      const config = {
        root: null,
        rootMargin: "0px",
        threshold: 0.75
      };
  
      const ovserver = new IntersectionObserver((entries, observer) => {
        entries.map((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.75) {
            circle.initial(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, config);
  
      elements.map((item) => {
        ovserver.observe(item);
      });
    } else {
      elements.map((element) => {
        circle.initial(element);
      });
    }
  
    setInterval(() => {
      const typeFont = [100, 200, 300, 400, 500, 600, 700];
      const colorHex = `#${Math.floor((Math.random() * 0xffffff) << 0).toString(
        16
      )}`;
      const options = {
        index: 17,
        percent: Math.floor(Math.random() * 100 + 1),
        colorSlice: colorHex,
        fontColor: colorHex,
        fontSize: `${Math.floor(Math.random() * (1.4 - 1 + 1) + 1)}rem`,
        fontWeight: typeFont[Math.floor(Math.random() * typeFont.length)]
      };
      circle.animationTo(options);
    }, 3000);
  
    // global configuration
    const globalConfig = {
      speed: 30,
      animationSmooth: "1s ease-out",
      strokeBottom: 5,
      colorSlice: "#FF6D00",
      colorCircle: "#f1f1f1",
      round: true
    };
  
    const global = new CircularProgressBar("global", globalConfig);
    global.initial();
  
    // update global example when change range
    const pieGlobal = document.querySelectorAll(".global");
    range.addEventListener("input", (e) => {
      pieGlobal.forEach((el, index) => {
        const options = {
          index: index + 1,
          percent: e.target.value
        };
        global.animationTo(options);
      });
    });
  
    document.querySelectorAll("pre code").forEach((el) => {
      hljs.highlightElement(el);
    });
  
    const infoCode = document.querySelectorAll(".info-code");
    infoCode.forEach((info) => {
      info.addEventListener("click", (e) => {
        e.target.closest("section").classList.toggle("show-code");
      });
    });
  });

/*complete profile end*/




/*saved jobs select option start*/

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

/*saved jobs select option end*/
  

/*mentor dashboard end*/





/*job filter option slider start*/

    const filterOptionbox = document.querySelector("#duygerncrttt");
    
    document.addEventListener("DOMContentLoaded", function() {
        const filterBtn = document.querySelector("#uidgerr_text");
        
        filterBtn.addEventListener("click", function() {
            if (filterOptionbox.classList.contains("ugenhuhrtniu")) {
                filterOptionbox.classList.remove("ugenhuhrtniu");
            } else {
                filterOptionbox.classList.add("ugenhuhrtniu");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        const filterClosebtn = document.querySelector("#close-filter");
        
        filterClosebtn.addEventListener("click", function() {
            if (filterOptionbox.classList.contains("ugenhuhrtniu")) {
                filterOptionbox.classList.remove("ugenhuhrtniu");
            } else {
                filterOptionbox.classList.add("ugenhuhrtniu");
            }
        });
    });
    
/*job filter option slider end*/







/*dashboard responsive sidebar start*/

    const dbResbox = document.querySelector("#res-db-side-bar");
    
    document.addEventListener("DOMContentLoaded", function() {
        const dbResbtn = document.querySelector("#responsive-side-bar");
        
        dbResbtn.addEventListener("click", function() {
            if (dbResbox.classList.contains("ugenhuhrtniu")) {
                dbResbox.classList.remove("ugenhuhrtniu");
            } else {
                dbResbox.classList.add("ugenhuhrtniu");
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        const filterClosebtn = document.querySelector("#close-filter");
        
        filterClosebtn.addEventListener("click", function() {
            if (dbResbox.classList.contains("ugenhuhrtniu")) {
                dbResbox.classList.remove("ugenhuhrtniu");
            } else {
                dbResbox.classList.add("ugenhuhrtniu");
            }
        });
    });
    
/*dashboard responsive sidebar end*/




/*tab content*/

$(document).ready(function(){
    
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

});

/*tab content */