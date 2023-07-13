//abstraction

// function Person(val){
//     let name="jram";
//     let age = 20;
//     this.val = val;

//     Object.defineProperty(this,'name',{
//         get : function(){
//             return name;
//         },
//         set : function(val){
//             name=val;
//         }
//     })
// }

// const p1=new Person(1);
// p1.name="jeyaram"
// console.log(p1.name)


function StopWatch(){
    let duration =0;
    this.start = function(){

    }
    this.stop = function(){
       
    }
    this.reset = function(){

    }



}

a = new Date();
for(let i=0;i<1000000;i++){
for(let j=0;j<1000000;j++)
bn=0
if(i%10000==0)
console.log("loop completed")
}

b= new Date();

at=a.getTime()
bt= b.getTime()

console.log((bt-at)/1000)