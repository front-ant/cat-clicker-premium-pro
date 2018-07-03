let catNames = [
  'Tubbs',
  'Peaches',
  'Sapphire',
  'Jeeves',
  'Cafe'
];

let constructedCats = new Map();

//when DOM is ready:
$(function() {

const model = {
  Cat: class Cat {
    constructor(name) {
      this.name = name;
      this.clicked = 0;
    };
  },

  constructCats: function() {
    for (let i = 0; i < catNames.length; i++) {
      constructedCats.set(catNames[i], new Cat(catNames[i]));
    };
  }


};

const view1 = {
  display: function() {
    for (let i = 0; i < catNames.length; i++) {
       $('.catPicker').append(`<li class='catName'>${catNames[i]}</li>`);
  }
}
};

const view2 = {

};

const octopus = {
  init: function() {
    model.constructCats();
    view1.display();
  }
};

//
//   display() {
//     $('.cat-container').html(
//       this.name +
//       `<img src='img\\${this.name}.jpg' height="300">` +
//       `Click Count: ${this.clicked}`
//     );
//   }
//
//   updateClickCount() {
//     this.clicked += 1;
//   }
// }
//
//
// //event listener for menu clicks
//
// $('.catName').click(function(event) {
//   let clickedCat = event.target;
//   let clickedCatName = clickedCat.innerHTML;
//   // grab active cat object. The variable is also used when
//   // the displayed cat picture is clicked later
//   catToBeDisplayed = constructedCats.get(clickedCatName)
//   if (clickedCat.nodeName === 'LI') {
//      catToBeDisplayed.display();
//      catToBeDisplayed.updateClickCount(); // maybe not necessary
//   }
// });
//
// $('.cat-container').click(function(event) {
//   catToBeDisplayed.display();
//   catToBeDisplayed.updateClickCount()
//   });

octopus.init();

});
