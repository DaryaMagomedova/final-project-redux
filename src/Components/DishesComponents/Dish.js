import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addItemToCart} from "../../Redux/cartSlice";

const Dish = ({dish}) => {
    const [quantity,setQuantity] = useState(1);
    const dispatch = useDispatch()
    return (<div>
        <img src = {`${dish.img}.jpg`}/>
        <h2> {dish.name}</h2>
        <p>$ {dish.price}</p>
        <ChangeQuantity quantity ={quantity} setQuantity = {setQuantity}/>
       <button onClick ={() => {dispatch(addItemToCart({dish,quantity}));
       }}>Add to cart</button>
    </div>)
}
export default Dish;