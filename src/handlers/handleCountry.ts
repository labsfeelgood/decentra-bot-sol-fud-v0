import {users} from "../data"
export function handleCountry(chatId:number , data:string , username:string , bot:any){
    const country = data.split("_")[1];
    const keyboard = {
        inline_keyboard: [
          [{ text: `${country} Products`, callback_data: `SHOW-PRODUCTS_${country}` }],
          [{ text: 'Explore other country', callback_data: 'EXPLORE-OTHER-COUNTRY' }],
        ],
      };
    users.push({
                "username":username,
                "country":country
            })
        bot.sendMessage(chatId,`Welcome, ${username}! Your Country is ${country}`, { reply_markup: keyboard })
        

}