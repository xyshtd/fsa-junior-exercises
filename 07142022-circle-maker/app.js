const button = document.querySelector('button');
const colorSelect = document.querySelector('#color-select');
const sizeSelect = document.querySelector('#size-select');
const container = document.querySelector('#container');
const span = document.querySelector('h1 > span');

//add the cirle 
button.addEventListener('click',()=>{
    const color = colorSelect.value;
    const size = sizeSelect.value;
    const circle = document.createElement('div');
    circle.classList.add(size);
    circle.classList.add(color);
    container.append(circle);
    //cohert string to num
    // or const size= +sizeSelect.value;
    span.innerText = span.innerText*1 - 1;
});
//remove the circle
container.addEventListener('click',(ev)=>{
    //console.log(ev.target.tagName) -> DIV always uppercase
    //console.log(ev.target.id) -> container
    //avoid event bubbling
    if (ev.target.id !== 'container'){
        ev.target.parentNode.removeChild(ev.target);}
})