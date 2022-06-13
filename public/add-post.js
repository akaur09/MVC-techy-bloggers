// create a function to add a post
async function addpostHandler(event) {
    event.preventDefault();
    // call on content and title
    const content = document.querySelector('textarea[name= "content"]').value;
    const title = document.querySelector('input[name = "post-title"]').value;

    // create a route for posts
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'applicaiton/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#add-post-form').addEventListener('submit', addpostHandler);