document.querySelectorAll(".thumb-video").forEach((v) => v.play().catch(() => {}));

const button = document.getElementById("viewWorks");
const works = document.getElementById("works");

button.addEventListener("click", () => {

    works.scrollIntoView({
        behavior: "smooth"
    });

});

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.onload = () => window.scrollTo(0, 0);

const portfolio = document.querySelector(".portfolio");
const portfolioHeader = document.querySelector(".portfolio-header");

const observer = new IntersectionObserver(

(entries)=>{

    if(entries[0].isIntersecting){

        portfolioHeader.classList.add("visible");

    }else{

        portfolioHeader.classList.remove("visible");

    }

},

{
    threshold:.15
});

observer.observe(portfolio);