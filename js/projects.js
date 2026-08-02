registerLanguageCallback(loadProjects);


async function loadProjects(lang) {

    const response = await fetch("lang/projects.json");
    const projects = await response.json();

    const container = document.getElementById("projects-list");

    if (!container) return;


    container.innerHTML = projects.map(project => `

        <section class="project-card">

            <h3>
                ${project.title[lang]}
            </h3>


            <p>
                ${project.description[lang]}
            </p>


            <ul>

                <li>
                    <strong>${lang === "de" ? "Technologien:" : "Technologies:"}
</strong>

                    ${project.technologies[lang]}
                </li>


                <li>
                    <a href="${project.github}" target="_blank">
                        GitHub Repository
                    </a>
                </li>

            </ul>


        </section>

    `).join("");

}