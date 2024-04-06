import {products, users} from "../data"
export function handleShowProductInformation(chatId:number , data:string , username:string , bot:any){
    const user = users.find((user)=>user.username===username);
    const country = user?.country;
    const id = data.split("_")[1];
    const productInformation = products[country!].find((product)=>product.id === Number(id))
    console.log(productInformation)
    
    const keyboard = {
        inline_keyboard:[
            [{text:`${productInformation?.prices} USD` , callback_data:`BUY-PRODUCT_${id}`}],
            [{text:"Back" , callback_data:`CHOOSE-COUNTRY_${country}`}]
        ]
      };
    bot.sendPhoto (chatId, "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , {
        caption:`${productInformation?.name} \n\n\n Select a value below to proceed.` ,
        reply_markup: keyboard
    })
    
}