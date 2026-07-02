document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const time = document.getElementById('time').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (!name || !phone) {
      alert('Пожалуйста, заполните имя и телефон/Telegram.');
      return;
    }

    // Формируем текст сообщения (с переносами строк)
    let message = `Здравствуйте! Меня зовут ${name}.`;
    message += `\nТелефон для связи: ${phone}.`;
    if (time) message += `\nУдобное время для связи: ${time}.`;
    if (comment) message += `\nКомментарий: ${comment}.`;
    message += `\n\nЯ хочу записаться на консультацию.`;

    // Кодируем текст для URL
    const encodedText = encodeURIComponent(message);

    // Ваша ссылка на профиль в MAX
    const maxUrl = `https://max.ru/u/f9LHodD0cOK3kPYP1eFMry5iXxbmHIdhM9AiKS92dunD4KsR73NZd8GhKCU?text=${encodedText}`;

    // Открываем MAX в новой вкладке
    window.open(maxUrl, '_blank');

    alert('Спасибо! Перейдите в MAX и отправьте сообщение. Я свяжусь с вами в ближайшее время.');
    this.reset();
  });
