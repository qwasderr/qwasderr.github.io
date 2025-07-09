function includeHTML() {
  document.querySelectorAll('[data-include]').forEach(async (el) => {
    const file = el.getAttribute('data-include');
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Could not fetch ${file}`);
      const content = await res.text();
      el.innerHTML = content;
    } catch (err) {
      el.innerHTML = `<div style="color:red">Error loading ${file}</div>`;
    }
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);
