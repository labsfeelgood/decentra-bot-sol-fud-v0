import {users ,countries} from "../data"
export function handleCountry(chatId:number , data:string , firstName:string , bot:any , username:string){

    const countryFromParams = data.split("_")[1];

    const country = countries.find((country)=>country.text.toLowerCase() === countryFromParams.toLowerCase())
    
    
    const keyboard = {
        inline_keyboard: [
          [{ text: `${country?.emoji} ${country?.text} Products`, callback_data: `SHOW-PRODUCTS_${country?.text.toUpperCase()}` },{ text: '🔎 Explore other country', callback_data: 'EXPLORE-OTHER-COUNTRY_' }],
          [{text: "🤝 Become an Affiliator" , callback_data:'BECOME-AFFILIATOR_'}],
        ],
      };
    users.push({
                "username":username,
                "country":country?.text!
            })
        bot.sendMessage(chatId,`Welcome, ${firstName}! Your Country is ${country?.text}`, { reply_markup: keyboard })
        

}


