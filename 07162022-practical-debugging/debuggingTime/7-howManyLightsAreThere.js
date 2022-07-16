/* const picard = {
  speak: function () {
    console.log(`There are ${this.many} lights!`)
  },
};

picard.speak() */

const picard = {
  speak: function (many) {
    console.log(`There are ${many} lights!`)
  },
};

picard.speak(4)

/* demo solution
const picard = {
  many: 4;
  speak: function () {
    console.log(`There are ${many} lights!`)
  },
};
////arrow function won't work; this.many is not bound to picard but window

picard.speak()
*/