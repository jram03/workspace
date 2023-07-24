import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utils/formatCurrency"
import storeItems from './../data/items.json'
export function Cart() {
    let totalamt =0;
    const {isOpen,closeCart,cartItems,totalquantity} = useShoppingCart();
    return (<Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>   
            <Stack gap={3}>
            {cartItems.map(item => {
                return( <CartItem key={item.id} {...item}></CartItem> )
            })}
            {totalquantity>0 && 
            <div className="ms-auto fw-bold fs-5">
                Total {formatCurrency(cartItems.reduce((a,c)=>{
                    const item = storeItems.find(i => i.id === c.id)
                    totalamt = a +( item?.price || 0)* c.quantity ;
                    return totalamt;
                },0))}
            </div>}
            {totalamt === 0 && 
                <div style={{textAlign:"center"}}>No Items Added</div>
            }
            </Stack> 
        </Offcanvas.Body>
    </Offcanvas>)
}