function lookInTheBox (box) {
  if (box.innerBoxes) {
    console.log(box.innerBoxes)
    //box.innerBoxes.forEach(aBox => lookInTheBox(box))
    box.innerBoxes.forEach(aBox => lookInTheBox(aBox))
  }
  else {
    //console.log(`Found this in the box: ${theBox}`)
    console.log(`Found this in the box: ${box.hey}`)
  }
}

const theBox = {
  innerBoxes: [{
    innerBoxes: [{
      innerBoxes: []
    }],
  }, {
    innerBoxes: [{
      hey: "this is what's in the box!",
    }]
  }]
};

lookInTheBox(theBox)