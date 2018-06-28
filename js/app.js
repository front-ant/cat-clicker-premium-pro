$(function() {



$(".individual-cat").click(function(event) {
  counter = $(this).find('.counter');
  let counterValue = Number(counter.text());
  counter.text(function() {
    let newCounterValue = counterValue + 1;
    return newCounterValue;
  });

  })

})




class Cat {
  constructor(name, src) {
    this.name = name;
    this.src = src;
  }

}


//end document ready
