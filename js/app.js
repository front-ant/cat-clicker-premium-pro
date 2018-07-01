let catNames = [
  'Tubbs',
  'Peaches',
  'Sapphire',
  'Jeeves',
  'Cafe'
];

let Cat = '';
let constructedCats = new Map();
let catToBeDisplayed = ""; // References currently active instance of Cat()

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
// and put the instantiated cat objects into the constructedCats map.
// Assign the cat's names as key for the cat object values
for (let i = 0; i < catNames.length; i++) {
   $('.catPicker').append(`<li class='catName'>${catNames[i]}</li>`);
  constructedCats.set(catNames[i], new Cat(catNames[i]));
}


//event listener for menu clicks

$('.catName').click(function(event) {
  let clickedCat = event.target;
  let clickedCatName = clickedCat.innerHTML;
  // grab active cat object. The variable is also used when
  // the displayed cat picture is clicked later
  catToBeDisplayed = constructedCats.get(clickedCatName)
  if (clickedCat.nodeName === 'LI') {
     catToBeDisplayed.display();
     catToBeDisplayed.updateClickCount(); // maybe not necessary
  }
});

$('.cat-container').click(function(event) {
  catToBeDisplayed.display();
  catToBeDisplayed.updateClickCount()
  });
});
