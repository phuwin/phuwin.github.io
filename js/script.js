$(function(){	
	displayPhu();

	displayContent();
});

function displayPhu () {
	$('#phu').show();
	$('#phu').animate({ opacity: 0 }, 0);
	$('#phu').animate({ opacity: 1 }, 2000);
}

function displayContent() {
	$('#content').show();
	$('#content').animate({ opacity: 0 }, 0);
	$('#content').animate({ opacity: 1 }, 2000);
}