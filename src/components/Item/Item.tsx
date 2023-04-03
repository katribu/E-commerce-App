
import { Items } from "../../utils/interfaces"
import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react"
import './item.css'

interface ItemProps {
    singleItems?: Items;
    inventory: Items[];
}


export default function Item({inventory}:ItemProps) {
    const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false)
    const [cart, setCart] = useState<ItemProps["inventory"]>([])

    const addToCart = (item: ItemProps["singleItems"]) => {
        setIsAddedToCart(true)
        setCart(item => ({...item}))
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