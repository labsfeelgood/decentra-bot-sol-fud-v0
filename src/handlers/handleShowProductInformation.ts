import {products, users} from "../data"
export function handleShowProductInformation(chatId:number , data:string , username:string , bot:any){
    const user = users.find((user)=>user.username === username);
    const country = user?.country;
    const id = data.split("_")[1];
    const productInformation = products[country?.toUpperCase()!].find((product)=>product.id === Number(id))
    const inline_keyboard = productInformation?.prices.map((price)=>[{text:`${price} USD`,callback_data:`BUY-PRODUCT_${id}-${price}`}])
    inline_keyboard!.push([{text:"🔙 Back" , callback_data:`CHOOSE-COUNTRY_${country}`}])
    const keyboard = {
        inline_keyboard
      };
    let imagePath; 
    if(productInformation?.imagePath){
         const googleDrivePath = productInformation.imagePath.split("/d/")[1]
         const googleDriveId = googleDrivePath.split("/view")[0];
         imagePath = `https://drive.google.com/thumbnail?id=${googleDriveId}`
    }else{
        imagePath = "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
    }
    
    bot.sendPhoto (chatId, imagePath , {
        caption:`${productInformation?.name}\n\n\nSelect a value below to proceed.` ,
        reply_markup: keyboard
    })
    
}