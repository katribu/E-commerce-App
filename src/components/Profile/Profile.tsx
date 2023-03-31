import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { changeName } from '../../slices/users'
import Header from '../Header/Header'
import Item from '../Item/Item'
import { Mode, Items } from '../../utils/interfaces'
import { useState, useEffect } from "react"
import axios from 'axios'
import "./profile.css"


//The reason why your useEffect hook is infinitely rendering is because of the 
//way you are defining your inventoryCollection variable(when it was declared inside the Profile comp).
//When you define inventoryCollection variable, you are creating a new object reference on each render. 
//This means that every time the component re-renders, inventoryCollection will be a new object reference, 
//causing the useEffect to be re-triggered.

export default function Profile() {
    const theme:Mode["theme"] = useAppSelector(state => state.theme.value.theme)
    const mode:Mode["mode"] = useAppSelector(state => state.theme.value.isDarkMode)
    const myName:string = useAppSelector(state => state.user.name)
    const dispatch = useAppDispatch()


    const [newName, setNewName] = useState<string>("");
    const [inventoryList, setInventoryList] = useState<any | null>(null)

    // Add new Item to Inventory states & clear input fields
    // const [category, setCategory] = useState<string>("")
    // const [item, setItem] = useState<string>("")
    // const [price, setPrice] = useState<number>(0)
    // const [isInStock, setIsInStock] = useState<boolean>(true)

    
   
    useEffect(() => {
        getProducts()
    },[])

    // const onSubmitItem = async () => {
    //     try{
    //         console.log('product added.')
    //         getProducts()

    //     }catch(err){
    //         console.error(err)
    //     }
    // }

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
                
                {/* <div className="add-items-container">
                    <p>Add item to shop. </p>
                    <form>
                        <input type="text" placeholder="Category" onChange={(e)=>setCategory(e.target.value)}/>
                        <input type="text" placeholder="Item" onChange={(e)=>setItem(e.target.value)} />
                        <input type="number" placeholder="Price" onChange={(e)=> setPrice(Number(e.target.value))}/>
                        <br/>
                        <label>
                        <input type="checkbox" checked={isInStock} onChange={(e)=>setIsInStock(e.target.checked)} />
                        in stock
                        </label> <br/>
                
                        <button type="button" onClick={onSubmitItem}>Submit</button>
                    </form>
                </div> */}

            </div>
        </div>
    )

}

//  FILE UPLOADING CODE FIREBASE
// eslint-disable-next-line
{/* <p>Add a file.</p>
<input type="file" onChange={(e) => setFileUpload(e.target.files)}/>
<button onClick={uploadFiles}> Add </button> */}

// const [fileUpload, setFileUpload] = useState<any>(null)
    
//     const uploadFiles = async () => {
//         if (!fileUpload) return;
//         try {
//         const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
//       await uploadBytes(filesFolderRef, fileUpload);
//     } catch (err) {
//       console.error(err);
//     }
//    }