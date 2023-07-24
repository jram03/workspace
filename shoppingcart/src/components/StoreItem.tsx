import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface StoreItemProps  {
    id : number ;
    name : string ; 
    price : number ;
    image : string ;

}

export function StoreItem({id,name,price,image} : StoreItemProps){
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();
    const quantity:number =getItemQuantity(id);
    return <Card>
        <Card.Img variant="top" src={image} height="200px" style={ {objectFit : "contain"} } />


        <Card.Body className='d-flex flex-column'>
            <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4" >
                <span className="fs-2" style={{textOverflow : "ellipsis", overflow:"hidden", whiteSpace: "nowrap"}}>{name}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? (
                    <Button className="w-100" onClick={()=>increaseCartQuantity(id)}>+ Add to Cart</Button>
                ):<div className="d-flex align-items-center flex-column" style={{gap : ".5rem"}}>
                    <div className="d-flex align-items-center justify-content-center" style={{gap : ".5rem"}}>
                        <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                        <span className="fs-3">{quantity}</span>in cart
                        <Button onClick={()=>increaseCartQuantity(id)}>+</Button>  
                    </div>
                    <Button onClick={()=>removeFromCart(id)} variant="danger" size="sm" >Remove</Button>
            </div>}
            </div>
        </Card.Body>
    </Card>
}