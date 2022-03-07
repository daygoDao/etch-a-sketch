let num = 16;
const canvas = document.querySelector('.canvas')

for (let i = 0; i < num*num; i++) {
  const block = document.createElement('div') //.classList.add('.block');
  // color in when the curser enters the box
  block.addEventListener('mouseenter', draw);

  block.setAttribute('style', `width:${(1/num)*100}%; height:${(1/num)*100}%; border: 2px solid red;`);
  canvas.appendChild(block);
}


function draw(e) {
  console.log(e.target.classList.add('colorIn'));
}