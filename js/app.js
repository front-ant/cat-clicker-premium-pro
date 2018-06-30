const catNames = [
  'Tubbs',
  'Peaches',
  'Sapphire',
  'Jeeves',
  'Cafe'
];


$(function() {

  const cats = [
  {
    name: 'Tubbs',
    src: 'img/tubbs.jpg',
    clicks: 0
  },
  {
    name: 'Peaches',
    src: 'img/peaches.jpg',
    clicks: 0
  },
  {
    name: 'Sapphire',
    src: 'img/sapphire.jpg',
    clicks: 0
  },
  {
    name: 'Jeeves',
    src: 'img/jeeves.jpg',
    clicks: 0
  },
  {
    name: 'Cafe',
    src: 'img/cafe.jpg',
    clicks: 0
  }
];

//Create content for catPicker menu
for (const catName of catNames) {
  $('.catPicker').append(`<li>${catName}</li>`);
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
