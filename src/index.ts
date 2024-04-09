import express from 'express';
import bodyParser from 'body-parser';
import TelegramBot, { CallbackQuery, InlineKeyboardButton } from 'node-telegram-bot-api';
import { users, countries } from './data';
import { usernameExists, getCountry } from './utils';
import {handleCountry} from "./handlers/handleCountry"
import {handleShowProducts} from "./handlers/handleShowProducts"
import  {handleShowProductInformation} from "./handlers/handleShowProductInformation"
import { handleBuyProduct } from "./handlers/handleBuyProduct"
import { handlePay } from "./handlers/handlePay"
import { exploreOtherCountry } from "./handlers/exploreOtherCountryHandler"
import { handleAffiliator } from './handlers/handleAffiliator';

import { config } from 'dotenv';
config();

const TOKEN = process.env.BOT_TOKEN!;
const bot = new TelegramBot(TOKEN);

const app = express();

app.use(bodyParser.json());

app.post(`/bot${TOKEN}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
});

const PORT = process.env.PORT || 8443;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

bot.setWebHook(`https://decentra-bot-sol-fud-v0.onrender.com/bot${TOKEN}`);

bot.onText(/\/start/, async (msg) => {
    try {
        const chatId = msg.chat.id;
        const username = msg.from?.username || '';
        if (usernameExists(username)) {
            const data = getCountry(username);
            const country = data?.country;
            const countryData = countries.find(c => c.text.toLowerCase() === country?.toLowerCase());
            const emoji = countryData?.emoji;
            const keyboard: InlineKeyboardButton[][] = [
                [{ text: `${emoji} ${country} Products`, callback_data: `SHOW-PRODUCTS_${country?.toUpperCase()}` }, { text: '🔎 Explore other country', callback_data: 'EXPLORE-OTHER-COUNTRY_' }],
                [{ text: '🤝 Become an Affiliator', callback_data: 'BECOME-AFFILIATOR_' }],
            ];
            bot.sendMessage(chatId, `Welcome back, ${msg.from?.first_name}! Your Country is ${country}`, { reply_markup: { inline_keyboard: keyboard } });
        } else {
            const inlineKeyboard = createInlineKeyboard(countries);
            bot.sendMessage(chatId, 'Select a country to see the available products.', { reply_markup: { inline_keyboard: inlineKeyboard } });
        }
    } catch (err) {
        console.error(err);
    }
});

function createInlineKeyboard(countries: any[]): InlineKeyboardButton[][] {
    const keyboard: InlineKeyboardButton[][] = [];
    for (let i = 0; i < countries.length; i += 2) {
        const buttonRow: InlineKeyboardButton[] = [];
        for (let j = i; j < i + 2 && j < countries.length; j++) {
            const countryName = countries[j].text;
            const countryFlag = countries[j].emoji;
            buttonRow.push({
                text: `${countryFlag} ${countryName}`,
                callback_data: `CHOOSE-COUNTRY_${countryName.toUpperCase()}`
            });
        }
        keyboard.push(buttonRow);
    }
    return keyboard;
}

bot.on('callback_query', async (query: CallbackQuery) => {
    try {
        const messageId = query.message?.message_id;
        const chatId = query.message?.chat.id;
        const username = query.from.username;
        const firstName = query.from.first_name;
        const data = query.data;
        const task = data?.split("_")[0];
        switch (task) {
            case "CHOOSE-COUNTRY":
                fadeOutMessage(chatId!, messageId!);
                handleCountry(chatId!, data!, firstName!, bot, username!);
                break;
            case "SHOW-PRODUCTS":
                fadeOutMessage(chatId!, messageId!);
                handleShowProducts(chatId!, data!, username!, bot);
                break;
            case "SHOW-PRODUCT-INFORMATION":
                fadeOutMessage(chatId!, messageId!);
                handleShowProductInformation(chatId!, data!, username!, bot);
                break;
            case "BUY-PRODUCT":
                fadeOutMessage(chatId!, messageId!);
                handleBuyProduct(chatId!, data!, username!, bot!);
                break;
            case "PAY-WITH":
                fadeOutMessage(chatId!, messageId!);
                handlePay(chatId!, data!, username!, bot!);
                break;
            case "EXPLORE-OTHER-COUNTRY":
                fadeOutMessage(chatId!, messageId!);
                exploreOtherCountry(chatId!, data!, username!, bot!)
                break;
            case "BECOME-AFFILIATOR":
                fadeOutMessage(chatId!, messageId!);
                handleAffiliator(chatId!, data!, username!, bot!)
                break;
            default:
                break;
        }
    } catch (err) {
        console.error(err);
    }
});

function fadeOutMessage(chatId: number, messageId: number) {
    bot.deleteMessage(chatId, messageId);
}
