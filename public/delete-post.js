// create a function to delete a post
async function deleteHandler(event){
    event.preventDefault();

    // call on id of post to delete
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    // create route that will delete the post
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            post_id: id
        }),
        header: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteHandler);