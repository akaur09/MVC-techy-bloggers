// create a function to handle comments
async function commentHandler(event){
    event.preventDefault();
    // call on test adn post id
    const comment_text = document.querySelector('input[name = "comment-body"]').value.trim();
    // id is set to -1 due to array starting position being 0
    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (comment_text){
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                comment_text,
                post_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
            document.querySelector('#comment-form').style.display = "block";
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentHandler);