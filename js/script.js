const lenis = new Lenis()

lenis.on('scroll', (e) => {
  
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);


const timeline = gsap.timeline();
console.log(timeline)

timeline.from(".header-wrapper", {
    transformOrigin: "left",
    scale: 0.5,
    ease: "elastic.out(1,0.3)",
    duration: 4
})
