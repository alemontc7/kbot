import kbot from "./kbot";
const form = document.querySelector("#botform");
const div = document.querySelector("#answer")
form.addEventListener("submit", (event) =>
    {
        event.preventDefault();
        const kb = new kbot();
        div.innerHTML = "<p>" + "<b>" + kb.saludar() + "</b>"+"<p>";
    });
