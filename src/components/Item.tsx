
import { Items } from "../interfaces"

interface ItemProps {
    inventory: Items[];
}

export default function Item({inventory}:ItemProps) {

    const renderInventoryItems = inventory?.map((item) => {
        return (
            <div key={item.id} className="item">
                <h2>{item.category}</h2>
                <p>{item.item}</p>
                <p>${item.price}</p>
            </div>
        )
    })
    return (
        <div  className="items-container">
            {renderInventoryItems}
        </div>
    )
}