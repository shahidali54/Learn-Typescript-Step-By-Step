///////////////////////////// TYPE ///////////////////

type sm = {
    name: string,
    age: number,
    exp: boolean
}

type SM = {
    nickname: string,
    day: string,
    health: boolean
}

let bonding: sm & SM = {
    name:"shahid",
    age: 20,
    exp: true,
    nickname: "SM",
    day: "sunday",
    health: true
}
console.log(bonding);


/////////////////////////// INTERFACE  ////////////////////


interface sa  {
    name: string,
    age: number,
    exp: boolean
}

interface SA  {
    nickname: string,
    day: string,
    health: boolean
}

let bondings: sa | SA = {
    name:"Shahid",
    age: 28,
    exp: true,
    nickname: "SA",
    day: "sunday",
    health: true
}
console.log(bondings);


// Difference   =  and | 