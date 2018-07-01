const catNames = [
  'Tubbs',
  'Peaches',
  'Sapphire',
  'Jeeves',
  'Cafe'
];

let Cat = '';
let constructedCats = [];

//when DOM is ready:
$(function() {


Cat = class Cat {
  constructor(name) {
  this.name = name;
  this.clicked = 0;
  }

  display() {
    $('.cat-container').html(
      this.name +
      `<img src='img\\${this.name}.jpg' height="300">` +
      `Clicked ${this.clicked} times`
    );
  }

  updateClickCount() {
    this.clicked += 1;
  }
}

// Loop over catNames array to create content for catPicker menu
// and instantiate as many Cat objects as there are in the name array
// Cat objects are in an array...
for (let i = 0; i < catNames.length; i++) {
  // $('.catPicker').append(`<li class='catName'>${catNames[i]}</li>`);
  constructedCats[i] = new Cat(catNames[i]);
  $('.catNameList').append(`<li class='catName ${[i]}'>${constructedCats[i].name}</li>`);
}


//event listener for menu clicks

$('.catName').click(function(event) {
  let clickedCat = event.target;
  let clickedCatNumber = clickedCat.classList[1];
  if (clickedCat.nodeName === 'LI') {
    constructedCats[clickedCatNumber].display();
    constructedCats[clickedCatNumber].updateClickCount();
  }
});






$('.cat-container img').click(function(event) {
  });
});
