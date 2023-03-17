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

    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'block';
  } else {
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none';
  }
});
