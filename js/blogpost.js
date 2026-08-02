registerLanguageCallback(loadPost);

async function loadPost(lang) {

    let path = new URLSearchParams(location.search).get("post");

    if (!path) return;

    path = path.replace(/\/(en|de)\.md$/, `/${lang}.md`);

    const response = await fetch(path);
    const md = await response.text();

    const container = document.getElementById("content");

    if (!container) return;

    container.innerHTML = marked.parse(md);
}