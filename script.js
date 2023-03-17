function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

document.querySelector('.open').addEventListener('click', openNav);
document.querySelector('.close').addEventListener('click', closeNav);

// Validate contact form

const form = document.getElementById('myForm');
const emailField = document.getElementById('useremail');

form.addEventListener('submit', (event) => {
  if (emailField.value !== emailField.value.toLowerCase()) {
    event.preventDefault();
    const error = document.createElement('div');
    error.innerText = 'Email must be in lowercase';
    error.style.color = 'red';
    const submitButton = document.getElementById('submit');
    submitButton.parentNode.insertBefore(error, submitButton.nextSibling);
  }
});
