
import { Items } from "../../utils/interfaces"
import './item.css'

interface ItemProps {
    inventory: Items[];
}

export default function Item({inventory}:ItemProps) {

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