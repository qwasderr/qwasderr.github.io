async function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");

  for (const el of elements) {
    const file = el.dataset.include;

    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Could not fetch ${file}`);

      el.innerHTML = await res.text();

    } catch (err) {
      el.innerHTML = `<div style="color:red">Error loading ${file}</div>`;
    }
  }

  if (typeof initLanguage === "function") {
    initLanguage();
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await includeHTML();
});