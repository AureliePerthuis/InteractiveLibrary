$( document ).ready(function() {
    	
	$("#verdict_close_button").hide();
	$("#car1_close_button").hide();
	$("#car2_close_button").hide();
	$("#car1_close_button_icon").hide();
	$("#car2_close_button_icon").hide();

	
});

// -- BASIC FUNCTION CALL
var page = {
	init: function(){
	},
	displayChanged: function(visibility){
		if (visibility){
			
			

$("#value_button").click(function() {
	
$( "#content_container" ).children().removeClass(" copy_car1_in copy_car1_out copy_car2_in copy_car2_out");
$("#value_car1").addClass("copy_car1_in");
$("#value_car2").addClass("copy_car2_in");
$("#technology_car1").addClass("copy_car1_out");	
$("#technology_car2").addClass("copy_car2_out");
$("#design_car1").addClass("copy_car1_out");	
$("#design_car2").addClass("copy_car2_out");	
$("#safety_car1").addClass("copy_car1_out");	
$("#safety_car2").addClass("copy_car2_out");
$("#driving_car1").addClass("copy_car1_out");	
$("#driving_car2").addClass("copy_car2_out");

$( "#content_container" ).children().children().removeClass(" button_on button_off ");
$("#value_button").addClass("button_on");
$("#technology_button").addClass("button_off");
$("#design_button").addClass("button_off");
$("#safety_button").addClass("button_off");
$("#driving_button").addClass("button_off");

});

$("#technology_button").click(function() {
$( "#content_container" ).children().removeClass(" copy_car1_in copy_car1_out copy_car2_in copy_car2_out");	
$("#value_car1").addClass("copy_car1_out");
$("#value_car2").addClass("copy_car2_out");
$("#technology_car1").addClass("copy_car1_in");	
$("#technology_car2").addClass("copy_car2_in");
$("#design_car1").addClass("copy_car1_out");	
$("#design_car2").addClass("copy_car2_out");	
$("#safety_car1").addClass("copy_car1_out");	
$("#safety_car2").addClass("copy_car2_out");
$("#driving_car1").addClass("copy_car1_out");	
$("#driving_car2").addClass("copy_car2_out");

$( "#content_container" ).children().children().removeClass(" button_on button_off ");
$("#value_button").addClass("button_off");
$("#technology_button").addClass("button_on");
$("#design_button").addClass("button_off");
$("#safety_button").addClass("button_off");
$("#driving_button").addClass("button_off");

});

$("#design_button").click(function() {
$( "#content_container" ).children().removeClass(" copy_car1_in copy_car1_out copy_car2_in copy_car2_out");	
$("#value_car1").addClass("copy_car1_out");
$("#value_car2").addClass("copy_car2_out");
$("#technology_car1").addClass("copy_car1_out");	
$("#technology_car2").addClass("copy_car2_out");
$("#design_car1").addClass("copy_car1_in");	
$("#design_car2").addClass("copy_car2_in");	
$("#safety_car1").addClass("copy_car1_out");	
$("#safety_car2").addClass("copy_car2_out");
$("#driving_car1").addClass("copy_car1_out");	
$("#driving_car2").addClass("copy_car2_out");

$( "#content_container" ).children().children().removeClass(" button_on button_off ");
$("#value_button").addClass("button_off");
$("#technology_button").addClass("button_off");
$("#design_button").addClass("button_on");
$("#safety_button").addClass("button_off");
$("#driving_button").addClass("button_off");

});

$("#safety_button").click(function() {
$( "#content_container" ).children().removeClass(" copy_car1_in copy_car1_out copy_car2_in copy_car2_out");	
$("#value_car1").addClass("copy_car1_out");
$("#value_car2").addClass("copy_car2_out");
$("#technology_car1").addClass("copy_car1_out");	
$("#technology_car2").addClass("copy_car2_out");
$("#design_car1").addClass("copy_car1_out");	
$("#design_car2").addClass("copy_car2_out");	
$("#safety_car1").addClass("copy_car1_in");	
$("#safety_car2").addClass("copy_car2_in");
$("#driving_car1").addClass("copy_car1_out");	
$("#driving_car2").addClass("copy_car2_out");

$( "#content_container" ).children().children().removeClass(" button_on button_off ");
$("#value_button").addClass("button_off");
$("#technology_button").addClass("button_off");
$("#design_button").addClass("button_off");
$("#safety_button").addClass("button_on");
$("#driving_button").addClass("button_off");

});

$("#driving_button").click(function() {
$( "#content_container" ).children().removeClass(" copy_car1_in copy_car1_out copy_car2_in copy_car2_out");	
$("#value_car1").addClass("copy_car1_out");
$("#value_car2").addClass("copy_car2_out");
$("#technology_car1").addClass("copy_car1_out");	
$("#technology_car2").addClass("copy_car2_out");
$("#design_car1").addClass("copy_car1_out");	
$("#design_car2").addClass("copy_car2_out");	
$("#safety_car1").addClass("copy_car1_out");	
$("#safety_car2").addClass("copy_car2_out");
$("#driving_car1").addClass("copy_car1_in");	
$("#driving_car2").addClass("copy_car2_in");

$( "#content_container" ).children().children().removeClass(" button_on button_off ");
$("#value_button").addClass("button_off");
$("#technology_button").addClass("button_off");
$("#design_button").addClass("button_off");
$("#safety_button").addClass("button_off");
$("#driving_button").addClass("button_on");

});

$("#verdict_button").click(function() {
$( "#content_container" ).children().removeClass(" verdict_holder_in verdict_holder_out");	
$("#verdict_holder").addClass(" verdict_holder_in");
$("#verdict_close_button").show();
$("#verdict_close_button_icon").show();

$( "#content_container" ).children().children().removeClass(" verdict_button_off  verdict_button_on verdict_image_holder_in verdict_image_holder_out");
$("#verdict_button").addClass(" verdict_button_on ");
$("#verdict_image_holder").addClass(" verdict_image_holder_in ");

});	

$("#verdict_close_button").click(function() {
$( "#content_container" ).children().removeClass(" verdict_holder_in verdict_holder_out");	
$("#verdict_holder").addClass(" verdict_holder_out");
$("#verdict_close_button").hide();
$("#verdict_close_button_icon").hide();

$( "#content_container" ).children().children().removeClass(" verdict_button_off  verdict_button_on verdict_image_holder_in verdict_image_holder_out");
$("#verdict_button").addClass(" verdict_button_off ");
$("#verdict_image_holder").addClass(" verdict_image_holder_out ");

});

$("#car1_enlarge_button").click(function() {
$( "#content_container" ).children().removeClass(" car_image1_small");	
$("#car_image1").addClass(" car_image1_big ");
$("#car1_enlarge_button").hide();
$("#car_name2").hide();
$("#car1_close_button").show();
$("#car1_close_button_icon").show();
});

$("#car1_close_button").click(function() {
$( "#content_container" ).children().removeClass(" car_image1_big");	
$("#car_image1").addClass(" car_image1_small ");
$("#car1_enlarge_button").show();
$("#car_name2").show();
$("#car1_close_button").hide();
$("#car1_close_button_icon").hide();
});

$("#car2_enlarge_button").click(function() {
$( "#content_container" ).children().removeClass(" car_image2_small");	
$("#car_image2").addClass(" car_image2_big ");
$("#car2_enlarge_button").hide();
$("#car_name1").hide();
$("#car2_close_button").show();
$("#car2_close_button_icon").show();
});

$("#car2_close_button").click(function() {
$( "#content_container" ).children().removeClass(" car_image2_big");	
$("#car_image2").addClass(" car_image2_small ");
$("#car2_enlarge_button").show();
$("#car_name1").show();
$("#car2_close_button").hide();
$("#car2_close_button_icon").hide();

});
		}
	},
	deinit: function(){}
};



car2_close_button_icon


