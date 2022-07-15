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
  //lement.classList.add(), remove(), replace(), toggle()
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
}

//extras