const submitButton = document.getElementById('submitButton');
const form = document.getElementById('form') 
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const inputs = document.querySelectorAll('.__form-control');
const message = document.getElementById('message');

var css = '.__form-control:invalid{ border: 1px solid red }';
var style = document.createElement('style');

let isValid = false;
let passwordsMatch = false;

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

function validateForm(){
    isValid = form.checkValidity();
    
    if(!isValid){
        message.textContent = "Please fill out all fields."
        message.classList.add('alert', 'alert-danger')

        return;
    }


    if (password1El.value === password2El.value) {
        // If they match, set value to true and borders to green
        passwordsMatch = true;
        password1El.style.borderColor = '#000';
        password2El.style.borderColor = '#000';
      } else {
        // If they don't match, border color of input to red, change message
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.classList.add('alert', 'alert-danger')
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
      }
      // If form is valid and passwords match
      if (isValid && passwordsMatch) {
        // Style main message for success
        message.textContent = 'Successfully Registered!';
        message.classList.remove('alert', 'alert-danger')
        message.classList.add('alert', 'alert-success')
        messageContainer.style.borderColor = 'green';
      }

}


function submitForm(e){
    e.preventDefault();

    validateForm();

    inputs.forEach(btn => {
        btn.appendChild(style);
    })


}


submitButton.addEventListener('click', submitForm)