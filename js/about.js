async function loadAboutContent(){

const lang = localStorage.getItem("language") || "en";

const response = await fetch(`lang/${lang}/about.json`);
const data = await response.json();


document.getElementById("education-list").innerHTML =
data.education.map(x=>`<li>${x}</li>`).join("");

document.getElementById("languages-list").innerHTML =
data.languages_list.map(x=>`<li>${x}</li>`).join("");

document.getElementById("hobbies-list").innerHTML =
data.hobbies_list.map(x=>`<li>${x}</li>`).join("");


const volunteering = document.getElementById("volunteering-list");

volunteering.innerHTML = data.volunteering.map((item, index)=> {

    if(index === 0){
        return `
        <li>
          <a href="https://drive.google.com/file/d/1cqyiX0L4L7QIgn-P-1FNIMv9DVOf781O/view">
            <strong>${item.title}</strong> – ${item.description}
          </a>
        </li>`;
    }

    return `
    <li>
      <strong>${item.title}</strong> – ${item.description}<br>

      <a href="http://youtube.com/watch?v=LZlG-3UcNSg&t">
        ${item.events[0]}
      </a><br>

      <a href="https://www.youtube.com/watch?v=J_x8MwQ8_eQ">
        ${item.events[1]}
      </a>
    </li>`;
}).join("");


}


registerLanguageCallback(loadAboutContent);