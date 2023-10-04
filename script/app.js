let tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: 'power1.inOut',
  },
  repeat: -1,
  yoyo: true,
});

tl.set('#Shadow', {
  transformOrigin: '50% 100%',
});

tl.set('#Fire', {
  transformOrigin: '50% 0%',
})

  .fromTo(
    '#Robot',
    {
      y: 2.5,
    },
    {
      y: -2.5,
    }
  )
  .to(
    '#Shadow',
    {
      scale: 0.75,
    },
    '<'
  )
  .to(
    '#Fire',
    {
      scale: 1.25,
    },
    '<'
  );
