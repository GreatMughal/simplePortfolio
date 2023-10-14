var tl = gsap.timeline();

tl.from("#nav h3,#nav #cen-nav li,#nav button", {
    y: -50,
    duration: 0.2,
    delay: 0.2,
    stagger:0.2,
  })

  tl.to("#left #img-box img",{
    opacity:1,
  })

  tl.from("#right h1,#right p,#right #icon",{
    scale:0,
    opacity:0,
    duration:0.2,
    delay:0.2,
    stagger:0.2,
    ease:"slow",
  })