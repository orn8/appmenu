document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("app-menu-button");
    const menuGrid = document.getElementById("app-menu-grid");

    menuButton.addEventListener("click", () => {
        menuGrid.classList.toggle("show");
    });

    const appItems = document.querySelectorAll(".app-menu-item");

    appItems.forEach((item) => {
        item.addEventListener("click", () => {
            const link = item.dataset.link;
            if (link) {
                window.open(link, "_blank");
            }
        });
    });
});