document.addEventListener('DOMContentLoaded', () => {
    const postscontainer = document.querySelector('.posts-container')
    async function fetchPost() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log(data);
            postscontainer.innerHTML = ''
            //display posts
            data.forEach((post) => {
const postElement=createPost(post)
postscontainer.appendChild(postElement)
            })
        }
        catch (err) {
            console.log(err)
            postscontainer.innerHTML='<p>Error loading posts. Please try again later.</p>'
        }
    }
    //create function html element
    function createPost(post) {
        const article = document.createElement('article')
        article.className = 'post-card'

        const title = document.createElement('h2')
        title.className = 'post-title'
        title.textContent = post.title

        const body = document.createElement('p')
        body.className = 'post-body'
        body.textContent = post.body

         article.appendChild(title)
        article.appendChild(body)
        postscontainer.appendChild(article)
        return article;

    }
    fetchPost();
})
