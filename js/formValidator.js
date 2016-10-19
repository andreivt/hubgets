'use strict';

var submitButton = document.querySelector('.section-middle .form-group:last-child button');

submitButton.addEventListener('click', function(e){
  e.preventDefault();

  var emailField = document.getElementById('email');
  if(validateEmail(emailField.value)){
    removeClassFromParentElement(' has-error', emailField);
    removeClassFromParentElement(' has-feedback', emailField);
    emailField.style.backgroundColor = 'initial';
    document.getElementById('emailInputStatus').className = 'sr-only';
    emailField.parentNode.querySelector('span').className = emailField.parentNode.querySelector('span').className.replace(' sr-only', '');
    emailField.parentNode.querySelector('span').className += ' sr-only';
  }else{
    addClassToParentElement(' has-error', emailField);
    addClassToParentElement(' has-feedback', emailField);
    emailField.style.backgroundColor = '#fde7e9';
    document.getElementById('emailInputStatus').className = 'input-error';
    emailField.parentNode.querySelector('span').className = emailField.parentNode.querySelector('span').className.replace(' sr-only', '');  }
})


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function removeClassFromParentElement(className, element) {
  element.parentNode.className = element.parentNode.className.replace(className, '');
}

function addClassToParentElement(className, element) {
  removeClassFromParentElement(className, element);
  element.parentNode.className += className;
}
