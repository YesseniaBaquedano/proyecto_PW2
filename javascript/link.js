document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".menu a");

    
    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") currentPage = "index.html";

    links.forEach(link => {
        const linkHref = link.getAttribute("href");
        // Solo marcar activo si es exactamente la misma página
        if (linkHref === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
