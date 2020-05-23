/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}


//Sample use of matches:

// Get our elements
var elemRed = document.querySelector('.bg-red');
var elemCarrots = document.querySelector('[data-snack="carrots"]');
console.log(elemRed);
console.log(elemCarrots);

// Check for a turkey sandwich
if (elemRed.matches('[data-sandwich="turkey"]')) {
	console.log('turkey sandwich!');
} else {
	console.log('Something else, ick... =(');
}

// Check for a red background
if (elemCarrots.matches('.bg-red')) {
	console.log('Red background, woohoo!');
} else {
	console.log('Nope, not red... =(');
}