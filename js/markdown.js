document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postFile = urlParams.get("post");

  if (!postFile) {
    document.getElementById("content").innerHTML = "<p>No post specified.</p>";
    return;
  }

  fetch(postFile)
    .then(response => {
      if (!response.ok) throw new Error("Post not found.");
      return response.text();
    })
    .then(md => {
      const html = marked.parse(md);
      document.getElementById("content").innerHTML = html;
      if (window.MathJax) {
        MathJax.typeset();
      }
    })
    .catch(error => {
      document.getElementById("content").innerHTML =
        `<p>Error loading post: ${error.message}</p>`;
    });
});
