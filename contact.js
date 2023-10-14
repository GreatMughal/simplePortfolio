var tl = gsap.timeline();

tl.from("#nav h3,#nav #cen-nav li,#nav button", {
    y: -50,
    duration: 0.2,
    delay: 0.2,
    stagger:0.2,
  })

  tl.from("#left #left-box h1,#left #left-box p",{
    scale:0,
    opacity:0,
    duration:0.2,
    delay:0.2,
    ease:"slow",
    stagger:0.2,
  })

  tl.from("#left #left-box #low i",{
    scale:0,
    opacity:0,
    duration:0.2,
    delay:0.2,
    ease:"slow",
    stagger:0.2,
  })

  tl.to("#left #left-box #low p",{
    duration:0.2,
    delay:0.2,
    ease:"slow",
    stagger:0.2,
  })

  tl.from("#right #right-box h1,#right #right-box #input-box #first,#right #right-box #input-box #sec,#right #right-box #input-box textarea,#right #right-box #input-box button",{
    scale:0,
    opacity:0,
    duration:0.2,
    delay:0.2,
    ease:"slow",
    stagger:0.1,
  })

  