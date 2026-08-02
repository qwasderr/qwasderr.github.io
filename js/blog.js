registerLanguageCallback(loadPosts);

async function loadPosts(lang) {

    const response = await fetch("lang/posts.json");
    const posts = await response.json();

    const container = document.getElementById("blog-list");

    if (!container) return;

    container.innerHTML = posts.map(post => `
        <article class="blog-post-preview">
            <a href="blogpost.html?post=${post.file[lang]}">
                <strong>${post.title[lang]}</strong>
            </a>

            <time datetime="${post.date}">
                ${post.date}
            </time>
        </article>
    `).join("");
}