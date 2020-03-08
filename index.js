var rL = 100;
var gL = 0;
var bL = 30;

var rC = 115;
var gC = 15;
var bC = 45;

var rR = 130;
var gR = 30;
var bR = 60;

borderClass = document.querySelectorAll(".mainButtons");


function colorCheck(colorVal) {
	if (colorVal === 255) {
		colorVal = 0;
	}
	return colorVal;
}

function rgbShiftL() {
	rL++;
	gL++;
	bL++;
	var p1 = rL;
	var p2 = gL;
	var p3 = bL;
	rL = colorCheck(p1);
	gL = colorCheck(p2);
	bL = colorCheck(p3);
	
	return "rgb(" + rL + ", " + gL + ", " + bL + ")";	
}

function rgbShiftC() {
	rC++;
	gC++;
	bC++;
	var p1 = rC;
	var p2 = gC;
	var p3 = bC;
	rC = colorCheck(p1);
	gC = colorCheck(p2);
	bC = colorCheck(p3);
	
	return "rgb(" + rC + ", " + gC + ", " + bC + ")";	
}

function rgbShiftR() {
	rR++;
	gR++;
	bR++;
	var p1 = rR;
	var p2 = gR;
	var p3 = bR;
	rR = colorCheck(p1);
	gR = colorCheck(p2);
	bR = colorCheck(p3);
	
	return "rgb(" + rR + ", " + gR + ", " + bR + ")";	
}


//main loop - swap with jQuery 

setInterval(function() {
	borderClass[0].style.borderColor = rgbShiftL();
}, 30);


setInterval(function() {
	borderClass[1].style.borderColor = rgbShiftC();
}, 30);


setInterval(function() {
	borderClass[2].style.borderColor = rgbShiftR();
}, 30);


//NavBar fade

$(function () {
 	$(document).scroll(function() {
		var $nav = $("#mainNavbar");
		$nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
	});
});