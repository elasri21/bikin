const closeNav = document.querySelector(".close-menu");
const openNav = document.querySelector(".open-nav");
const nav = document.querySelector("nav");
openNav.addEventListener("click", function () {
  nav.style.display = "flex";
});
closeNav.addEventListener("click", function () {
  nav.style.display = "none";
});

//portfolio
const categories = Array.from(document.querySelectorAll(".categories span"));
const projects = Array.from(document.querySelectorAll(".projects .project"));
categories.forEach((btn) => {
  btn.addEventListener("click", function () {
    for (let i = 0; i < categories.length; i++) {
      categories[i].classList.remove("active");
    }
    projects.forEach((p) => {
      if (this.id == p.dataset.id && this.id != "all") {
        p.classList.remove("hide");
      } else if (this.id == "all") {
        p.classList.remove("hide");
      } else {
        p.classList.add("hide");
      }
    });
    this.classList.add("active");
  });
});

// testimonials
const bullets = Array.from(document.querySelectorAll(".bullet"));
const reviews = Array.from(document.querySelectorAll(".review"));
bullets.forEach(btn => {
  btn.addEventListener("click", function () {
    for(let i= 0; i < bullets.length; i++) {
      bullets[i].classList.remove("active");
    }
    reviews.forEach(r => {
      if(this.id == r.dataset.id) {
        r.classList.remove("hide");
      } else {
        r.classList.add("hide");
      }
    });
    this.classList.add("active");
  });
});

//Q&A
const questions = Array.from(document.querySelectorAll(".question"));
const answers = Array.from(document.querySelectorAll(".answer"));
questions.forEach(q => {
  q.addEventListener("click", function() {
    for(let i = 0; i < questions.length; i++) {
      questions[i].classList.remove("active");
    }
    for(let i = 0; i < answers.length; i++) {
      answers[i].classList.add("hide");
    }
    // if(this.classList.contains("active")) {
    //   this.classList.remove("active");
    //   this.nextElementSibling.classList.add("hide");
    // } 
    //else {
    //   this.classList.add("active");
    //   this.nextElementSibling.classList.remove("hide");
    // }
    this.classList.add("active");
    this.nextElementSibling.classList.remove("hide");
  })
});

// go up
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function () {
  if(this.scrollY <= 400) {
    goUp.style.opacity = "0";
  } else if(this.scrollY > 400) {
    goUp.style.opacity = "1";
  }
});
// https://bootstrapmade.com/demo/Bikin/
