async function fetchPosts(page) {
    const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

// Test the function
fetchPosts(1).then(posts => {
    console.log('Posts on page 1:', posts);
});

fetchPosts(2).then(posts => {
    console.log('Posts on page 2:', posts);
});