let catNames = [
  'Tubbs',
  'Peaches',
  'Sapphire',
  'Jeeves',
  'Cafe'
];

let Cat = '';
let constructedCats = new Map();

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
      `Click Count: ${this.clicked}`
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
   $('.catPicker').append(`<li class='catName'>${catNames[i]}</li>`);
  constructedCats.set(catNames[i], new Cat(catNames[i]));
}


//event listener for menu clicks

$('.catName').click(function(event) {
  let clickedCat = event.target;
  let clickedCatName = clickedCat.innerHTML;
  let catToBeDisplayed = constructedCats.get(clickedCatName)
  if (clickedCat.nodeName === 'LI') {
     catToBeDisplayed.display();
     catToBeDisplayed.updateClickCount();
  }
});






$('.cat-container').click(function(event) {
  console.log(event.target);
  });
});
