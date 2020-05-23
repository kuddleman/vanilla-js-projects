console.log("Hello!")




function handleClick() {
  let typeText = document.querySelector('#password')
  
  if (typeText.type === "password") {
    typeText.type = 'text';
  } else {
    typeText.type = 'password'
  }
}
