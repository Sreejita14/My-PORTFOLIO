///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

const navEl = document.querySelector(".main-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  navEl.style.display = "flex";
});

///////////////////////////////////////////////////////////

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
   if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")  ) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
 


document.querySelectorAll('.image-container img').forEach(image =>{
    image.onclick =()=>{
      document.querySelector('.popup-image').style.display ='block';
      document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
  });
  
  document.querySelector('.popup-image span').onclick=()=>{
    document.querySelector('.popup-image').style.display ='none';
  }
  

  function Project1() {
    window.open(
    "https://github.com/Sreejita14/Book-Store-Inventory-and-Library-Management-System", "_blank");
}
  function Project2() {
    window.open(
    "https://github.com/Sreejita14/VLMS", "_blank");
}

function insta(){
  window.open("https://www.instagram.com/artsy_sreejita/" ,"_blank");
}

function hr(){
  window.open("https://www.hackerrank.com/Sree_Banerjee14?hr_r=1","_blank");
}

function gh(){
  window.open("https://github.com/Sreejita14","_blank");
}

function lin(){
  window.open("https://www.linkedin.com/in/sreejitabanerjee/","_blank");
}

function fb(){
  window.open("","_blank");
}