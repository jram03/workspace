function StopWatch(){
    let duration = 0;
    let st,et;
    let flg=0;
    
    Object.defineProperty(this,'duration',{
        get : function(){
            return duration
        },
        set : function(val){
            duration = val;
        }
    })
    Object.defineProperty(this,'st',{
        get : function(){
            return st
        }
        ,
        set : function(val){
            st = val;
        }
    })
    Object.defineProperty(this,'et',{
        get : function(){
            return et
        },
        set : function(val){
            et = val;
        }
    })
    Object.defineProperty(this,'flg',{
        get : function(){
            return flg
        },
        set : function(val){
            flg=val;
        }
    })


}

StopWatch.prototype.start = function(){

    if(this.flg==1){
        throw new Error("Stopwatch not stopped");
    }
    this.flg=1;

    a=new Date()
    this.st=a.getTime()


}
StopWatch.prototype.stop = function(){
    if(this.flg==0){
        throw new Error("Stopwatch not started");
    }
    this.flg=0;
    b=new Date()
    this.et = b.getTime();

    this.duration += (this.et-this.st)/1000;

}
StopWatch.prototype.reset = function(){
    this.duration =0;
    this.st = null;
    this.et=null;
    this.flg=0;

}
