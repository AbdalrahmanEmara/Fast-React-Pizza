import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity, getQuantityById } from "./cartSlice";
import { useSelector } from "react-redux";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  const quantity = useSelector(getQuantityById(pizzaId));
    return (
        <div className="flex items-center gap-1">
            <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))} >-</Button>
            <span className="text-sm font-medium">{quantity}</span>
            <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))} >+</Button>
        </div>
    )
}