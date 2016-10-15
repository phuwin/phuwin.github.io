$(function(){	
	displayPhu(displayContent);


});

function displayPhu (callback) {
	$('#phu').show();
	$('#phu').animate({ opacity: 0 }, 0);
	$('#phu').animate({ opacity: 1, top: "-1000px" }, 500);
	if (callback) callback();
}

function displayContent() {
	$('#content').show();
	$('#content').animate({ opacity: 0 }, 0);
	$('#content').animate({ opacity: 1, top: "-10px" }, 500);
}