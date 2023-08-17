import kbot from "./kbot";
const form = document.querySelector("#botform");
const nom = document.querySelector("#nombre");
const div = document.querySelector("#answer")
const gener = document.querySelector("#genero");
const edad = document.querySelector("#edad");
form.addEventListener("submit", (event) =>
    {
        event.preventDefault();
        const kb = new kbot();
        div.innerHTML = "<p>" + "<b>" + kb.saludar(nom.value, gener.value, edad.value) + "</b>"+"<p>";
    });
