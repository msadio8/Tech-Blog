const techloginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username-tech-login').value.trim();
    const password = document.querySelector('#password-tech-login').value.trim();

    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
};
const techLoginForm = document.querySelector('.tech-login-form');
if (techLoginForm) {
  techLoginForm.addEventListener('submit', techloginFormHandler);
}
  