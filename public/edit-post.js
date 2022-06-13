// create a functon that edits the post
async function editHandler(event) {
    event.preventDefault();
    // call on title adn content
    const title = document.querySelector('input[name = "post-title]').value.trim();
    const content = document.querySelector('textarea[name = "content]').value.trim();

    // call on id
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
}