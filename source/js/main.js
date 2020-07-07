$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true, // Зацикливаем слайдер
    margin: 0, // Отступ от элемента справа в 50px
    nav: false, // Отключение навигации
    autoplay: true, // Автозапуск слайдера
    smartSpeed: 2000, // Время движения слайда
    autoplayTimeout: 4000,
    items: 1
  });
});
