import { UseTicContext } from "../context/TicContext";
import Square from "./Square";
import {Row,Col} from 'react-bootstrap'
import {useState} from 'react'
export default function Board(){
    const [en,setEn]=useState(false);
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    const {turn,increment,x_arr,o_arr,setAns } = UseTicContext();
    let f=0;
    function check(arr : number[],player : string){
        for(let i of lines){
            if(i.every(j=>arr.includes(j))){

                setAns(player + " wins"); 
                setEn(true);
                f=1;
                
                break;
            }
        }
            if(turn==8 && f==0)
            setAns("Match draw")
        
    
    } 
    return(
        <div className="mt-5">
        <Row className="justify-content-center">
        <Square en={en} value={null} check={check} num={0} />
        <Square en={en} value={null} check={check} num={1} />
        <Square en={en} value={null} check={check} num={2} />
        </Row>
        <Row className="justify-content-center">
        <Square en={en} value={null} check={check} num={3} />
        <Square en={en} value={null} check={check} num={4} />
        <Square en={en} value={null} check={check} num={5} />
        </Row>
        <Row className="justify-content-center">
        <Square en={en} value={null} check={check} num={6} />
        <Square en={en} value={null} check={check} num={7} />
        <Square en={en} value={null} check={check} num={8} />
        </Row>
        </div>
    )
}