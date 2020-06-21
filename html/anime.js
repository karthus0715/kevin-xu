var tl = anime.timeline({
    easing: 'easeInOutSine',
    duration: 1000,
    loop: true,
    direction: 'alternate'
  });
  
  tl.add({
    targets: 'div',
    translateX: 400
  });
  
  tl.add({
    targets: 'div',
    translateY: 400,
    easing: 'spring'
  });
  
  tl.add({
    targets: 'div',
    scale: 100.33,
  });
  