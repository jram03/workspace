interface childProps{
    color : string,
    capacity : number,
    children?: React.ReactNode;

}

export const Child = ({color}:childProps) =>{
    return <div>
        <h1>Child here {color}</h1>
    </div>
}

export const ChildAsFc : React.FC<childProps> = ({color,capacity,children}) =>{

    return <div>{color} {children}</div>
}

// export default {Child};