let randomHexColour = function(){
    const hexLetters = '0123456789ABCDEF';
    let colour = '#';
    for( let i = 0; i < 6; i++ ){
      colour += hexLetters[ Math.floor( Math.random() * 16 ) ];
    }
    return colour;
  }
  
  let $block = document.querySelector('div');
  
  $block.addEventListener('click', function(){
    $block.style.background = randomHexColour();
  });