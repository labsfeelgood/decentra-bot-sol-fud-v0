"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCountry = void 0;
const data_1 = require("../data");
function handleCountry(chatId, data, firstName, bot, username) {
    const countryFromParams = data.split("_")[1];
    const country = data_1.countries.find((country) => country.text.toLowerCase() === countryFromParams.toLowerCase());
    const keyboard = {
        inline_keyboard: [
            [{ text: `${country === null || country === void 0 ? void 0 : country.emoji} ${country === null || country === void 0 ? void 0 : country.text} Products`, callback_data: `SHOW-PRODUCTS_${country === null || country === void 0 ? void 0 : country.text.toUpperCase()}` }, { text: '🔎 Explore other country', callback_data: 'EXPLORE-OTHER-COUNTRY_' }],
            [{ text: "🤝 Become an Affiliator", callback_data: 'BECOME-AFFILIATOR_' }],
        ],
    };
    data_1.users.push({
        "username": username,
        "country": country === null || country === void 0 ? void 0 : country.text
    });
    bot.sendMessage(chatId, `Welcome, ${firstName}! Your Country is ${country === null || country === void 0 ? void 0 : country.text}`, { reply_markup: keyboard });
}
exports.handleCountry = handleCountry;
