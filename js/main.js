let num = 16;
let canvasStyle = `width:${(1/num)*100}%; height:${(1/num)*100}%; border: 2px solid red; background: white;`;
const canvas = document.querySelector('.canvas')


for (let i = 0; i < num*num; i++) {
  const block = document.createElement('div') //.classList.add('.block');
  // color in when the curser enters the box
  block.addEventListener('mouseenter', draw);
  //block.setAttribute('class', 'block');
  block.setAttribute('style', canvasStyle);
  canvas.appendChild(block);
}


function draw(e) {
  console.log(e.target.style.background = 'red');
}

//reset button
function reset() {
  let blocks = document.querySelectorAll('div');
  blocks.forEach((square) => {
    console.log(square.setAttribute('style', canvasStyle));
  });
}
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', reset)