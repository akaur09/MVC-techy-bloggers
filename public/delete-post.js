// create a function to delete a post
async function deleteHandler(event){
    event.preventDefault();

    // call on id of post to delete
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];
}