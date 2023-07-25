
// function Shape(){
    
// }
// function Circle(radius){
//     this.radius = radius;
    
// }
// Circle.prototype = Object.create(Shape.prototype)
// Circle.prototype.constructor = Circle;
// Circle.prototype.draw = function(){
//     console.log("draw")
// }



// Shape.prototype.write = function(){
//     console.log("write")
// }



function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function(){
    console.log("duplicate : "+(this.name || "jeyaram"));
}

function Circle(radius,color){
    Shape.call(this,color)
    this.radius = radius;
}
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

extend(Circle, Shape)

Circle.prototype.duplicate = function(){
    // Shape.prototype.duplicate.call({name : "jram"});
    console.log("Circle duplicate")
}


function Square(side,color){
    Shape.call(this,color)
    this.side = side;

}

extend(Square,Shape)

Square.prototype.duplicate = function(){
    console.log("Square Duplicate")
}


// s= new Shape()
c = new Circle(5,"red")
d = new Square(10,"blue")

a=[c,d]


for(let i of a){
    console.log(i.duplicate())
}