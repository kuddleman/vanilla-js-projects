console.log('hello')

//get all passwords, current and new
//turn the node list into an array so I can apply forEach to the array:
let passwords = Array.prototype.slice.call(document.querySelectorAll('[ type="password" ]'))

let toggle = document.querySelector('#show-passwords')

//assign click event to toggle;

toggle.addEventListener('click', ( event ) => {
   // loop through passwords:
   // if box is checked, show text.  If not, hide password
   passwords.forEach( password => {
    if ( toggle.checked ) {
      password.type = 'text'
    } else {
      password.type = 'password'
    }
   })
     
   
})

