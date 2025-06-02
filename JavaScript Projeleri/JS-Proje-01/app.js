const panels = document.querySelectorAll(".panel");

panels.forEach(panels => {
    panels.addEventListener("click", () => {
        removeActive();
        panels.classList.add("active");
    })
}); 

function removeActive() {
    panels.forEach(panels => {
        panels.classList.remove("active");
    })
};
