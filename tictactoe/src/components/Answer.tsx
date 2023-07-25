import { UseTicContext } from "../context/TicContext"

export function Answer(){
    const {ans} = UseTicContext();
    return(<>
        <h1 className="mt-5" style={{textAlign:"center",fontSize:'5rem'}}>{ans}</h1>
    </>)
}