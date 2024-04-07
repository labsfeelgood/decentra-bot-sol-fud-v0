import {products,countries} from "../data"

export function handleShowProducts(chatId:number , data:string , username:string , bot:any){
    const countryInParams = data.split("_")[1];
    const countrySpecificProducts = products[countryInParams];
    const country = countries.find((country)=>country.text.toLowerCase() === countryInParams.toLowerCase())
    function createInlineKeyboard(countrySpecificProducts:any) {
        const keyboard = [];
    
        for (let i = 0; i < countrySpecificProducts.length; i += 2) {
            const buttonRow = [];
    
            for (let j = i; j < i + 2 && j < countrySpecificProducts.length; j++) {
                const countryName = countrySpecificProducts[j].text;
                const countryFlag = countrySpecificProducts[j].emoji;
                buttonRow.push({
                    text: `${countrySpecificProducts[j].name}`,
                    callback_data: `SHOW-PRODUCT-INFORMATION_${countrySpecificProducts[j].id}` 
                });
            }
    
            keyboard.push(buttonRow);
        }
    
        return {
            inline_keyboard: keyboard
        };
    }
    const inlineKeyboard = createInlineKeyboard(countrySpecificProducts);
      bot.sendMessage(chatId , `Country: ${country?.text} ${country?.emoji}\nHere are the products:`, { reply_markup: inlineKeyboard })

}