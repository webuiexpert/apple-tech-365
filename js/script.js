
let header = document.querySelector("#header")
let sticky = header.offsetTop
console.log(header.sticky)
window.addEventListener("scroll", function(){ 
    if(window.pageYOffset > sticky){
        header.classList.add('sticky') }
    else{
        header.classList.remove('sticky')
    }
})
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate"); // Trigger AOS animation
          } else {
            entry.target.classList.remove("aos-animate"); // Remove if you want re-trigger
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );
  
    document.querySelectorAll("[data-aos]").forEach((el) => {
      observer.observe(el);
    });
  });
      

