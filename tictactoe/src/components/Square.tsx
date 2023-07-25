import { useState,useContext,createContext } from 'react'
import { UseTicContext } from '../context/TicContext';
import {Button} from 'react-bootstrap'

export default function Square({en,value,check,num} : {en : boolean,value : number | null,check : (arr : number[],player : string)=>void,num : number}){
    const [color,setColor] = useState('#F8FDCF');
    const [colorr,setColorr] = useState('#F8FDCF');
    const [val, setVal] = useState<String | null>(null)
    const styles = {height:'5rem', width:'5rem' , fontSize:'2.5rem', backgroundColor : color, color : colorr};
    
    const {turn,increment,x_arr,o_arr,setAns } = UseTicContext();
    const [enn,setEnn] = useState(en);
    console.log("ennn "+enn)
    function click(){
        
        if(turn % 2==0){
        setVal('X'); 
        setColor('#AAC8A7');
        setColorr('#FDFFAE');
        setEnn(true);
        x_arr.push(num)
        if(x_arr.length >= 3)
        check(x_arr,'X');
        }
        else{
        setVal('O');
        setColor('#FDFFAE');
        setColorr('#AAC8A7');
        setEnn(true);
        o_arr.push(num)
        if(o_arr.length>=3)
        check(o_arr,'O')
        }
        increment();

    }
    return(
        <>
        <Button variant='secondary' disabled={en || enn} style={styles} onClick={click}>{val}</Button>
        </>
    )
}