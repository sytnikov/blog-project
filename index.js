const barIcon = document.getElementById("bar-icon");
const menu = document.getElementById("menu");

barIcon?.addEventListener("click", () => {
    if (menu?.className === "hidden") {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
});