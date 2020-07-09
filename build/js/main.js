$(document).ready(function () {
  $('.header__down').owlCarousel({
    loop: true, // Зацикливаем слайдер
    margin: 0, // Отступ от элемента справа в 50px
    nav: false, // Отключение навигации
    autoplay: true, // Автозапуск слайдера
    smartSpeed: 1000, // Время движения слайда
    autoplayTimeout: 2000, // Время смены слайда
    items: 1,
    touchDrag: true
  });
});

$(window).resize(function () { // запускаем при каждом ресайзе окна
  checkMedia();
});

function checkMedia() {
  if (window.matchMedia('(max-width: 768px)').matches) {
    $('.popular__gallery').owlCarousel({
      loop: true, // Зацикливаем слайдер
      margin: 0, // Отступ от элемента справа в 50px
      nav: false, // Отключение навигации
      autoplay: true, // Автозапуск слайдера
      smartSpeed: 1000, // Время движения слайда
      autoplayTimeout: 2000, // Время смены слайда
      items: 1,
      touchDrag: true
    });
  }
}
