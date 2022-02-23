anchors.add();

AOS.init()
particlesJS.load('particles', 'assets/json/particles.json', function () {
var canvas = document.querySelector(".particles-js-canvas-el")
});
scrolling = document.querySelectorAll('.acad-description')
scrolling.forEach((x, i) => {
var m = new PerfectScrollbar(x, {
    wheelSpeed: 0.2,
    wheelPropagation: true,
});
})