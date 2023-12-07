function toggleBurger() {
    const header = document.querySelector('header');
    const burger = document.querySelector(".burger-menu");
    burger.classList.toggle("burger-open");
    header.classList.toggle('open_menu')
}