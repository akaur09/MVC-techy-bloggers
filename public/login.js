// create a function to handle login
async function loginFormHandler(event){
    event.prventDefault();
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // cofirm username and password match
    if (username && password){
        const response = await fetch('/appi/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok){
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);