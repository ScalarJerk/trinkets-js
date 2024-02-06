const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const group = input.parentElement;
    group.className = 'group-error';
    const small = group.querySelector('small');
    small.innerText = message;
  }
  
  // Show success outline
  function showSuccess(input) {
    const group = input.parentElement;
    group.className = 'group-success';
  }

  // Get fieldname
function getFieldName(input) {
    // access id of corresponding input box.
    // convert first letter of id to uppercase.
    // slice id name from 1st index and concat with uppercase letter

    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

// Check required fields
function checkRequired(inputArr) {
    let exists = true;
    inputArr.forEach(function(input) {
      if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
        exists = false;
      } else {
        showSuccess(input);
      }
    });
  
    return exists;
  }