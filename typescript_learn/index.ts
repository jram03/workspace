// import axios from 'axios'

// interface User{
//     id : number;
//     name : string;
//     email :string;
// }


// axios.get("https://jsonplaceholder.typicode.com/users/1").then(res=>{
//     const users= res.data as User;
//     const id=users.id;
//     const name =users.name;
//     const email = users.email;
//     logTodo(id,name,email);

// }).catch(err=>console.log(err))

// const logTodo = (id:number,name:string,email:string)=>{
//     console.log(`Id is ${id}
//     name is ${name}
//     email is ${email}`)
// }



// const obj : {x : number , y: number} = {
//     x : 5,
//     y : 5,
// }

// console.log(obj.x + obj.y)


// const add : (x : number , y : number) => number = (x,y)=>{
//     return x+y
// }

// console.log(add(3563463,3563456))

// const add2 = function(x : number, y : number) : number{
//     return x+y;
// }

// console.log(add2(879,98))


// const add3 = (x : number, y : number) : number => {
//     return x+y
// }

// console.log(add3(6,7))

// function add4( x : number , y: number) : number {
//     return x+y;
// }

// console.log(add4(9,90))


// function add5(x: number, y :number): never{
//     throw new Error("err caught");
//     x+y;
// }

// add5(98,98)


// const myyphone = {
//     name : "oneplus",
//     spec : "12, 256",
// }

// function printPhone({name , spec } : {name : string, spec : string}){
//     console.log(`I have ${name} with specs ${spec}`)
// }

// printPhone(myyphone)

interface Phone  {
    name : string;
    model : string;
    spec : {
        ram : number;
        storage : number;
    }
    setspec(x : number , y: number) : void 
}




const myyphone : Phone = {
    name : "oneplus",
    model : "nord",
    spec : {
        ram : 4,
        storage : 256
    },
    setspec(ram : number, storage : number){
        this.spec.ram =ram;
        this.spec.storage = storage;
    }
}

myyphone.setspec(8,128);

console.log(myyphone)

const { model } : {model :string} = myyphone;
const { spec : {ram, storage}} : {spec : {ram :number ; storage : number}} = myyphone;

console.log(model)
console.log(ram)
 
