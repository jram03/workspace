import {ChildAsFc} from "./Child"

const Parent = ()=>{
    return <div>
        {/* <Child color="red" capacity={11}/>
        <Child color="blue" capacity={20}/> */}
        <ChildAsFc color='red' capacity={40}>
            blue
        </ChildAsFc>
    </div>
}

export default Parent; 