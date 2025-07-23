// import { createContext, useEffect,  useState } from "react";
// import {books} from '../assets/assets'
// export const StoreContext = createContext(null)

// const StoreContextProvider = (props) => {

//     const [cartItems, setCartItems] = useState({});
//     const url = "http://localhost:4000"
//     const [token, setToken] = useState("")


//         const addToCart = (itemId) => {
//         if (!cartItems[itemId]) {
//             setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
//         }
//         else {
//             setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
//         }
//     }

//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
//     }

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) 
//         {
//             if (cartItems[item] > 0) {
//                 let itemInfo = books.find((product) => product.id === item)
//                 totalAmount += itemInfo.price * cartItems[item];
//             }
//         }
//         return totalAmount;
//     }

//         useEffect(()=> {
//             if (localStorage.getItem("token")) {
//                 setToken(localStorage.getItem("token"));
//             }
//     },[])

//     const contextValue = {
//         books,
//         cartItems,
//         setCartItems,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//         url,
//         token,
//         setToken
//     }

//         return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }

// export default StoreContextProvider;

//Gpt
import { createContext, useEffect,  useState } from "react"; 
export const StoreContext = createContext(null)
import axios from 'axios'

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000"
    const [token, setToken] = useState("")
    const [books, setBooks] = useState([])

        const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) 
        {
            if (cartItems[item] > 0) {
                let itemInfo = books.find((product) => product.id === item)
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

        const fetchBooks = async () => {
        const response = await axios.get(url+"/api/book/list");
        setBooks(response.data.data)
        console.log("Fetched books:", response.data.data);

    }

    useEffect(()=>{
        async function loadData() {
            await fetchBooks();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const contextValue = {
        books,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

        return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;