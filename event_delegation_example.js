// * A better approach: Event Delegation
// * Listen for clicks on the entire window
// */


window.addEventListener('click', function (event) {

 // If the clicked element has the `.click-me` class, it's a match!
 if (event.target.matches('.click-me')) {
   console.log('A button as clicked.');
 } else {
   console.log('Not a match!');
 }

}, false);