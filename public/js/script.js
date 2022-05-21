let btnMenu = document.getElementById("btn-menu");
let sidebar = document.getElementById("sidebar");
let btnClose = document.getElementById("btn-close");

btnMenu.onclick = function(e) {
    if (!sidebar.classList.contains("active-sidebar")) {
        sidebar.classList.add("active-sidebar");
        sidebar.classList.remove("inactive-sidebar");
        sidebar.classList.remove("d-none");
    }
};

btnClose.onclick = function(e) {
    if (sidebar.classList.contains("active-sidebar")) {
        sidebar.classList.remove("active-sidebar");
        sidebar.classList.add("inactive-sidebar");
    }
};