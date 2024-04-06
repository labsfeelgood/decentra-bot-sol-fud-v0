import {users} from "./data"

interface GetCountryProps{
    username?:string
}
export function usernameExists(usernameToCheck:string) {
    return users.some((user) =>{ if(user.username){
        return user.username.includes(usernameToCheck)
    }
    });
}

export function getCountry(username:string){
    return users.find((data)=>data.username === username)
}
