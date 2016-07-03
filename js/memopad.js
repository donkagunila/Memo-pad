$(document).ready(function () {
	// animate username
	$('.inputs1').focusin(usernamefocusin);
	$('.inputs1').focusout(function () {
		if ($('.inputs1').val() == "") {
			usernamefocusout();
		}
	});

	//animate password
	$('.inputs2').focusin(passwordfocusin);
	$('.inputs2').focusout(function () {
		if ($('.inputs2').val()== "") {
			passwordfocusout();
		}
	})
});

function usernamefocusin() {
	$('#user').animate({
		top:'5px',
	},120);
}
function usernamefocusout() {
	$('#user').animate({
		top:'25px',
	},120);
}
function passwordfocusin() {
	$('#pass').animate({
		top:'0px',
	},120);
}
function passwordfocusout() {
	$('#pass').animate({
		top:'25px',
	},120);
}