"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleShowProducts = void 0;
const data_1 = require("../data");
function handleShowProducts(chatId, data, username, bot) {
    const countryInParams = data.split("_")[1];
    const countrySpecificProducts = data_1.products[countryInParams];
    const country = data_1.countries.find((country) => country.text.toLowerCase() === countryInParams.toLowerCase());
    if (countrySpecificProducts) {
        function createInlineKeyboard(countrySpecificProducts) {
            const keyboard = [];
            for (let i = 0; i < countrySpecificProducts.length; i += 2) {
                const buttonRow = [];
                for (let j = i; j < i + 2 && j < countrySpecificProducts.length; j++) {
                    const countryName = countrySpecificProducts[j].text;
                    const countryFlag = countrySpecificProducts[j].emoji;
                    buttonRow.push({
                        text: `${countrySpecificProducts[j].name}`,
                        callback_data: `SHOW-PRODUCT-INFORMATION_${countryInParams.toUpperCase()}/${countrySpecificProducts[j].id}`
                    });
                }
                keyboard.push(buttonRow);
            }
            return {
                inline_keyboard: keyboard
            };
        }
        const inlineKeyboard = createInlineKeyboard(countrySpecificProducts);
        bot.sendMessage(chatId, `Country: ${country === null || country === void 0 ? void 0 : country.text} ${country === null || country === void 0 ? void 0 : country.emoji}\nHere are the products:`, { reply_markup: inlineKeyboard });
    }
    else {
        bot.sendMessage(chatId, `No Products Available Right Now`);
    }
}
exports.handleShowProducts = handleShowProducts;
