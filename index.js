const TelegramBot = require('node-telegram-bot-api')

// replace the value below with the Telegram token you receive from @BotFather
const token = '7998383392:AAGCFyPsqQEC9mMPBzCpqSHQFS170HBbq6I'
const webAppUrl = 'https://prettier.io/docs/cli'
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true })

bot.on('message', async msg => {
  const chatId = msg.chat.id
  const text = msg.text

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Нажмите кнопку ниже', {
      reply_markup: {
        inline_keyboard: [[{ text: 'Заполоните форму', web_app: { url: webAppUrl } }]]
      }
    })
  }

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received рррр your message')
})
