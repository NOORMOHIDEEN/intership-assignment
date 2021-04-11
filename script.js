var myInput = document.getElementById("psw");
var number = document.getElementById("number");
var length = document.getElementById("length");
var letter = document.getElementById("letter");
var space = document.getElementById("space");

const visibilityToggle = document.querySelector(' .visibility');
const input = document.querySelector('.container input');
var psw = true;
visibilityToggle.addEventListener('click' , function() {
    if(psw) {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type' , 'password');
    }
    psw = !password;
});


// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {  
  
  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  //validate letter
  var letters = /[A-z]/g;
  if (myInput.value.match(letters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  //validate space
  if ( myInput.value.match(/[^a-zA-Z0-9\-\/]/)) {
    space.classList.remove("invalid");
    space.classList.add("valid");
  } else {
    space.classList.remove("valid");
    space.classList.add("invalid");
  }
}