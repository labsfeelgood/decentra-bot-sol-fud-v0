"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exploreOtherCountry = void 0;
const data_1 = require("../data");
function exploreOtherCountry(chatId, data, username, bot) {
    try {
        const keyboard = {
            inline_keyboard: data_1.countries.map((country) => [{
                    text: country,
                    callback_data: `SHOW-PRODUCTS_${country}`
                }])
        };
        bot.sendMessage(chatId, "Select a country to see the available products.", { reply_markup: keyboard });
    }
    catch (err) {
        console.log(err.message);
    }
}
exports.exploreOtherCountry = exploreOtherCountry;
