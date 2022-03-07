let num = 16;
const canvas = document.querySelector('.canvas')

for (let i = 0; i < num*num; i++) {
  const block = document.createElement('div') //.classList.add('.block');
  block.setAttribute('style', `width:${(1/num)*100}%; height:${(1/num)*100}%; border: 2px solid red;`);
  canvas.appendChild(block);
}