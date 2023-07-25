const mixin = function(obj, ...sources){
    Object.assign(obj,...sources)
}

const canWalk = {
    walk : function(){
        console.log("walk")
    }
}
const canSwim = {
    swim : function(){
        console.log("swim")
    }
}
const canEat = {
    eat : function(){
        console.log("eat")
    }
}

const Person =function(){
    
}
const Fish = function(){

}
const dog = function(){

}
mixin(Fish.prototype,canWalk,canEat)

const p=new Fish()
console.log(p)
