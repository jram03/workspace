import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from './../data/items.json'
import { formatCurrency } from "../utils/formatCurrency";
type CartItemProps = {
    id : number , 
    quantity : number
}
export function CartItem({id, quantity} : CartItemProps){
    const { removeFromCart} = useShoppingCart();
    const item = storeItems.find(i=> i.id === id)
    if(id==null) return null 

    return(
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <div><img src={item?.image} height={75} width={125} style={{objectFit:"contain"}} /></div>
            <div className="me-auto">
                <div>
                    {item?.name}{" "}
                    {quantity > 1 && (
                        <span className="text-muted" style={{fontSize : ".65rem"}}>
                            x{quantity}
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{fontSize : ".75rem"}}>
                    {formatCurrency(item?.price||0)}
                </div>
            </div>
            <Button variant="outline-danger" size="sm" onClick={()=>removeFromCart(item?.id || 0)}>&times;</Button>

        </Stack>
    )

    return(<>hiii</>)
}