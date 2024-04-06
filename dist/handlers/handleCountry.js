"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCountry = void 0;
const data_1 = require("../data");
function handleCountry(chatId, data, username, bot) {
    const country = data.split("_")[1];
    const keyboard = {
        inline_keyboard: [
            [{ text: `${country} Products`, callback_data: `SHOW-PRODUCTS_${country}` }],
            [{ text: 'Explore other country', callback_data: 'EXPLORE-OTHER-COUNTRY' }],
        ],
    };
    data_1.users.push({
        "username": username,
        "country": country
    });
    bot.sendMessage(chatId, `Welcome, ${username}! Your Country is ${country}`, { reply_markup: keyboard });
}
exports.handleCountry = handleCountry;
