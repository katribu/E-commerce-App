
import { Items } from "../../utils/interfaces"
import { ReactNode } from "react"
import './item.css'

interface ItemProps {
    inventory: Items[];
    children?: ReactNode;
    onClick: (item: Items) => void;
}


export default function Item({inventory, children, onClick}:ItemProps) {


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
                 <button onClick={()=> onClick(item)}>{children}</button>
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