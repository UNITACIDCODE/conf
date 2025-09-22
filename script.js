// Задай имя бота и метку источника
const BOT_NAME = 'your_bot_name'; // без @
const START_PAYLOAD = 'landing';

const deeplink = `https://t.me/${BOT_NAME}?start=${encodeURIComponent(START_PAYLOAD)}`;
for (const id of ['cta-register','cta-register-bottom','cta-participate']) {
  const el = document.getElementById(id);
  if (el) el.href = deeplink;
}
