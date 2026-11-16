$(document).ready(function () {
  const $cards = $('.game-card');

  $cards.hide().each(function (index) {
    $(this).delay(80 * index).fadeIn(350);
  });

  const urlPattern = /^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/.*)?$/;

  $cards.on('click', function (e) {
    const targetUrl = $(this).attr('href');

    if (!targetUrl || !urlPattern.test(targetUrl)) {
      e.preventDefault();
      alert('Помилка: некоректне посилання на гру.');
    }
  });
});