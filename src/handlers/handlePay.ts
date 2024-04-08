import {products} from '../data'
export function handlePay(
  chatId: number,
  data: string,
  username: string,
  bot: any
) {
  try {   
   const information = data.split("_")[1];
   const country = information.split("/")[0];
   const idAndPrice = information.split('/')[1];
   const id = idAndPrice.split(".")[0]; 
   const price = idAndPrice.split(".")[1]; 

   const productInformation = products[country.toUpperCase()].find((product)=>product.id === Number(id))
   
    bot.sendMessage(
      chatId,
      `
Waiting for payment...

*Order ID*: DT-1712400999048
*Product*: ${productInformation?.name}
*Value*: ${price} USD

Please send SOL worth ${price} USD to the following address:

[${process.env.WALLET_ADDRESS}](#)​
_(Click the address to copy it)_

_Note:You have 30 minutes to make the payment. After that, the order will be cancelled automatically._`,
      { parse_mode: "Markdown" }
    );
  } catch (err: any) {
    console.log(err.message);
  }
}


