const scroller = document.querySelector(".clients-content");


function getScrollAmount(){
    const amountToScroll  = scroller.offsetWidth - window.innerWidth;
    return -1 * amountToScroll;

}

const tween = gsap.to(scroller, {
    x : getScrollAmount,
    duration: 2,
    ease: "none"
});

ScrollTrigger.create({
    trigger: ".clients-wrapper",
    start: "top 10%",
    end: () => `+=${getScrollAmount() * -1}`,
    invalidateOnRefresh: true,
    animation: tween,
    scrub: 1.5,
    pin: true
})





const modalOpenBtns = document.querySelectorAll(".modal-open");
const modalCloseBtns = document.querySelectorAll(".modal-close");
const body = document.querySelector("body");

modalOpenBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
    body.classList.add("prevent-background-scroll");
  });
});

modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = (btn.closest(".modal").style.display = "none");
    body.classList.remove("prevent-background-scroll");
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
    body.classList.remove("prevent-background-scroll");
  }
});