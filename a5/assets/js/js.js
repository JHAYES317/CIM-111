//show/hide and if/else
$(document).ready(function() {
$(".services").hide();
$(".Lessons").hide();
$(".rates").hide();
$(".text").hide();
$(".Sessions").hide();
$(".Accompaniment").hide();
$(".fees").hide();
$(".pricing").hide();
$(".Address").hide();
$(".container").hide();
$(".headSection").hide();
$(".title").hide();

var likeGuitar = prompt("Do you like music? Input yes or no.");
if(likeGuitar = "yes"){
$(".services").show();
$(".Lessons").show();
$(".rates").show();
$(".text").show();
$(".Sessions").show();
$(".Accompaniment").show();
$(".fees").show();
$(".pricing").show();
$(".Address").show();
$(".container").show();
$(".headSection").show();
$(".title").show();
	
}
else{
$(".services").hide();
$(".Lessons").hide();
$(".rates").hide();
$(".text").hide();
$(".Sessions").hide();
$(".Accompaniment").hide();
$(".fees").hide();
$(".pricing").hide();
$(".Address").hide();
$(".container").hide();
$(".headSection").hide();
$(".title").hide();
}


//addhtml()
$("rates").after("Lessons");

//forloop
var bands = ["", "Peas", "Lettuce", "Tomatoes"];
});







