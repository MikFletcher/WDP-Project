let postForm = document.getElementById("NoteForm")
if (postForm) postForm.addEventListener('submit',post)

function post(e){
    e.preventDefault()

    const post = {
        blogPost: document.getElementById("note").value
    }

    console.log(post)
}