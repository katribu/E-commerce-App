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
                <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
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
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </li>
                    ))}
                </ul>
            </div>
    </div>
    )
}