import React, { useState } from "react";
import Find from "./find";

const Inputt : React.FC = () => {
    const [name, setName] = useState('')
    const [names,setNames] = useState<string[]>([]);

    const onchanges = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }

    const clickk = () =>{
        setNames([...names,name]);
    }

    return(
        <div>
            <input value={name} onChange={onchanges} />
            <button onClick={clickk}>click</button>
            {names.map((n,i)=><div key={i}>{n}</div>)}
            <Find names={names}/>
            
            

        </div>
    )
}

export default Inputt;