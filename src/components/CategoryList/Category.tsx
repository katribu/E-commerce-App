import {useState} from "react"
import "./category.css"
 
interface CategoryProps {
    category: string;
    categoryList: string[];
    onChange: (option: CategoryProps["category"]) => void
}

export default function Category({categoryList, onChange, category}:CategoryProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const selectOption = (option: string) => {
        onChange(option)
    }

    return (
        <div className="category-container">
            <div className="optionsContainer" onBlur={()=>setIsOpen(false)} onClick={()=> setIsOpen(!isOpen)}>
                <span>{category}</span>
                <div className="buttonsContainer">
                    <div className="divider"></div>
                    <div className="caret"></div>
                </div>
            </div>

            <div className="category-options" >
                <ul className={`category-list ${isOpen? "show":""}`}>
                    {categoryList.map(cat => (
                        <li 
                        key={cat} 
                        className="category"
                        onClick={(e) => {
                            e.stopPropagation()
                            selectOption(cat)
                            setIsOpen(false)
                        }}

                        >
                            {cat}
                        </li>
                    ))}
                </ul>
            </div>
    </div>
    )
}