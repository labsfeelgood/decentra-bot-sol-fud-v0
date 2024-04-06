import TelegramBot  , {CallbackQuery} from "node-telegram-bot-api"
import {users} from "./data"
import {usernameExists,
    getCountry
} from "./utils"
import {handleCountry} from "./handlers/handleCountry"
import {handleShowProducts} from "./handlers/handleShowProducts"
import  {handleShowProductInformation} from "./handlers/handleShowProductInformation"
import { handleBuyProduct } from "./handlers/handleBuyProduct"
import { handlePay } from "./handlers/handlePay"
import { exploreOtherCountry } from "./handlers/exploreOtherCountryHandler"
const TOKEN = "6857815003:AAGbcsQRmQARFAJsGURBAhplRwlsEbYRVUo"
const bot = new TelegramBot(TOKEN,{polling:true})

enum STATES {
    MAIN_MENU = 'main_menu',
    SELECT_COUNTRY = 'select_country',
    EXPLORE_COUPONS = 'explore_coupons',
    VIEW_COUPON_DETAILS = 'view_coupon_details',
  }

const userContexts: { [key: number]: { state: STATES; country?: string } } = {};

bot.onText(/\/start/,(msg)=>{
   try{
    const chatId = msg.chat.id;
    const userId = msg.from?.id || 0;

    if ( usernameExists(msg.from?.username || "") ){
        const data = getCountry(msg.from?.username || "")
        const country = data?.country
        bot.sendMessage(msg.chat.id,`Welcome back, ${msg.from?.first_name}! Your Country is ${country}`)
        // sendMainMenuKeyboard(bot , chatId , country!);
        
    }else{
        const keyboard = {
            inline_keyboard: [
              [{ text: 'INDIA', callback_data: 'CHOOSE-COUNTRY_INDIA' }],
              [{ text: 'USA', callback_data: 'CHOOSE-COUNTRY_USA' }],
            ],
          };

          bot.sendMessage(msg.chat.id, 'Select a country to see the available products.', { reply_markup: keyboard });
    }
   }catch(err){
    console.log(err)
   }
})


bot.on('callback_query', (query) => {

    const chatId = query.message?.chat.id;
    const username = query.from.username
    const data = query.data;
    const task = data?.split("_")[0]
    console.log(task)
    switch (task) {
        case "CHOOSE-COUNTRY":
            handleCountry(chatId! , data!, username! , bot);
            break;
        case "SHOW-PRODUCTS":
            handleShowProducts(chatId! , data! , username! , bot);
            break;
        case "SHOW-PRODUCT-INFORMATION":
            handleShowProductInformation(chatId! , data! , username! , bot);
            break;
        case "BUY-PRODUCT":
            handleBuyProduct(chatId! , data! , username! , bot!);
            break;
        case "PAY-WITH":
            handlePay(chatId! , data! , username! , bot!);
            break;
        case "EXPLORE-OTHER-COUNTRY":
            exploreOtherCountry(chatId! , data! , username! , bot!)
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

