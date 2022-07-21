// YOUR CODE HERE
//use npm install -> npx testem
class ${
  constructor(selector){
    if(selector[0] === '.'){
      //getElementsByClassName() returns an array-like object(html collection) 
      this.elements = [...document.getElementsByClassName(selector.slice(1))];
    }
    else if(selector[0] === '#'){
      //getElementById() returns an Element object
      this.elements = [document.getElementById(selector.slice(1))];
    }
    else {
      //getElementsByTagName() returns an array-like object(html collection) 
      this.elements = [...document.getElementsByTagName(selector)];
    }
  }
  //DOM Style display Property: https://www.w3schools.com/jsref/prop_style_display.asp
  hide(){
    this.elements.forEach( elem => elem.style.display = 'none');
    //chaining needs returned value; .forEach() return undefined
    return this;
  }
  show(){
    this.elements.forEach( elem => {
      elem.style.display = 'inherit'
    });
    return this;
  }
  //element.classList.add(), remove(), replace(), toggle()
  //classList: DOMTokenList interface represents a set of space-separated tokens
  addClassName(className){
    this.elements.forEach( elem => {
      elem.classList.add(className);
    });
    return this;
  }
 
  removeClassName(className){
    this.elements.forEach( elem => {
      elem.classList.remove(className);
    });
    return this;
  }
  //The innerText property of the HTMLElement interface represents the rendered plain text content of a node and its descendants
  text(txt){
    this.elements.forEach( elem => {
      elem.innerText = txt;
    });
    return this;
  }
  //node.appendChild(newNode); Insert newNode at end of current node
  addChild(tag){
    this.elements.forEach( elem => {
      const child = document.createElement(tag);
      elem.appendChild(child);
    });
    return this;
  }
  //extra
  blink(time) {
    let displayed = true;
    let self = this;
    let switchIt = function (displayed) {
      if (displayed) {
        self.hide();
        console.log("inside hide", self.elements[0].style.display)
        displayed = false;
      } else {
        self.show();
        displayed = true;
        console.log("inside show", self.elements[0].style.display, displayed)
      }
    }
    setInterval(switchIt, time);
    clearInterval(500)
  }



}





//extras
//npm run playground
//http://localhost:8080/

/*  
const classNames = [];
const randomClassName = classNames[Math.floor(Math.random() * classNames.length)];
const div = document.querySelector('div');
div.classList.add(randomClassName);
*/