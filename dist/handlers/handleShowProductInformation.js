"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleShowProductInformation = void 0;
const data_1 = require("../data");
function handleShowProductInformation(chatId, data, username, bot) {
    const user = data_1.users.find((user) => user.username === username);
    const country = user === null || user === void 0 ? void 0 : user.country;
    console.log(country);
    const id = data.split("_")[1];
    const productInformation = data_1.products[country].find((product) => product.id === Number(id));
    console.log(productInformation);
    const keyboard = {
        inline_keyboard: [
            [{ text: `${productInformation === null || productInformation === void 0 ? void 0 : productInformation.prices} USD`, callback_data: `BUY-PRODUCT_${id}` }],
            [{ text: "Back", callback_data: `CHOOSE-COUNTRY_${country}` }]
        ]
    };
    bot.sendPhoto(chatId, "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", {
        caption: `${productInformation === null || productInformation === void 0 ? void 0 : productInformation.name}\n\n\nSelect a value below to proceed.`,
        reply_markup: keyboard
    });
}
exports.handleShowProductInformation = handleShowProductInformation;
