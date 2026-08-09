const menuBtn = document.getElementById("menuBtn");

const sidebar = document.querySelector(".sidebar");

const main = document.querySelector(".main-content");

menuBtn.onclick = () => {

    sidebar.classList.toggle("close");

    main.classList.toggle("expand");

};