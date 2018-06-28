$(function() {

  const cats = [
  {
    name: 'Tubbs',
    src: 'img/tubbs.jpg'
  },
  {
    name: 'Peaches',
    src: 'img/peaches.jpg'
  }
  ]


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
