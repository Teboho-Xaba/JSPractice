const button = document.querySelector('h1')

button.addEventListener("click", () => {
    document.body.style.backgroundColor = "#ff0000";
    button.innerHTML = "Good Morning";
})