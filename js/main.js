$( document ).ready(function() {
    console.log( "ready!" );

$( "a" ).click(function(event) { 
        event.preventDefault();
});


$("p.readmore").click(function() {
	$("p.readmore").hide();
	$("p.readless").show();
	$("#show-this-on-click").slideDown(function() {
	});	
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
});	


//close ready
});


