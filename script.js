setTimeout(function(){
  function typedJs() {
    var typed = new Typed('#element', {
      strings: ['Web Developer', 'Graphics Designer'],
      typeSpeed: 50,
    });
  };
  typedJs();
},4000)

var tl = gsap.timeline();

tl.from("#nav h3,#nav #cen-nav li,#nav button", {
  y: -50,
  duration: 0.2,
  delay: 0.2,
  stagger:0.2,
})

tl.from("#left h1",{
  scale:0,
  opacity:0,
  duration:0.2,
  delay:0.2,
  ease:"slow",
})

tl.to("#right #img-box img",{
  opacity:1,
})