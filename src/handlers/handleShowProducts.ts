import {products} from "../data"

export function handleShowProducts(chatId:number , data:string , username:string , bot:any){
    const country = data.split("_")[1];
    const countrySpecificProducts = products[country]


    const keyboard = {
        inline_keyboard: countrySpecificProducts.map(product => [{
            text: product.name,
            callback_data: `SHOW-PRODUCT-INFORMATION_${product.id}`
        }])
      };
      bot.sendMessage(chatId , `Country ${country}\nHere are the products:`, { reply_markup: keyboard })

}