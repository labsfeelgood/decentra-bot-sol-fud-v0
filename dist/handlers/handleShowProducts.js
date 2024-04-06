"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleShowProducts = void 0;
const data_1 = require("../data");
function handleShowProducts(chatId, data, username, bot) {
    const country = data.split("_")[1];
    const countrySpecificProducts = data_1.products[country];
    const keyboard = {
        inline_keyboard: countrySpecificProducts.map(product => [{
                text: product.name,
                callback_data: `SHOW-PRODUCT-INFORMATION_${product.id}`
            }])
    };
    bot.sendMessage(chatId, `Country ${country}\nHere are the products:`, { reply_markup: keyboard });
}
exports.handleShowProducts = handleShowProducts;
