// YOUR CODE HERE
//use npm install npm - testem
class ${
    constructor(selector) {
      if (selector[0] === ".") {
        //collection
        this.elements = [...document.getElementsByClassName(selector.slice(1))];
      }
      else if (selector[0] === "#") {
        //at least one element
        this.elements = [document.getElementById(selector.slice(1))];
      }
      else {
        this.elements = [...document.getElementsByTagName(selector)];
      }
    }

    hide(){
        this.elements.forEach(elem => {
            elem.style.display = "none";
            })
            return this;
        }

    show(){
        this.elements.forEach(elem => {
            elem.style.display = "inherit";
        })
        return this;
    }

    addClassName (className) {
        this.elements.forEach(elem => {
          elem.classList.add(className);
        });
        return this;
    }
  
    removeClassName (className) {
      this.elements.forEach(elem => {
        elem.classList.remove(className);
      });
    }

    text (text) {
        this.elements.forEach(elem => {
          elem.innerText = text;
        });
        return this;
    }

    addChild (tag) {
        this.elements.forEach(element => {
          const child = document.createElement(tag.toUpperCase());
          element.appendChild(newChild);
        });
        return this;
      }
}