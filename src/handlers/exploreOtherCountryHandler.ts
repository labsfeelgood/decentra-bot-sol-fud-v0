import { countries } from "../data"

export function exploreOtherCountry(chatId:number , data:string , username: string , bot:any){
   try{

    const keyboard = {
        inline_keyboard: countries.map((country)=>[{
            text:country,
            callback_data:`SHOW-PRODUCTS_${country}`
        }])
      };
     bot.sendMessage(chatId , "Select a country to see the available products.",{ reply_markup: keyboard })
   }catch(err:any){
    console.log(err.message)
   }
}