// create a function to add a post
async function addpostHandler(event) {
    event.preventDefault();
    // call on content and title
    const content = document.querySelector('textarea[name= "content"]').value;
    const title = document.querySelector('input[name = "post-title"]')
}