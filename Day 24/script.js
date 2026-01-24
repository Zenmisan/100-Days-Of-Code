// 1. SELECT ELEMENTS
const loader = document.getElementById('loader');
const content = document.getElementById('content');
const errorMsg = document.getElementById('error-msg');
const postsContainer = document.getElementById('posts-container');

// Elements to fill
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const websiteEl = document.getElementById('website');

// 2. THE ASYNC FUNCTION
async function loadUserProfile(userId) {
    try {
        // A. START LOADING
        // Ensure loader is visible, content is hidden
        loader.classList.remove('hidden');
        content.classList.add('hidden');
        errorMsg.classList.add('hidden');

        // B. FETCH DATA (Parallel Execution)
        
        const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const postsPromise = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);


        // If either fails, it jumps to catch().
        const [userResponse, postsResponse] = await Promise.all([userPromise, postsPromise]);

        // Check if APIs are happy (Status 200 OK)
        if (!userResponse.ok || !postsResponse.ok) {
            throw new Error("Failed to fetch data from server.");
        }

        // Convert to JSON
        const userData = await userResponse.json();
        const postsData = await postsResponse.json();

        // C. RENDER DATA (Success State)
        renderProfile(userData);
        renderPosts(postsData);

        // Hide Loader, Show Content
        loader.classList.add('hidden');
        content.classList.remove('hidden');

    } catch (err) {
        // D. HANDLE ERRORS (Failure State)
        console.error(err);
        loader.classList.add('hidden');
        errorMsg.classList.remove('hidden');
        errorMsg.innerText = "⚠️ Error: " + err.message;
    }
}

// 3. HELPER FUNCTIONS (Keep code clean)
function renderProfile(user) {
    nameEl.innerText = user.name;
    emailEl.innerText = user.email;
    websiteEl.innerText = user.website;
}

function renderPosts(posts) {
    postsContainer.innerHTML = ""; // Clear
    // Take only the first 3 posts (slice)
    posts.slice(0, 3).forEach(post => {
        const postHTML = `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `;
        postsContainer.innerHTML += postHTML;
    });
}

// 4. INIT
// Load User ID #1
loadUserProfile(1);