// create a function to create a sign up form
async function signupHandler(event){
    event.preventDefault();

    const username =document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password){
        const response = await fetch('/api/users', {
            method: "POST",
            dody: JSON.stringify({
                username,
                password
            }),
            headers:{'Contet-Type': 'application/json'}
        });
        if (response.ok) {
            console.log('yay');
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#sign-up').addEventListener('submit', signupHandler);
