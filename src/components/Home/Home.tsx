import { useAppSelector } from '../../app/hooks'
import Header from '../Header/Header'
import Item from '../Item/Item'
import { Mode, Items } from '../../utils/interfaces'
import { useState, useEffect } from "react"
import axios from 'axios'
import "./home.css"


export default function Home() {
    const theme:Mode["theme"] = useAppSelector(state => state.theme.value.theme)
    const mode:Mode["mode"] = useAppSelector(state => state.theme.value.isDarkMode)
    const myName:string = useAppSelector(state => state.user.name)
    
    const [inventoryList, setInventoryList] = useState<any | null>(null)

  
    useEffect(() => {
        getProducts()
    },[])

 

    // axios fetch request from Fake Store API
    const getProducts =  () => {
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
                    <p>Category: Jewellery</p>
                </div>
                
                <div>
                    <Item inventory={inventoryList} />
                </div>

            </div>
        </div>
    )

}
