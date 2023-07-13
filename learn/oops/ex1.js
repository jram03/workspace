function HtmlElement(){
    this.click = function(){
        console.log("clicked")
    }

}

HtmlElement.prototype.focus = function(){
    console.log("focus")
}

HtmlElement.prototype.render = function(){
    
}

function HTMLSelectElement(arr){
    // HtmlElement.call(this)
    this.items = arr;

    this.addItem = function(val){ 
        this.items.push(val)
    }
    this.removeItem = function(val){
        this.items.splice(this.items.indexOf(val),1)
    }
}

HTMLSelectElement.prototype = new HtmlElement()

HTMLSelectElement.prototype.constructor = HTMLSelectElement
HTMLSelectElement.prototype.render = function(){
    console.log(`option ${this.items.map(item=>"--"+item+"--")}`)
}



function HtmlImageElement(src){
    this.src= src;
    this.render = function(){
        console.log(`<image src=${src}/>`)
    }
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const aa= [
    new HTMLSelectElement([4,5,6]),
    new HtmlImageElement("https") 
]

function startt(){

for(let j of aa){
    console.log(j.render())
}
}