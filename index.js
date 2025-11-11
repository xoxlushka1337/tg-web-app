const TelegramBot = require('node-telegram-bot-api')

// replace the value below with the Telegram token you receive from @BotFather
const token = '7998383392:AAGCFyPsqQEC9mMPBzCpqSHQFS170HBbq6I'
const webAppUrl = 'https://tgweb-app1.netlify.app'
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true })

bot.on('message', async msg => {
  const chatId = msg.chat.id
  const text = msg.text

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Нажмите для просмотра формы', {
      reply_markup: {
        keyboard: [[{ text: 'Заполните форму', web_app: { url: webAppUrl + '/form' } }]],
        resize_keyboard: true, // чтобы клавиатура была компактной
        one_time_keyboard: false
      }
    })

    await bot.sendMessage(chatId, 'Нажмите кнопку ниже', {
      reply_markup: {
        inline_keyboard: [[{ text: 'Заполоните форму', web_app: { url: webAppUrl } }]]
      }
    })
  }

  if (msg?.web_app_data?.data) {
    try {
      const data = JSON.parse(msg?.web_app_data?.data)
      console.log(data)

      await bot.sendMessage(chatId, 'Име: ' + data?.name)
      await bot.sendMessage(chatId, 'Ваш город: ' + data?.country)
    } catch (e) {
      console.log(e)
    }
  }
})
