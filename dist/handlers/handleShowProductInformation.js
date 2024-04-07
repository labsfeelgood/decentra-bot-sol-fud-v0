"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleShowProductInformation = void 0;
const data_1 = require("../data");
function handleShowProductInformation(chatId, data, username, bot) {
    const user = data_1.users.find((user) => user.username === username);
    const country = user === null || user === void 0 ? void 0 : user.country;
    const id = data.split("_")[1];
    const productInformation = data_1.products[country === null || country === void 0 ? void 0 : country.toUpperCase()].find((product) => product.id === Number(id));
    const inline_keyboard = productInformation === null || productInformation === void 0 ? void 0 : productInformation.prices.map((price) => [{ text: `${price} USD`, callback_data: `BUY-PRODUCT_${id}-${price}` }]);
    inline_keyboard.push([{ text: "🔙 Back", callback_data: `CHOOSE-COUNTRY_${country}` }]);
    const keyboard = {
        inline_keyboard
    };
    let imagePath;
    if (productInformation === null || productInformation === void 0 ? void 0 : productInformation.imagePath) {
        const googleDrivePath = productInformation.imagePath.split("/d/")[1];
        const googleDriveId = googleDrivePath.split("/view")[0];
        imagePath = `https://drive.google.com/thumbnail?id=${googleDriveId}`;
    }
    else {
        imagePath = "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=";
    }
    bot.sendPhoto(chatId, imagePath, {
        caption: `${productInformation === null || productInformation === void 0 ? void 0 : productInformation.name}\n\n\nSelect a value below to proceed.`,
        reply_markup: keyboard
    });
}
exports.handleShowProductInformation = handleShowProductInformation;
