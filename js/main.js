let num = 30;
let canvasStyle = `width:${(1/num)*100}%; height:${(1/num)*100}%; border: 1px solid lightgray; background: white;`;
const canvas = document.querySelector('.canvas')

function setCanvas(num) {
  for (let i = 0; i < num * num; i++) {
    const block = document.createElement('div') //.classList.add('.block');
    // color in when the curser enters the box
    block.addEventListener('mouseenter', draw);
    //block.setAttribute('class', 'block');
    block.setAttribute('style', canvasStyle);
    canvas.appendChild(block);
  }
}

setCanvas(num);

function draw(e) {
  console.log(e.target.style.backgroundColor = 'salmon');
}

//reset button
function reset() {
  let properNumber = false;
  let blocks = document.querySelectorAll('div');

  blocks.forEach((square) => {
    square.remove();
    //console.log(square.setAttribute('style', canvasStyle));
  });

  //test if user input is a proper number no more than 100.
  while (!properNumber) {
    num = +prompt('change the grid size. 100 is the max.', '');
    if (num <= 100 && num > 0) {
      properNumber = true;
    }
  }
  console.log(num);
  canvasStyle =`width:${(1/num)*100}%; height:${(1/num)*100}%; border: 1px solid lightgray; background: white;`;
  setCanvas(num);
}

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', reset)