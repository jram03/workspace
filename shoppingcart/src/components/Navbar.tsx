import { Container,Nav ,Button , Navbar as Navv } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import cartIcon from "./../icons/icons8-cart-64.png"
import { useShoppingCart } from '../context/ShoppingCartContext'
export function Navbar(){
    const {totalquantity} = useShoppingCart();
    const quantity = totalquantity;
    const {openCart} = useShoppingCart();
    return <Navv className='bg-white shadow-sm mb-3'>
        <Container>

            <Nav className='me-auto'>
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
            </Nav>   
            
            <Button variant='outline' className='rounded-circle' onClick={openCart}           >
            <img height='30rem' width='30rem' src={cartIcon} ></img>
        {
            (quantity>0) && (<div 
             className='rounded-circle bg-danger d-flex justify-content-center align-items-center' 
             style={{
                color: "white",
                position:'relative',
                height : '1rem',
                width : '1rem',
                right: '-0.75rem',
                bottom:'2rem',
                fontSize: '0.7rem',
                transform :'translate(25%,-25%)'
             }}
             >
                {quantity}
             </div>)
}
            </Button>            
            
        </Container>

    </Navv>
}