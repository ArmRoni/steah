
document.addEventListener("DOMContentLoaded", function() {
  new WOW({
    delay: '1s'
  }).init();
});
    jQuery(function() {  
        jQuery('.service-sigle, .team-box-item')
          .on('mouseenter', function(e) {
                  var parentOffset = jQuery(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                  jQuery(this).find('.hover-span').css({top:relY, left:relX})
          })
          .on('mouseout', function(e) {
                  var parentOffset = jQuery(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
              jQuery(this).find('.hover-span').css({top:relY, left:relX})
          });
    });

    jQuery('.works-slider').owlCarousel({
        loop:true,
        nav:false,
        margin:108,
        autoplay:true,
        stagePadding: 0,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots:false,
            },
            768:{
              items:2.6,
              margin:50,
              autoplay:true,
            },
            992:{
                items:2.6,
            },
        }
    });
    
    if (document.querySelector(".left-to-right")) {
      leftRightSlider();
    }
    function leftRightSlider() {
      gsap.fromTo(".left-to-right", {
        width: 0,
        x: "0%",
      }, {
        duration: 2,
        width: "100%",
        x: "100%",
        ease: "linear",
        repeat: -1,
        onStart: function() {
          gsap.set(".left-to-right", {  width: 0, x: "0%" });
        }
      });
    }

//========== top-bottm border js ======
if (document.querySelector(".top-to-bottom")) {
  topBottomSlider();
}

function topBottomSlider() {
  gsap.fromTo(".top-to-bottom", {
    height: 0,
    y: "0%",
  }, {
    duration: 2,
    height: "100%",
    y: "100%",
    ease: "linear",
    repeat: -1,
    onStart: function() {
      gsap.set(".top-to-bottom", { height: 0, y: "0%" });
    }
  });
}


const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.common-bottom-menu');
const navLinks = document.querySelectorAll('.menu a');
allEventListners();
function allEventListners() {
  navToggler.addEventListener('click', togglerClick);
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
  // document.body.classList.toggle('body-class-name'); 
  document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';
}
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

// pre loader

  document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('load', function () {
        const preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
    });
});


// typewriter text
const elements = document.querySelectorAll(".typewriter");
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
elements.forEach((element, index) => {
  const text = element.textContent;
  element.innerHTML = "";
  if (isElementInViewport(element)) {
    animateText(element, text);
  } else {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateText(element, text);
        observer.unobserve(element);
      }
    });
    observer.observe(element);
  }
});

function animateText(element, text) {
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, 100);
}


function toggleClasses() {
  const element = document.querySelector(".parent");
  let intervalId;
  if (element) {
    const classes = ["bottom", "left", "right"];
    let currentIndex = 0;

    function changeClasses() {
      element.classList.remove(...classes);
      currentIndex = (currentIndex + 1) % classes.length;
      element.classList.add(classes[currentIndex]);
    }
    intervalId = setInterval(changeClasses, 3000);
    // Add event listeners to start and stop the interval on hover
    element.addEventListener("mouseover", () => {
      clearInterval(intervalId); // Stop the interval
    });

    element.addEventListener("mouseout", () => {
      intervalId = setInterval(changeClasses, 3000); // Restart the interval
    });
  }
}

toggleClasses();

// hero banner text animton js
const textAcElements = document.querySelectorAll('.text-ac');
if (textAcElements.length > 0) {
    let currentElementIndex = 0;

    setInterval(function() {
        const currentElement = textAcElements[currentElementIndex];
        currentElement.classList.remove('active');
        currentElementIndex++;

        if (currentElementIndex >= textAcElements.length) {
            currentElementIndex = 0;
        }

        textAcElements[currentElementIndex].classList.add('active');
    }, 3000);
}

// news filer script
jQuery(document).ready(function () {
      showItems('all');

      jQuery('.filter').click(function () {
          var filter = jQuery(this).data('filter');
          showItems(filter);
          jQuery('.filter').removeClass('active');
          jQuery(this).addClass('active');
      });

      function showItems(filter) {
          if (filter === 'all') {
              jQuery('.item').show();
          } else {
              jQuery('.item').hide();
              $('.' + filter).show();
          }
      }
  });

//about text js==========
  if (jQuery('.circle-text').length > 0) {
    jQuery('.circle-text').each(function() {
        jQuery(this).html(jQuery(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='2_text'>$&</span>"));
    });

    var jQuerytext2 = jQuery(".circle-text span"),
        tl_2 = new TimelineMax({ repeat: -1 });

    tl_2
        .staggerFrom(
            jQuerytext2,
            0.5, {
                top: "+=25px",
                rotation: "-=-3deg",
                alpha: 0,
                scale: 0.8,
                ease: Power1.easeOut
            },
            0.08)
        .to(jQuerytext2, 0.5, {
            alpha: 0,
            ease: Power1.easeOut
        }, '+=3');
}


$(document).ready(function () {
  $('.scroll li a').on('click', function (event) {
      // event.preventDefault();

      var target = $($(this).attr('href'));

      $('html, body').animate({
          scrollTop: target.offset().top - 10
      }, 1000);
  });
});


// Back to top
var amountScrolled = 100;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('.back-to-top').addClass('show');
  } else {
    $('.back-to-top').removeClass('show');
  }
});

$('.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 100);
  return false;
});


$(document).ready(function() {
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      $('.feature-area-bg').css('background-attachment', 'fixed');
  }
});