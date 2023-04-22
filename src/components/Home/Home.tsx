import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Header from '../Header/Header';
import Category from '../CategoryList/Category';
import Item from '../Item/Item';
import { Mode, Items } from '../../utils/interfaces';
import { useState, useEffect } from "react";
import axios from 'axios';
import "./home.css";
import { TiShoppingCart } from "react-icons/ti";
import { addItemToCart } from '../../slices/cart';


export default function Home() {
    const theme:Mode["theme"] = useAppSelector(state => state.theme.value.theme)
    const mode:Mode["mode"] = useAppSelector(state => state.theme.value.isDarkMode)
    
    const [inventoryList, setInventoryList] = useState<any | null>(null)
    const [allCategories, setAllCategories] = useState<string[]>(["Category"])
    const [category, setCategory] = useState<string>(allCategories[0])

    const dispatch = useAppDispatch()
    
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
            })
            .catch(function (error: any) {
                console.error(error);
            });
    }

    return(
        <div className={`main-container`}>
            <div>
                <Header />
            </div>

            <div className={`second-container ${mode? theme : "light-mode"}`}>
                <div>
                    <div className="profile-title">
                        <h1>Let's Browse!</h1>
                    </div>
                </div>

                <div>
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
                    children={<TiShoppingCart className="cart-icon" />}
                    onClick={(item)=>{
                        dispatch(addItemToCart(item))
                    }}
                    />
                    
                </div>

            </div>
        </div>
    )
    
}

