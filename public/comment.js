// create a function to handle comments
async function commentHandler(event){
    event.preventDefault();
    // call on test adn post id
    const comment_text = document.querySelector('input[name = "comment-body"]').value.trim();
    // id is set to -1 due to array starting position being 0
    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    
}