import { ReactNode, createContext,useContext, useState } from "react";
import { cursorTo } from "readline";
import { Cart } from "../components/Cart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
    children : ReactNode
}

type CartItem = {
    id : number
    quantity :  number
}

type ShoppingCartContext = {
    totalquantity : number,
    getItemQuantity : (id : number) => number 
    increaseCartQuantity : (id : number) => void 
    decreaseCartQuantity : (id : number) => void 
    removeFromCart : (id : number) => void
    openCart : ()=> void
    closeCart : ()=> void
    isOpen : boolean  
    cartItems : CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({children} : ShoppingCartProviderProps){
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[]);
    const totalquantity = cartItems.reduce((a,c)=>a+c.quantity,0);
    const [isOpen,setIsOpen] = useState(false);

    const openCart = () => {setIsOpen(true)}
    const closeCart = () => {setIsOpen(false)}
    function getItemQuantity(id:number){
        return cartItems.find(item=> item.id === id )?.quantity || 0;
    }
    function increaseCartQuantity(id : number){
        // console.log('hii')
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null ){
                return [...currItems, { id,quantity :1}]
            }
            else{
                return currItems.map(item => {
                    if(item.id === id){
                        return { ...item, quantity: item.quantity + 1}
                    }
                    else{
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartQuantity(id : number){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity === 1 ){
                return currItems.filter(item => item.id!== id)
            }
            else{
                return currItems.map(item => {
                    if(item.id === id){
                        return { ...item, quantity: item.quantity - 1}
                    }
                    else{
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id : number){
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }
    return(
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            totalquantity,
            isOpen,
            openCart,
            closeCart,
            cartItems
        }}>
            {children}
          <Cart></Cart>
        </ShoppingCartContext.Provider>
    )


}