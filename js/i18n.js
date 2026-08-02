let languageCallbacks = [];

function registerLanguageCallback(callback) {
    languageCallbacks.push(callback);
}

async function loadLanguage(lang) {
    const response = await fetch(`lang/${lang}.json`);
    const translations = await response.json();

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (translations[key]) {
            element.textContent = translations[key];
        }
    });

    localStorage.setItem("language", lang);

    languageCallbacks.forEach(callback => callback(lang)); 
}


function initLanguage() {
    const select = document.getElementById("language");

    const lang = localStorage.getItem("language") || "en";

    if (select) {
        select.value = lang;

        select.addEventListener("change", e => {
            loadLanguage(e.target.value);
        });
    }

    loadLanguage(lang);
}