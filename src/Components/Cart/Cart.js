import { useSelector } from "react-redux";
import {getCartItems, getTotalPrice} from "../../Redux/cartSlice";
import CartItem from "./CartItem";
const Cart =()=>{
  const cartItems = useSelector(getCartItems);
  const TotalPrice = useSelector(getTotalPrice);
   return (<div>
 <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png"/>
 <h3>TOTAL: $ {TotalPrice}</h3>
 {cartItems.map(cartItem=> <CartItem cartItem = {cartItem}/>)}
 </div>)
}
export default Cart;