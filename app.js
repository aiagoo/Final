// Мобильное меню
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// Кнопка Booking
const bookingBtn = document.querySelector('.navbar__btn .button');

bookingBtn.addEventListener('click', function (e) {
  e.preventDefault(); // отменяем переход по ссылке

  // Показываем индикатор
  bookingBtn.textContent = 'Loading...';
  bookingBtn.style.pointerEvents = 'none'; // блокируем повторное нажатие
  bookingBtn.style.opacity = '0.7';

  // Через 2 секунды переход
  setTimeout(() => {
    window.location.href = 'booking.html';
}, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
  const bookingBtn = document.getElementById("bookingBtn");
  const loader = document.getElementById("pageLoader");

  // Убедимся, что при загрузке лоадер всегда скрыт
  loader.classList.add("hidden");

  bookingBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Остановим переход по ссылке

    loader.classList.remove("hidden"); // Покажем лоадер

    setTimeout(() => {
      loader.classList.add("hidden"); // Спрячем снова
      window.location.href = "/";     // Выполним переход
    }, 2000);
  });
});
