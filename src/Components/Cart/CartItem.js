import dataDishes from "../../data/dataDishes";
import { useDispatch } from "react-redux";
import {removeItemFromCart} from "../../Redux/cartSlice";

const CartItem = ({cartItem})=>{
    const dishes = dataDishes.find(item=>item.id=== cartItem.dishId)
    const dispatch = useDispatch();
    return(<div>
        <p>{dishes.name}</p>
        <p>{cartItem.quantity} portion(s)</p>
        <p>Price:${dishes.price*cartItem.quantity}</p>
        <img className="icon" src = "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png "/>
        <span onClick={()=> dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
        </span>
    </div>)
}
export default CartItem;