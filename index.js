const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_PA_TOKEN)

const handleHello = (ctx) => {
  ctx.reply(`Hey ${ctx.message.from.first_name}, How are you`)
}

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => handleHello(ctx))
bot.hears('Hi', (ctx) => handleHello(ctx))
bot.hears('Hey', (ctx) => handleHello(ctx))
bot.hears('hey', (ctx) => handleHello(ctx))
bot.hears('Hello', (ctx) => handleHello(ctx))
bot.hears('hello', (ctx) => handleHello(ctx))

bot.launch()