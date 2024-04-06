
interface Users {
    username:string;
    country:string;
}
interface Product {
    id:number;
    name: string;
    imagePath:string;
    prices: number[];
}

interface CountryProducts {
    [country: string]: Product[];
}

export const users : Users[] = []; 

export const products:CountryProducts = {
    INDIA:[{
        id:1,
        name:"Fortnite (Standard Edition) 1000-V-Bucks IN",
        imagePath:"../assets/india_1.png",
        prices:[11.99 ]
    },{
        id:2,
        name:"Fortnite (Standard Edition) 13500-V-Bucks IN",
        imagePath:"../assets/india_1.png",
        prices:[94.99]

    }],
    USA:[{
        id:1,
        name:"(RED) US",
        imagePath:"../assets/us_1.png",
        prices:[11.99]
    },{  id:2,
        name:"Wine.com",
        imagePath:"../assets/us_1.png",
        prices:[25.0 ,50 , 100  ]

    }]
}

export const countries:string[] = ["INDIA" , "USA"];