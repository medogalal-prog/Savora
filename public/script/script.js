const btn = document.querySelector(".btn-menu-toggle");
const menu = document.getElementById('navbar-cta');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


const btnEvent = document.getElementById("btn-event");

btnEvent.addEventListener("click", (e) => {
  e.preventDefault();
  alert("🎉 Your reservation has been confirmed!");
});