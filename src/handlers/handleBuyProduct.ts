import {users , products} from "../data"

export function handleBuyProduct(chatId:number , data:string , username:string ,bot:any){
    try{
        const user = users.find((user)=>user.username===username);
        const country = user?.country;
        const idAndPrice = data.split("_")[1];
        const id = idAndPrice.split("-")[0]
        const price = idAndPrice.split("-")[1]
        const productInformation = products[country?.toUpperCase()!].find((product)=>product.id === Number(id))
        const keyboard = {
            inline_keyboard: [
              [{ text: `Pay with SOL`, callback_data: `PAY-WITH_${country}/${id}.${price}` }],
              [{ text: '❌ Cancel', callback_data: 'EXPLORE-OTHER-COUNTRY' }],
            ],
          };
        bot.sendMessage(chatId,`*Confirm your order*:\n\n*Product:* ${productInformation?.name}\n\n*Value*: ${price} USD\n\nSelect option below to proceed.`, { reply_markup: keyboard  , parse_mode: "Markdown"})
        
    }catch(err : any){
        console.log(err.message)
    }
    
}