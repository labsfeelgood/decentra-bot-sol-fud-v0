import TelegramBot  , {CallbackQuery} from "node-telegram-bot-api"
import {users, countries} from "./data"
import {usernameExists,
    getCountry
} from "./utils"
import {handleCountry} from "./handlers/handleCountry"
import {handleShowProducts} from "./handlers/handleShowProducts"
import  {handleShowProductInformation} from "./handlers/handleShowProductInformation"
import { handleBuyProduct } from "./handlers/handleBuyProduct"
import { handlePay } from "./handlers/handlePay"
import { exploreOtherCountry } from "./handlers/exploreOtherCountryHandler"
import {config} from "dotenv"
import { handleAffiliator } from "./handlers/handleAffiliator"
config();
const TOKEN = process.env.BOT_TOKEN;
const bot = new TelegramBot(TOKEN!,{polling:true})


bot.onText(/\/start/,(msg)=>{
   try{
    const chatId = msg.chat.id;
    const userId = msg.from?.id || 0;
    const messageId = msg.message_id
    if ( usernameExists(msg.from?.username || "") ){
        fadeOutMessage(chatId!, messageId!);
        const data = getCountry(msg.from?.username || "")
        const country = data?.country
        const countryData = countries.find((c)=>c.text.toLowerCase() === country?.toLowerCase())
        const emoji = countryData?.emoji;
        const keyboard = {
            inline_keyboard: [
                [{ text: `${emoji} ${country} Products`, callback_data: `SHOW-PRODUCTS_${country?.toUpperCase()}` },{ text: '🔎 Explore other country', callback_data: 'EXPLORE-OTHER-COUNTRY_' }],
                [{text: "🤝 Become an Affiliator" , callback_data:'BECOME-AFFILIATOR_'}],
              ],
          };
        bot.sendMessage(msg.chat.id,`Welcome back, ${msg.from?.first_name}! Your Country is ${country}`,{ reply_markup: keyboard })
        
    }else{

        function createInlineKeyboard(countries:any) {
            const keyboard = [];
        
            for (let i = 0; i < countries.length; i += 2) {
                const buttonRow = [];
        
                for (let j = i; j < i + 2 && j < countries.length; j++) {
                    const countryName = countries[j].text;
                    const countryFlag = countries[j].emoji;
                    buttonRow.push({
                        text: `${countryFlag} ${countryName}`,
                        callback_data: `CHOOSE-COUNTRY_${countryName.toUpperCase()}` 
                    });
                }
        
                keyboard.push(buttonRow);
            }
        
            return {
                inline_keyboard: keyboard
            };
        }
        const inlineKeyboard = createInlineKeyboard(countries);
          bot.sendMessage(msg.chat.id, 'Select a country to see the available products.', { reply_markup: inlineKeyboard });
          
    }
   }catch(err){
    console.log(err)
   }
})
function fadeOutMessage(chatId: number, messageId: number) { 
    bot.deleteMessage(chatId,messageId)
  }

bot.on('callback_query', (query) => {
    const messageId = query.message?.message_id;
    const chatId = query.message?.chat.id;
    const username = query.from.username;
    const firstName = query.from.first_name;
    const data = query.data;
    const task = data?.split("_")[0]
    console.log(data)
    console.log(task)
    switch (task) {
        case "CHOOSE-COUNTRY":
            fadeOutMessage(chatId!, messageId!);
            handleCountry(chatId! , data!, firstName! , bot , username!);
            break;
        case "SHOW-PRODUCTS":
            fadeOutMessage(chatId!, messageId!);
            handleShowProducts(chatId! , data! , username! , bot);
            break;
        case "SHOW-PRODUCT-INFORMATION":
            fadeOutMessage(chatId!, messageId!);
            handleShowProductInformation(chatId! , data! , username! , bot);
            break;
        case "BUY-PRODUCT":
            fadeOutMessage(chatId!, messageId!);
            handleBuyProduct(chatId! , data! , username! , bot!);
            break;
        case "PAY-WITH":
            fadeOutMessage(chatId!, messageId!);
            handlePay(chatId! , data! , username! , bot!);
            break;
        case "EXPLORE-OTHER-COUNTRY":
            fadeOutMessage(chatId!, messageId!);
            exploreOtherCountry(chatId! , data! , username! , bot!)
            break;
        case "BECOME-AFFILIATOR":
            fadeOutMessage(chatId!, messageId!);
            handleAffiliator(chatId! , data! , username! , bot!)
            break;
        default:
            break;
    }
    
    //
    // users.push({
    //     "username":query.from?.username!,
    //     "country":country!
    // })

//    const productsKeyboard ={
//     inline_keyboard :[
//         [{text:""}]
//     ]
//    }
  });


  