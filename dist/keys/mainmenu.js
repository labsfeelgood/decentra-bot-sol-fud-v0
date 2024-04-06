"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMainMenuKeyboard = void 0;
function sendMainMenuKeyboard(bot, chatId, country) {
    const keyboard = {
        inline_keyboard: [
            [{ text: `${country} Products`, callback_data: `EXPLORE_IN_${country}` }],
            [{ text: 'Explore Other Countries', callback_data: 'EXPLORE_IN_OTHERS' }],
        ],
    };
    bot.sendMessage(chatId, 'What would you like to do?', { reply_markup: keyboard });
}
exports.sendMainMenuKeyboard = sendMainMenuKeyboard;
