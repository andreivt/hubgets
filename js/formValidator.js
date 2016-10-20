'use strict';

var form = document.getElementsByClassName('form-horizontal')[0];
var formFields = {
    fname   : document.getElementById("fname"),
    lname   : document.getElementById("lname"),
    company : document.getElementById("company"),
    email   : document.getElementById("email"),
};

form.addEventListener('change', function(e){
    validateFields();
})
form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateFields();
})
/**
 * Checks which fields are(not) empty
 * @param  {object} object Contains form inputs refs
 * @return {object}        Contains IDs of empty/filled fields
 */
function checkEmptyFields(object) {
    var empty = [],
        filled = [];
    for (var k in object) {
        if (object.hasOwnProperty(k)) {
            if(object[k].value) {
              if(object[k].id == 'email'){
                validateEmail(object[k].value) ? filled.push(object[k].id) : empty.push(object[k].id)
              }else{
                filled.push(object[k].id)
              }
            }else{
              empty.push(object[k].id)
            }
        }
    }
    return {
        empty: empty,
        filled: filled
    };
}
/**
 * Applies coresponding effect on filled/empty input fields
 */
function validateFields() {
    var response = checkEmptyFields(formFields);
    var emptyFields = response.empty;
    var filledFields = response.filled;
    unsetFields(filledFields);
    setFields(emptyFields);
}
/**
 * Removes error effect from given input fields
 * @param {array} filledFields Given fields
 */
function unsetFields(filledFields) {
  if (filledFields.length) {
      for (let i = 0; i < filledFields.length; i++) {
          removeClassOfElement(' has-error', formFields[filledFields[i]].parentNode);
          removeClassOfElement(' has-feedback', formFields[filledFields[i]].parentNode);
          var iconElement = formFields[filledFields[i]].parentNode.querySelector('span');
          addClassToElement(' sr-only', iconElement);
          formFields[filledFields[i]].style.backgroundColor = 'initial';
          formFields[filledFields[i]].parentNode.lastElementChild.className = 'sr-only';
      }
  }
}
/**
 * Sets error effect on given fields
 * @param {arraay} emptyFields Given fields
 */
function setFields(emptyFields) {
  if (emptyFields.length) {
      for (let i = 0; i < emptyFields.length; i++) {
          addClassToElement(' has-error', formFields[emptyFields[i]].parentNode);
          addClassToElement(' has-feedback', formFields[emptyFields[i]].parentNode);
          var iconElement = formFields[emptyFields[i]].parentNode.querySelector('span');
          removeClassOfElement(' sr-only', iconElement);
          formFields[emptyFields[i]].style.backgroundColor = '#fde7e9';
          formFields[emptyFields[i]].parentNode.lastElementChild.className = 'input-error';
      }
  }
}
/**
 * Checks if given string is a valid email
 * @param  {string} email Given email
 * @return {boolean}      True if email is valid, otherwise false
 */
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
/**
 * Removes given className of an element
 * @param  {string} className className to be removed
 * @param  {element} element  Element from which the className will be removed
 */
function removeClassOfElement(className, element) {
    element.className = element.className.replace(className, '');
}
/**
 * Adds given className to an element
 * @param {string} className className to be added
 * @param {element} element   Element
 */
function addClassToElement(className, element) {
    removeClassOfElement(className, element);
    element.className += className;
}
