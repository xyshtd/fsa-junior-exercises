function run() {
  document.querySelector('#out').innerHTML = JSON.stringify(parseDocument(document));
}

function parseDocument(doc) {
  var els = [].slice.call(doc.querySelectorAll('body *[class]'));

  return els.map(function(el) {
    var type = getType(el);
    return {
      class: el.className,
      type: type
    };
  });
}

function getType(el) {
  //nodeName always uppercase
  //if(el.nodeName == 'img') {
  if(el.nodeName == 'IMG') {
    return 'image';
  }

  return 'other';
}
