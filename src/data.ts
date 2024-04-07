
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

interface Countries {
    countryId:number;
    text: string;
    emoji: any;
}

export const users : Users[] = []; 

export const products:CountryProducts = {
    INDIA:[
        {
          "id": 1,
          "name": "Fortnite (Standard Edition) 1000-V-Bucks IN",
          "prices": [11.99],
          "imagePath": "blob:https://web.telegram.org/15fb4000-4321-46c2-af06-4763870cba76"
        },
        {
          "id": 2,
          "name": "Fortnite (Standard Edition) 13500-V-Bucks IN",
          "prices": [94.99],
          "imagePath": "blob:https://web.telegram.org/15fb4000-4321-46c2-af06-4763870cba76"
        },
        {
          "id": 3,
          "name": "Fortnite (Standard Edition) 2800-V-Bucks IN",
          "prices": [26.99],
          "imagePath": "blob:https://web.telegram.org/15fb4000-4321-46c2-af06-4763870cba76"
        },
        {
          "id": 4,
          "name": "Fortnite (Standard Edition) 5000-V-Bucks IN",
          "prices": [41.99],
          "imagePath": "blob:https://web.telegram.org/15fb4000-4321-46c2-af06-4763870cba76"
        },
        {
          "id": 5,
          "name": "Free Fire 100 + 10 Diamond IN",
          "prices": [1.0],
          "imagePath": "blob:https://web.telegram.org/a254ec6d-a083-4610-8914-02005fbcbd8a"
        },
        {
          "id": 6,
          "name": "Free Fire 1080 + 108 Diamond IN",
          "prices": [10],
          "imagePath": "blob:https://web.telegram.org/a254ec6d-a083-4610-8914-02005fbcbd8a"
        },
        {
          "id": 7,
          "name": "Free Fire 210 + 21 Diamond IN",
          "prices": [2.0],
          "imagePath": ""
        },
        {
          "id": 8,
          "name": "Free Fire 2200 + 220 Diamond IN",
          "prices": [20.0],
          "imagePath": ""
        },
        {
          "id": 9,
          "name": "Free Fire 530 + 53 Diamond IN",
          "prices": [5.0],
          "imagePath": ""
        },
        {
          "id": 10,
          "name": "Free Fire Diamonds IN",
          "prices": [1.0,2.0,5.0,20.0],
          "imagePath": ""
        },
        {
          "id": 11,
          "name": "Jagex Runescape eCodes IN",
          "prices": [10,25],
          "imagePath": ""
        },
        {
          "id": 12,
          "name": "Jawaker IN",
          "prices": [1.5,4.25,7.5,11,16,24,32,50,70,84],
          "imagePath": ""
        },
        {
          "id": 13,
          "name": "MOLEK-SYNTEZ IN",
          "prices": [9.99],
          "imagePath": ""
        },
        {
          "id": 14,
          "name": "Mobile Legends Diamonds IN",
          "prices": [0.2,0.99,4.99,9.99,19.99,29.99,49.99,99.99],
          "imagePath": ""
        },
        {
          "id": 15,
          "name": "NetDragon Universal IN",
          "prices": [10,25],
          "imagePath": ""
        },
        {
          "id": 16,
          "name": "Obucks IN",
          "prices": [1,5,6.5,10,13,15,20,25,50,100],
          "imagePath": ""
        },
        {
          "id": 17,
          "name": "PUBG Mobile 12000+4200 UC IN",
          "prices": [],
          "imagePath": ""
        },
        {
          "id": 18,
          "name": "PUBG Mobile 1500 + 300 UC IN",
          "prices": [24.99],
          "imagePath": ""
        },
        {
          "id": 19,
          "name": "PUBG Mobile 18000+6300 UC IN",
          "prices": [],
          "imagePath": ""
        },
        {
          "id": 20,
          "name": "PUBG Mobile 24000+8400 UC IN",
          "prices": [],
          "imagePath": ""
        },
        {
          "id": 21,
          "name": "PUBG Mobile 300 + 25 UC IN",
          "prices": [4.99],
          "imagePath": ""
        },
        {
          "id": 22,
          "name": "PUBG Mobile 3000 + 850  UC IN",
          "prices": [49.99],
          "imagePath": ""
        },
        {
          "id": 23,
          "name": "PUBG Mobile 30000 + 10500 UC IN",
          "prices": [],
          "imagePath": ""
        },
        {
          "id": 24,
          "name": "PUBG Mobile 60 UC IN",
          "prices": [0.99],
          "imagePath": ""
        },
        {
          "id": 25,
          "name": "PUBG Mobile 600 + 60 UC IN",
          "prices": [9.99],
          "imagePath": ""
        },
        {
          "id": 26,
          "name": "PUBG Mobile 6000 + 2100 UC IN",
          "prices": [99.99],
          "imagePath": ""
        },
        {
          "id": 27,
          "name": "RIOT ACCESS Latam America IN",
          "prices": [5,10,15,25,50,80],
          "imagePath": ""
        },
        {
          "id": 28,
          "name": "Razer Gold Global IN",
          "prices": [5,10,20,50,100],
          "imagePath": ""
        },
        {
          "id": 29,
          "name": "Redcoin Voucher IN",
          "prices": [20,50,100],
          "imagePath": ""
        },
        {
          "id": 30,
          "name": "SHENZHEN I/O IN",
          "prices": [],
          "imagePath": ""
        },
        {
          "id": 31,
          "name": "Razer Gold Global UA",
          "prices": [14.99],
          "imagePath": "blob:https://web.telegram.org/488ab8bb-e3f1-4c86-b6f6-53dde7649140"
        }
      ],
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

// export const countries:string[] = ["INDIA" , "USA"];

export const countries:Countries[]  = [
    {
        "countryId": 1,
        "text": "Singapore",
        "emoji": "🇸🇬"
    },
    {
        "countryId": 2,
        "text": "Switzerland",
        "emoji": "🇨🇭"
    },
    {
        "countryId": 3,
        "text": "Canada",
        "emoji": "🇨🇦"
    },
    {
        "countryId": 4,
        "text": "China",
        "emoji": "🇨🇳"
    },
    {
        "countryId": 5,
        "text": "Malta",
        "emoji": "🇲🇹"
    },
    {
        "countryId": 6,
        "text": "Portugal",
        "emoji": "🇵🇹"
    },
    {
        "countryId": 7,
        "text": "Slovenia",
        "emoji": "🇸🇮"
    },
    {
        "countryId": 8,
        "text": "Estonia",
        "emoji": "🇪🇪"
    },
    {
        "countryId": 9,
        "text": "India",
        "emoji": "🇮🇳"
    },
    {
        "countryId": 10,
        "text": "Japan",
        "emoji": "🇯🇵"
    },
    {
        "countryId": 11,
        "text": "United Kingdom",
        "emoji": "🇬🇧"
    },
    {
        "countryId": 12,
        "text": "Russia",
        "emoji": "🇷🇺"
    },
    {
        "countryId": 13,
        "text": "Cyprus",
        "emoji": "🇨🇾"
    },
    {
        "countryId": 14,
        "text": "Germany",
        "emoji": "🇩🇪"
    },
    {
        "countryId": 15,
        "text": "El Salvador",
        "emoji": "🇸🇻"
    },
    {
        "countryId": 16,
        "text": "United States",
        "emoji": "🇺🇸"
    },
    {
        "countryId": 17,
        "text": "Netherlands",
        "emoji": "🇳🇱"
    },
    {
        "countryId": 18,
        "text": "South Korea",
        "emoji": "🇰🇷"
    },
    {
        "countryId": 19,
        "text": "United Arab Emirates",
        "emoji": "🇦🇪"
    },
    {
        "countryId": 20,
        "text": "Lithuania",
        "emoji": "🇱🇹"
    },
    {
        "countryId": 21,
        "text": "Luxembourg",
        "emoji": "🇱🇺"
    },
    {
        "countryId": 22,
        "text": "Nigeria",
        "emoji": "🇳🇬"
    },
    {
        "countryId": 23,
        "text": "Argentina",
        "emoji": "🇦🇷"
    },
    {
        "countryId": 24,
        "text": "Brazil",
        "emoji": "🇧🇷"
    }
]





