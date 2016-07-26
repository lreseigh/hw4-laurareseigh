$( document ).ready(function() {
  console.log( "ready!" );
  // Great job using document.ready! I would make sure to indent all the code inside of it so it's clear what it is containing in the future. Also, try to remember to delete your console.logs; they're awesome for testing but you don't want them in your production code.

  $( "a" ).click(function(event) {
    event.preventDefault();

    // Nice job using event.preventDefault! I also like that you found a way to do it for all the links; good programmers always want to write as little code as possible. The one thing I would note is that this could potentially cause problems if you wanted to have a link that functions normally; this would prevent it from doing the default. Instead, you could put the event.preventDefault() inside each of the click events if you needed to refactor.
  });


  $("p.readmore").click(function() {
  	$("p.readmore").hide();
  	$("p.readless").show();
  	$("#show-this-on-click").slideDown(function() {
  	});

    // Awesome job with this! One thing to note is that you have an empty function inside your slideDown method, but really you can just leave it empty since the function doesn't actually serve a purpose. You should instead write $("#show-this-on-click").slideDown()
  });


  $("p.readless").click(function() {
  	$("p.readless").hide();
  	$("#show-this-on-click").slideUp(function() {
  	$("p.readmore").show();
  	});
  });


  $("a.learnmore").click(function() {
  	$("a.learnmore").hide();
  	$("#learnmoretext").slideDown(function() {
  	});
  });


  $("#learnmoretext").click(function() {
  	$("a.learnmore").show();
  	$("#learnmoretext").slideUp(function() {
  	});
    // I love that you added a slideUp option for the learnMore section! One thing worth noting is that if you put the learn-more element after the text that is hidden, that will make it look a lot smoother when this slideUp function is being run.
  });

  // You used anonymous functions in this, but maybe next time try using named functions and a callback inside the click event! It can be useful, especially if you are going to have a lot of different items on the page that are performing the same action.

//close ready
});
