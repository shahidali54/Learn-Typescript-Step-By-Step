interface a {
    name : string,
    age : number
}

interface b {
    name : string,
    age : number ,
    experience : boolean
}

let c : a = {
    name : "Shahid",
    age : 20
}

let d : b = {
    name : "Subhan",
    age : 29,
    experience : true
}

c = d

d = c

// for example grade barh sakta hai lekin kam nhi