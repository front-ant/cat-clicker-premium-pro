const catNames = [
  'Tubbs',
  'Peaches',
  'Sapphire',
  'Jeeves',
  'Cafe'
];

let Cat = '';

//when DOM is ready:
$(function() {

//Create content for catPicker menu
for (const catName of catNames) {
  $('.catPicker').append(`<li>${catName}</li>`);
}

Cat = class Cat {
  constructor(name) {
  this.name = name;
  }

  display() {
    $('.cat-container').append(this.name);
  }
}









$('.name').each(function(index) {
    $(this).text(function() {
      for (cat in cats) {
        return cats[index].name;
        index += 1;
      }
    });
  });


$(".individual-cat").click(function(event) {
  counter = $(this).find('.counter');
  let counterValue = Number(counter.text());
  counter.text(function() {
    let newCounterValue = counterValue + 1;
    return newCounterValue;
  });
});
});
