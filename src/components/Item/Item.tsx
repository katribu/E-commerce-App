
import { Items } from "../../utils/interfaces"
import { ReactNode } from "react"
import { useAppDispatch } from "../../app/hooks";
import './item.css'
import { addItemToCart } from "../../slices/cart";

interface ItemProps {
    inventory: Items[];
    children?: ReactNode;
}


export default function Item({inventory, children}:ItemProps) {

    const dispatch = useAppDispatch()

    const addToCart = (item: Items ) => {
        dispatch(addItemToCart(item))
        console.log(item)
    }

    const renderInventoryItems = inventory?.map((item,i) => {
        return (
            <div key={i} className="item">
                <div className="item-title-div">
                    <p>{item.title}</p>
                </div>

                <div className="item-img-div">
                <img src={item.image} alt={item.title} />
                </div>

                <div className="item-price-div">
                 <p>${item.price}</p>
                 <button onClick={()=>addToCart(item)}>{children}</button>
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