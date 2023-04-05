import { useAppSelector } from '../../app/hooks'
import Header from '../Header/Header'
import Category from '../CategoryList/Category'
import Item from '../Item/Item'
import { Mode, Items } from '../../utils/interfaces'
import { useState, useEffect } from "react"
import axios from 'axios'
import "./home.css"
import { TiShoppingCart } from "react-icons/ti";


export default function Home() {
    const theme:Mode["theme"] = useAppSelector(state => state.theme.value.theme)
    const mode:Mode["mode"] = useAppSelector(state => state.theme.value.isDarkMode)
    const myName:string = useAppSelector(state => state.user.name)
    
    const [inventoryList, setInventoryList] = useState<any | null>(null)
    const [allCategories, setAllCategories] = useState<string[]>(["Category"])
    const [category, setCategory] = useState<string>(allCategories[0])
  
    useEffect(() => {
        getCategories()
    },[])

    //axios fetch request the categories
    const getCategories = () => {
        const options = {
            method:'GET',
            url:'https://fakestoreapi.com/products/categories',
        }

        axios
            .request(options)
            .then(function ({ data }) {
                setAllCategories(data);
            })
            .catch(function (error: any) {
                console.error(error);
            });
    }
 

    // axios fetch request from Fake Store API
    const renderAllProducts =  () => {
        const options = {
            method:'GET',
            url: 'https://fakestoreapi.com/products',
        }

        axios
            .request(options)
            .then(function ({ data }: { data: Items }) {
                setInventoryList(data);
                console.log(data)
            })
            .catch(function (error: any) {
                console.error(error);
            });
    }

    const renderChosenCategory = (category:string) => {
        const options = {
            method: 'GET',
            url: `https://fakestoreapi.com/products/category/${category}`
        }

        axios 
            .request(options)
            .then(function ({ data }) {
                setInventoryList(data);
                console.log(data)
            })
            .catch(function (error: any) {
                console.error(error);
            });
    }

    return(
        <div className={`main-container`}>
            <div>
                <Header userName={myName} />
            </div>

            <div className={`second-container ${mode? theme : "light-mode"}`}>
                <div>
                    <div className="profile-title">
                        <h1>Welcome {myName}!</h1>
                    </div>
                </div>

                <div>
                    <h2>Let's Browse!</h2>
                    <div className="category-div">
                        <Category 
                            onChange={option => {
                                setCategory(option)
                                renderChosenCategory(option)
                            }}
                            categoryList={allCategories} 
                            category={category}
                        />
                        <button onClick={renderAllProducts}>All Categories</button>
                    </div>
                </div>
                
                <div>
                    <Item 
                    inventory={inventoryList} 
                    children={<TiShoppingCart className="cart-icon"
                    
                    />}
                    />
                </div>

            </div>
        </div>
    )

}
