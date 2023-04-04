
import { Items } from "../../utils/interfaces"
import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react"
import { useAppDispatch } from "../../app/hooks";
import './item.css'
import { addItemToCart } from "../../slices/cart";

interface ItemProps {
    inventory: Items[];
}


export default function Item({inventory}:ItemProps) {
    const [cart, setCart] = useState<React.SetStateAction<Items[]>>([])

    const dispatch = useAppDispatch()

    const addToCart = (item: Items ) => {
        setCart([item])
        dispatch(addItemToCart(item))
        console.log(item)
    }

    const renderInventoryItems = inventory?.map((item) => {
        return (
            <div key={item.id} className="item">
                <div className="item-title-div">
                    <p>{item.title}</p>
                </div>

                <div className="item-img-div">
                <img src={item.image} alt={item.title} />
                </div>

                <div className="item-price-div">
                 <p>${item.price}</p>
                 <button onClick={()=>addToCart(item)}><TiShoppingCart className="cart-icon"/></button>
                </div>
            </div>
        )
    })
    return (
        <div  className="items-container">
            {renderInventoryItems}
        </div>
    )
}