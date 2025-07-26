// //Gpt
// import React, { useContext } from "react";
// import "./BookItem.css";
// import { assets } from "../../assets/assets";
// import { StoreContext } from "../../context/StoreContext";

// const BookItem = ({ id, image, name, price }) => {
//   const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

//   return (
//     <div className="book-card">
//       <img src={image} alt={name} className="book-image" />

//       <div className="overlay">
//         <p className="namewe">{name}</p>
//         <p className="book-price">₹{price}</p>
//         {console.log("ID being used in cart button:", id)}
//         {cartItems[id] === 0 ? (
//           <button className="add-btn" onClick={() => addToCart(id)}>
//             Add to Bag
//           </button>
//         ) : (
//           <div className="counter-controls">
//             <img
//               src={assets.remove_icon_red}
//               alt="Remove"
//               onClick={() => removeFromCart(id)}
//             />
//             <p className="count-display">{cartItems[id]}</p>
//             <img
//               src={assets.add_icon_green}
//               alt="Add"
//               onClick={() => addToCart(id)}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookItem;





//YT
// import React, { useContext } from 'react'
// import './BookItem.css'
// import { assets } from '../../assets/assets'
// import { useState } from 'react'
// import { StoreContext } from '../../context/StoreContext'

// function BookItem ({id,name,price,image}) {
//   const [itemCount, setItemCount] = useState(0)

//   return (
//     <div className='food-item'>
//         <div className="food-item-img-container">
//             <img className='food-item-image' src={image} alt="" />
//             {/* <img className='food-item-image' src={url+"/images/"+image} alt="" /> */}
//             {!itemCount
//                 ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="" />
//                 :<div className='food-item-counter'>
//                   <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt='' />
//                   <p>{itemCount}</p>
//                   <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt='' />
//                   </div>
//             }
//         </div>
//         <div className="food-item-info">
//             <div className="food-item-name-rating">
//                 <p className='namewe'>{name}</p>
//                 {/* <img className='ratingstars' src={assets.rating_starts} alt="" /> */}
//             </div>
//             {/* <p className="food-item-desc">{description}</p> */}
//             <p className="food-item-price">Rs.{price}</p>
//         </div>
//     </div>
//   )
// }

// export default BookItem

import React, { useContext } from "react";
import "./BookItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const BookItem = ({ id, image, name, price }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Debug: This will show which books have missing IDs
  if (!id) {
    console.warn("Book with missing ID detected:", { name, image, price });
    return (
      <div className="book-card">
        <img src={image} alt={name} className="book-image" />
        <div className="overlay">
          <p className="namewe">{name}</p>
          <p className="book-price">₹{price}</p>
          <button className="add-btn" disabled>
            ID Missing
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="book-card">
      <img src={image} alt={name} className="book-image" />
      <div className="overlay">
        <p className="namewe">{name}</p>
        <p className="book-price">₹{price}</p>
        {!cartItems[id] ? (
          <button 
            className="add-btn" 
            onClick={() => {
              console.log("Attempting to add book ID:", id);
              addToCart(id);
            }}
          >
            Add to Bag
          </button>
        ) : (
          <div className="counter-controls">
            <img
              src={assets.remove_icon_red}
              alt="Remove item"
              onClick={() => removeFromCart(id)}
            />
            <p className="count-display">{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt="Add more"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookItem;