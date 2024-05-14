
 
 // custom.js
const customCSS = `
<style>
  /* Add custom CSS styles below */ 
body.index {
    background: #dfd0b8;
}
[dir=rtl] salla-slider.photos-slider .swiper {
    padding-right: 0rem !important;
}
/* mover banner///////////////// */ 
  [dir=rtl] .carousel-slider .swiper {
    padding-left: 0rem !important;
}
salla-slider.photos-slider .swiper-slide {
    position: relative;
   margin: 0px !important;
    padding: 0px;
    height: auto;
    width: 100%;
    overflow: hidden;
    border-radius: 0rem;
}
.rounded-md {
    border-radius: 0rem !important;
}
.swiper.s-slider-container.swiper-initialized.swiper-horizontal.swiper-pointer-events.swiper-rtl.swiper-backface-hidden {
    padding: 0px;
}
section:first-of-type.s-block.s-block--photos-slider {
    margin: 0px !important;
}

.footer-is-light .store-footer .store-footer__inner {
    background: #948979;
    color: white;
}
.s-block--features__item {
    background: #afa28e;
}
.s-product-card-entry {
    color: white;
    background: #948979;
}
.s-button-primary-outline,.s-product-card-content-title a {
    color: white;
}
header.store-header {
    background: #6c193d;
    color: white !important;
}
.inner.bg-inherit {
    background: #948979;
}
/* categoryyy//////////////// */ 
.grid.md\:grid-cols-3.two-row.grid-flow-row.gap-3.sm\:gap-8,.grid.one-row.md\:grid-cols-3.grid-flow-row.gap-3.sm\:gap-8{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.lazy__bg.lazy.entered.loaded {
    background-size: contain;
    background-repeat: no-repeat;
}
 .banner--fixed img {
    background: #faebd700;
}   

.banner-entry {
    width: 31%;
    height: 225px !important;
    background: #f9fafb00;
}
    
/* Media Query for Mobile Devices */ 
 @media (max-width: 480px) { 
           .banner-entry {
    width: 48%;
     height: 130px !important;
         background: #f9fafb00;
    }
  } 
/* Media Query for low resolution  Tablets, Ipads */ 
       
@media (min-width: 481px) and (max-width: 767px) { 
 .banner-entry {
    width: 47%;
    height: 177px !important;
    background: #f9fafb00;
    }
 }
</style>
`;

const customJS = `
<script>
  /* Add custom Js code below */ 
  var animateCSSLink = document.createElement("link");
  animateCSSLink.rel = "stylesheet";
  animateCSSLink.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
  document.head.appendChild(animateCSSLink);
  document.addEventListener("DOMContentLoaded", function() {
      var sections = document.querySelectorAll('body.index section');
      function handleScroll() {
          sections.forEach(function(section) {
              var bounding = section.getBoundingClientRect();

              if (bounding.top <= window.innerHeight && bounding.bottom >= 0) {
                  if(!section.classList.contains("animate__animated")) {
                      section.classList.add("animate__animated", "animate__bounceInUp");
                  }
              }
          });
      }
      handleScroll();
      window.addEventListener('scroll', handleScroll);
  });
</script>
`;

// Append CSS and JavaScript to the document
document.head.insertAdjacentHTML('beforeend', customCSS);
document.body.insertAdjacentHTML('beforeend', customJS);
