//--------------------> Navabar section <---------------
let box = document.querySelector(".box");

let close = document.querySelector(".close");

let linkClosing = document.querySelectorAll(".list_item");

let t1 = gsap.timeline({paused: true});

t1
.to('.circle', {duration: 0.7, width: '300%', height: '300vh'})
.to('.menu_container', {display: 'flex'})
.to('.list_item', {duration: 0.4, y: 0, stagger: 0.2, opacity: 1})
.to('.close', {display: 'block'})
.to('.close', {opacity: 1, duration: 0.1});

box.addEventListener("click", () => {
  t1.play();
});

close.addEventListener("click", () => {
  t1.reverse();
});

linkClosing.forEach(link => {
  link.addEventListener("click", () => {
    t1.reverse();
  })
})
//--------------------> Navabar section <---------------