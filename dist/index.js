"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const utils_1 = require("./utils");
const handleCountry_1 = require("./handlers/handleCountry");
const handleShowProducts_1 = require("./handlers/handleShowProducts");
const handleShowProductInformation_1 = require("./handlers/handleShowProductInformation");
const handleGoBack_1 = require("./handlers/handleGoBack");
const TOKEN = "6857815003:AAGbcsQRmQARFAJsGURBAhplRwlsEbYRVUo";
const bot = new node_telegram_bot_api_1.default(TOKEN, { polling: true });
var STATES;
(function (STATES) {
    STATES["MAIN_MENU"] = "main_menu";
    STATES["SELECT_COUNTRY"] = "select_country";
    STATES["EXPLORE_COUPONS"] = "explore_coupons";
    STATES["VIEW_COUPON_DETAILS"] = "view_coupon_details";
})(STATES || (STATES = {}));
const userContexts = {};
bot.onText(/\/start/, (msg) => {
    var _a, _b, _c, _d;
    try {
        const chatId = msg.chat.id;
        const userId = ((_a = msg.from) === null || _a === void 0 ? void 0 : _a.id) || 0;
        if ((0, utils_1.usernameExists)(((_b = msg.from) === null || _b === void 0 ? void 0 : _b.username) || "")) {
            const data = (0, utils_1.getCountry)(((_c = msg.from) === null || _c === void 0 ? void 0 : _c.username) || "");
            const country = data === null || data === void 0 ? void 0 : data.country;
            bot.sendMessage(msg.chat.id, `Welcome back, ${(_d = msg.from) === null || _d === void 0 ? void 0 : _d.first_name}! Your Country is ${country}`);
            // sendMainMenuKeyboard(bot , chatId , country!);
        }
        else {
            const keyboard = {
                inline_keyboard: [
                    [{ text: 'INDIA', callback_data: 'CHOOSE-COUNTRY_INDIA' }],
                    [{ text: 'USA', callback_data: 'CHOOSE-COUNTRY_USA' }],
                ],
            };
            bot.sendMessage(msg.chat.id, 'Select a country to see the available products.', { reply_markup: keyboard });
        }
    }
    catch (err) {
        console.log(err);
    }
});
bot.on('callback_query', (query) => {
    var _a;
    const chatId = (_a = query.message) === null || _a === void 0 ? void 0 : _a.chat.id;
    const username = query.from.username;
    const data = query.data;
    const task = data === null || data === void 0 ? void 0 : data.split("_")[0];
    console.log(task);
    switch (task) {
        case "CHOOSE-COUNTRY":
            (0, handleCountry_1.handleCountry)(chatId, data, username, bot);
            break;
        case "SHOW-PRODUCTS":
            (0, handleShowProducts_1.handleShowProducts)(chatId, data, username, bot);
            break;
        case "SHOW-PRODUCT-INFORMATION":
            (0, handleShowProductInformation_1.handleShowProductInformation)(chatId, data, username, bot);
            break;
        case "GO-BACK":
            (0, handleGoBack_1.handleGoBack)();
            break;
        default:
            break;
    }
    //
    //     users.push({
    //         "username":query.from?.username!,
    //         "country":country!
    //     })
    //    const productsKeyboard ={
    //     inline_keyboard :[
    //         [{text:""}]
    //     ]
    //    }
});
