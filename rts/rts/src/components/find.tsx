import React, { useState } from "react";
interface child{
    names:string[]
}
 const Find : React.FC<child>  = ({names})=>{

    const [fname,setFname] = useState('');
    const [bool,setbool] = useState(false);
    
    let flg : string | undefined;
    const clickkk = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setFname(e.target.value)
        flg = names.find((name)=>fname === name)
        if(flg !== null){
            setbool(true)
        }
    }

    return <div>
        <input value={fname} onChange={clickkk}/>
        <p>{bool}</p>
        <p>sfgedfgsgsf</p>

    </div>
 }

 export default Find;