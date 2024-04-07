"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exploreOtherCountry = void 0;
const data_1 = require("../data");
function exploreOtherCountry(chatId, data, username, bot) {
    try {
        function createInlineKeyboard(countries) {
            const keyboard = [];
            for (let i = 0; i < countries.length; i += 2) {
                const buttonRow = [];
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
            return {
                inline_keyboard: keyboard
            };
        }
        const inlineKeyboard = createInlineKeyboard(data_1.countries);
        bot.sendMessage(chatId, "Select a country to see the available products.", { reply_markup: inlineKeyboard });
    }
    catch (err) {
        console.log(err.message);
    }
}
exports.exploreOtherCountry = exploreOtherCountry;
