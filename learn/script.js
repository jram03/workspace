// const numbers = [1,2,3,4,5,6];
// numbers.push(1,2,9,10)
// console.log(numbers)
// // numbers.unshift({name : 'jram',age : 20},{name : "jeyaram",age : 20})
// numbers.splice(6,2,7,8)
// console.log(numbers)


// console.log(numbers.indexOf(5,5))



// a=[12,-2,32,4,52,6];

// const ans = a.every((i)=>i%2==0)

// console.log(ans)


// a=[1,2,3,4,5,6,7,8];

// const filtered = a.filter((n)=>n%2==0).map((n)=>({value : n}))

// console.log(
//     filtered
// )


// a=[1,2,3,4,5,6,7,8,9,10];
// const sum = a.reduce((a,c)=>a+c,5)
// console.log(sum)

// const numbers = arrayFromRange(-10,-4);

// console.log(numbers)

// function arrayFromRange(min,max){
//     f=[]
//     c=0
//     for(let i=min;i<=max;i++)
//     f.push(i)

//     return f
// }

// const a=[1,2,3,4,15,6,7,8,9,0];

// console.log(include(a,5));

// function include(arr,search){
    //     return arr.includes(search)
    // }
    
// const a=[1,2,3,4,15,6,7,8,9,1,1,1,0];

// const output = except(a,[1,2]);

// function except(arr,excluded){
    //     let g=arr
    //     for(let i of excluded){
        //         g=g.filter(n=>n!=i)
        //     }
        //     return g
        // }
        
        // console.log(output)


// const a=[1,2,3,4,15,6,7,8,9,1,1,1,0];    

// const output = move(a,0,90);
// console.log(output)

// function  move(arr,index,offset){
    
//     if(index+offset >= a.length || index+offset<0){
//         console.error("Invalid index")
//         return
//     }
    
//     t=arr[index]
//     arr.splice(index,1)
//     arr.splice(index+offset,0,t)
    
//     return arr
    
// }
try{
const a=[1,2,3,4,15,6,7,8,9,1,1,1,0];    
console.log(countocc(null,1))
}
catch(e){
    console.error(`the errrorr is : ${e}`);
}
function countocc(a,x){
    
    if(!Array.isArray(a)){
        throw new Error("array is not valid one");
    }
        c = a.reduce((ac,c)=>{
                return ac+(c==x)
            },0)
        
        // let c=0;
        // for(let i of a){
            //     if(i==x)c++;
            // }
            return c;
            
            }
// const a=[1,2,3,4,15,60,7,8,9,1,1,1,0]; 

// const max=getMax(a);
// console.log(max)

// function getMax(a){
//     // let m=0
//     // for(let i of a){
//     //     if(i>m)
//     //     m=i;
//     // }
//     // return m

//     m = a.reduce((a,c)=>{
//         return (a<c)?c:a
//     },0)
//     return m;

// }


// const movies = [
//     { title : 'a', year : 2018, rating : 4.5 },
//     { title : 'b', year : 2018, rating : 4.7 },
//     { title : 'c', year : 2018, rating : 3 },
//     { title : 'd', year : 2017, rating : 4.5 },
// ]

// const a = fun(movies);
// console.log(a)

// function fun(movies){
//     return movies.filter(n=>(n.year==2018 && n.rating>4)).sort((a,b)=>a.rating - b.rating).reverse().map(n=>n.title)
// }


// function fun(a,b=1.5,c){
//     c=c|| 5;
//     return a+b+c;
// }


// console.log(fun(1,1))


// const video = {
//     title : 'a',
//     tags : ['a','b','c'],
//     showTags() {
//         this.tags.forEach((tag)=>{
//             console.log(this.title , tag);
//         })
//     }
// }
// video.showTags();


// a= [1,2,3,4,5,90,100,6,7]


// a.sort((a,b)=>a-b)
// console.log(a)


// function sum(){
//     let s=0;
//     arg = arguments;
//     if(Array.isArray(arguments[0]))
//     arg=arguments[0]
//     for(let i of arg){
//     s+=i
//     // console.log(i)
//     }
//     return s;
// }

// console.log(sum(1,2,3,4,5))


// const circle = {
//     radius : 2,
//     get area(){
//         return Math.pi * this.radius * this.radius;
//     }
// }

// console.log(circle.area)

const Person = function(radius){
    this.radius = radius;

    this.draw = function(){
        console.log("draw")
    }
}

Person.prototype.write = function(){
    console.log("write")
}
p1=new Person(5)
console.log(p1)