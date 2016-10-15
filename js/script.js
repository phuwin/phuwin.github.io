$(function(){	
	displayContent();
});


function displayContent() {
	$('#content').show();
	$('#content').animate({ opacity: 0 }, 0);
	$('#content').animate({ opacity: 1 }, 2000);
}