function openBurger(id_bar, id_burger) {
  var bar = document.getElementById(id_bar);
  var burger = document.getElementById(id_burger)
  bar.classList.toggle("is-active");
  burger.classList.toggle("is-active");
}
