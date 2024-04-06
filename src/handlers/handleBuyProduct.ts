import {users , products} from "../data"

export function handleBuyProduct(chatId:number , data:string , username:string ,bot:any){
    try{
        const user = users.find((user)=>user.username===username);
        const country = user?.country;
        const id = data.split("_")[1];
        const productInformation = products[country!].find((product)=>product.id === Number(id))
        const keyboard = {
            inline_keyboard: [
              [{ text: `Pay with ETH`, callback_data: `PAY-WITH_ETH` }],
              [{ text: 'Pay with BNB', callback_data: 'PAY-WITH_BNB' }],
              [{ text: 'Pay with AVAX', callback_data: 'PAY-WITH_AVAX' }],
              [{ text: 'Pay with MATIC', callback_data: 'PAY-WITH_MATIC' }],
              [{ text: 'Cancel', callback_data: 'PAY-WITH_CANCEL' }],
            ],
          };
        bot.sendMessage(chatId,`Confirm your order:\n\nProduct:${productInformation?.name}\nValue:${productInformation?.prices}\n\nEstimate Price in\n-Ethereum:123\n-Binance Coin:123\n-Avalanche:123\n-Polygon:123\n\n(Price may vary slightly due to price fluctuations)\n\nSelect option below to proceed.`, { reply_markup: keyboard })
        
    }catch(err : any){
        console.log(err.message)
    }
    
}