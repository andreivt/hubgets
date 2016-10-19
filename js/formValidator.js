'use strict';

var submitButton = document.getElementById('submit-form');

submitButton.addEventListener('click', function(e) {
    e.preventDefault();

    var emailField = document.getElementById('email');
    var parentNode = emailField.parentNode;
    var iconElement = emailField.parentNode.querySelector('span');

    if (validateEmail(emailField.value)) {
        removeClassFromElement(' has-error', parentNode);
        removeClassFromElement(' has-feedback', parentNode);
        emailField.style.backgroundColor = 'initial';
        document.getElementById('emailInputStatus').className = 'sr-only';
        iconElement.className = iconElement.className.replace(' sr-only', '');
        iconElement.className += ' sr-only';
    } else {
        addClassToElement(' has-error', parentNode);
        addClassToElement(' has-feedback', parentNode);
        emailField.style.backgroundColor = '#fde7e9';
        document.getElementById('emailInputStatus').className = 'input-error';
        iconElement.className = iconElement.className.replace(' sr-only', '');
    }
})

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function removeClassFromElement(className, element) {
    element.className = element.className.replace(className, '');
}

function addClassToElement(className, element) {
    removeClassFromElement(className, element);
    element.className += className;
}
