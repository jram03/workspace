import { useState , createContext, useContext,ReactNode} from 'react'

type TicContexttype = {
    turn : number;
    increment : () => void;
    x_arr : number[];
    o_arr : number[];
    ans : string;
    setAns : (i : string) => void
}

type TicContextProviderProps = {
    children : ReactNode
}

const TicContext = createContext({} as TicContexttype)

export function UseTicContext() { 
    return useContext(TicContext)
}

export function TicContextProvider({children} : TicContextProviderProps) { 
    const [turn,setTurn] = useState(0);
    const [x_arr,setXArr] = useState([]);
    const [o_arr,setOArr] = useState([]);
    const [ans,setAns] = useState('');
    const increment=()=>{
        setTurn(turn + 1)
    }
    return (<TicContext.Provider value={
        {turn,
        increment,
        x_arr,
        o_arr,
        ans,
        setAns }
        
    }>{children}
    </TicContext.Provider>)
}