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

    //     const addToCart = async(itemId) => {
    //     if (!cartItems[itemId]) {
    //         setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    //     }
    //     else {
    //         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    //     }
    //     if(token){
    //         await axios.post(url+"/api/cart/add", {itemId},{headers:{token}})
    //     }
    // }

    // const removeFromCart = (itemId) => {
    //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    // }

    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const item in cartItems) 
    //     {
    //         if (cartItems[item] > 0) {
    //             let itemInfo = books.find((product) => product.id === item)
    //             totalAmount += itemInfo.price * cartItems[item];
    //         }
    //     }
    //     return totalAmount;
    //}

const addToCart = async (itemId) => {
    // Debug logs
    console.log("Adding item:", itemId); 
    console.log("Token exists:", !!token);

    if (!cartItems[itemId]) {
        setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
        try {
            await axios.post(
                `${url}/api/cart/add`,
                { itemId }, // Ensure this matches backend expectation
                { headers: { token } } // Verify header name matches backend
            );
        } catch (err) {
            console.log("Add to cart error:", err.response?.data);
        }
    }
};

const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
        await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } })
            .catch(err => console.log("Remove from cart failed:", err));
    }
};

    //Gpt
    const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            const itemInfo = books.find((product) => product.id == item); // use `==` to match "1" and 1
            if (itemInfo) {
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
    }
    return totalAmount;
};


const fetchBooks = async () => {
  try {
    const response = await axios.get(`${url}/api/book/list`);
    const processedBooks = response.data.data.map(book => ({
      ...book,
      id: book.id || book._id // Ensure id exists
    }));
    setBooks(processedBooks);
    console.log("Processed books data:", processedBooks);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

    const loadCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(response.data.cartData);
    }

    useEffect(()=>{
        async function loadData() {
            await fetchBooks();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
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