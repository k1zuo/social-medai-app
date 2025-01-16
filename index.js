// Fetch posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        // Fetch users
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                // Get the container for posts
                const postsContainer = document.getElementById('posts-container');

                // Display the first 10 posts
                for (let i = 0; i < 10; i++) {
                    const post = posts[i];
                    const user = users.find(u => u.id === post.userId);

                    // Create a div for the post
                    const postDiv = document.createElement('div');
                    postDiv.className = 'post';

                    // Add post content
                    postDiv.innerHTML = `
                        <h2>${post.title}</h2>
                        <p>By: ${user.name} (${user.email})</p>
                        <p>${post.body}</p>
                    `;

                    // Append the post to the container
                    postsContainer.appendChild(postDiv);
                }
            });
    })
    .catch(error => console.error('Error:', error));
