import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { changeName } from '../../slices/users'
import Header from '../Header/Header'
import Item from '../Item/Item'
import { Mode, Items } from '../../utils/interfaces'
import { useState, useEffect } from "react"
import axios from 'axios'
import "./profile.css"


export default function Profile() {
    const theme:Mode["theme"] = useAppSelector(state => state.theme.value.theme)
    const mode:Mode["mode"] = useAppSelector(state => state.theme.value.isDarkMode)
    const myName:string = useAppSelector(state => state.user.name)
    const dispatch = useAppDispatch()


    const [newName, setNewName] = useState<string>("");
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

                    <input 
                        type="text" 
                        placeholder="Edit Name" 
                        onChange={(e: any) => setNewName(e.target.value)}
                    />
                    <button 
                        onClick={()=> {
                            dispatch(changeName(newName))
                        }}
                    >Edit Name
                    </button>

                    <div>
                    <h1>Let's Browse!</h1>
                    <p>Category: Jewellery</p>
                    <div>
                    <Item inventory={inventoryList} />
                    </div>
                </div>

                </div>
                
                

            </div>
        </div>
    )

}
