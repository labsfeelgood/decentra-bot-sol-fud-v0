import { countries } from "../data"

export function exploreOtherCountry(chatId:number , data:string , username: string , bot:any){
   try{
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

     bot.sendMessage(chatId , "Select a country to see the available products.",{ reply_markup: inlineKeyboard })
   }catch(err:any){
    console.log(err.message)
   }
}