"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePay = void 0;
function handlePay(chatId, data, username, bot) {
    try {
        const paymentMethod = data.split("_")[1];
        if (paymentMethod === "CANCEL") {
        }
        const keyboard = {
        // inline_keyboard:[
        //     [{text:`${productInformation?.prices} USD` , callback_data:`BUY-PRODUCT_${id}`}],
        //     [{text:"Back" , callback_data:`CHOOSE-COUNTRY_${country}`}]
        // ]
        };
        bot.sendMessage(chatId, `
Waiting for payment...

*Order ID*: DT-1712400999048
*Product*: Free Fire Diamonds MG
*Value*: 1.0USD

Please send 0.000806 ETH to the following address:

[0xD353BAd52E20a2A5d6AFC60a7e052A3c1FA382e0](#)​
_(Click the address to copy it)_

_Note:You have 30 minutes to make the payment. After that, the order will be cancelled automatically._`, { parse_mode: "Markdown" });
    }
    catch (err) {
        console.log(err.message);
    }
}
exports.handlePay = handlePay;
