"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBuyProduct = void 0;
const data_1 = require("../data");
function handleBuyProduct(chatId, data, username, bot) {
    try {
        const user = data_1.users.find((user) => user.username === username);
        const country = user === null || user === void 0 ? void 0 : user.country;
        const id = data.split("_")[1];
        console.log(id);
        const productInformation = data_1.products[country === null || country === void 0 ? void 0 : country.toUpperCase()].find((product) => product.id === Number(id));
        const keyboard = {
            inline_keyboard: [
                [{ text: `Pay with SOL`, callback_data: `PAY-WITH_SOL` }],
                [{ text: '❌ Cancel', callback_data: 'EXPLORE-OTHER-COUNTRY' }],
            ],
        };
        bot.sendMessage(chatId, `*Confirm your order*:\n\n*Product:*${productInformation === null || productInformation === void 0 ? void 0 : productInformation.name}\n\n*Value*:${productInformation === null || productInformation === void 0 ? void 0 : productInformation.prices}\n\nSelect option below to proceed.`, { reply_markup: keyboard, parse_mode: "Markdown" });
    }
    catch (err) {
        console.log(err.message);
    }
}
exports.handleBuyProduct = handleBuyProduct;
