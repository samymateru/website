const lenis = new Lenis();

lenis.on('scroll', (e) => {
  
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);






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
console.log(amountToScroll)