import userModel from "../models/userModel.js"

//Yt
// add items to user cart
// const addToCart = async (req,res) => {
//     try {
//         let userData = await userModel.findById(req.body.userId);
//         let cartData = userData.cartData || {};
//         if (!cartData[req.body.itemId])
//         {
//             cartData[req.body.itemId] = 1;
//         }
//         else{
//             cartData[req.body.itemId] += 1;
//         }
//         await userModel.findByIdAndUpdate(req.body.userId,{cartData})
//         res.json({success:true,message:"Added to cart"});
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }


// remove items from user cart
// const removeFromCart = async (req,res) => {
//     try {
//         let userData = await userModel.findById(req.body.userId);
//         let cartData = await userData.cartData;
//         if (cartData[req.body.itemId]>0){
//             cartData[req.body.itemId] -= 1;
//         }
//         await userModel.findByIdAndUpdate(req.body.userId,{cartData});
//         res.json({success:true,message:"Removed from cart"})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

//YT
// const getCart = async (req,res) => {
//     try {
//         let userData = await userModel.findById(req.body.userId);
//         let cartData = await userData.cartData;
//         res.json({success:true,cartData})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

//Gpt
// const getCart = async (req, res) => {
//     try {
//         const userId = req.user.id; // Clean and consistent

//         const userData = await userModel.findById(userId);
//         if (!userData) {
//             return res.status(404).json({ success: false, message: "User not found" });
//         }

//         const cartData = userData.cartData || {};
//         res.json({ success: true, cartData });
//     } catch (error) {
//         console.log("Get cart error:", error);
//         res.json({ success: false, message: "Error fetching cart" });
//     }
// };

// const addToCart = async (req, res) => {
//     try {
//         let userData = await userModel.findById(req.user.id); // changed line
//         let cartData = userData.cartData || {};
        
//         if (!cartData[req.body.itemId]) {
//             cartData[req.body.itemId] = 1;
//         } else {
//             cartData[req.body.itemId] += 1;
//         }

//         await userModel.findByIdAndUpdate(req.user.id, { cartData }); // changed line
//         res.json({ success: true, message: "Added to cart" });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" });
//     }
// };
// // const addToCart = async (req, res) => {
// //     try {
// //         // 1. Validate input
// //         if (!req.body.itemId) {
// //             return res.status(400).json({
// //                 success: false,
// //                 message: "itemId is required"
// //             });
// //         }

// //         // 2. Get user (with error handling)
// //         const userData = await userModel.findById(req.user.id);
// //         if (!userData) {
// //             return res.status(404).json({
// //                 success: false,
// //                 message: "User not found"
// //             });
// //         }

// //         // 3. Initialize cart
// //         const cartData = userData.cartData || {};

// //         // 4. Update quantity
// //         cartData[req.body.itemId] = (cartData[req.body.itemId] || 0) + 1;

// //         // 5. Save changes
// //         await userModel.findByIdAndUpdate(
// //             req.user.id,
// //             { cartData },
// //             { new: true, runValidators: true }
// //         );

// //         // 6. Return response
// //         res.status(200).json({
// //             success: true,
// //             message: "Added to cart",
// //             cartData
// //         });

// //     } catch (error) {
// //         console.error("Add to cart error:", error);
// //         res.status(500).json({
// //             success: false,
// //             message: error.message || "Internal server error" // Show actual error
// //         });
// //     }
// // };

// const removeFromCart = async (req, res) => {
//     try {
//         let userData = await userModel.findById(req.user.id); // changed line
//         let cartData = userData.cartData;

//         if (cartData[req.body.itemId] > 0) {
//             cartData[req.body.itemId] -= 1;
//         }

//         await userModel.findByIdAndUpdate(req.user.id, { cartData }); // changed line
//         res.json({ success: true, message: "Removed from cart" });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" });
//     }
// };
// // const removeFromCart = async (req, res) => {
// //     try {
// //         // 1. Get user and validate
// //         let userData = await userModel.findById(req.user.id);
// //         if (!userData) {
// //             return res.status(404).json({ 
// //                 success: false, 
// //                 message: "User not found" 
// //             });
// //         }

// //         // 2. Initialize cart if empty
// //         let cartData = userData.cartData || {};

// //         // 3. Check if item exists in cart
// //         if (!cartData[req.body.itemId]) {
// //             return res.status(400).json({ 
// //                 success: false, 
// //                 message: "Item not in cart" 
// //             });
// //         }

// //         // 4. Update quantity (and remove if reaches 0)
// //         if (cartData[req.body.itemId] > 0) {
// //             cartData[req.body.itemId] -= 1;
            
// //             if (cartData[req.body.itemId] === 0) {
// //                 delete cartData[req.body.itemId];
// //             }
// //         }

// //         // 5. Save updated cart
// //         await userModel.findByIdAndUpdate(req.user.id, { cartData });

// //         // 6. Return success with updated cart
// //         res.status(200).json({ 
// //             success: true, 
// //             message: "Removed from cart",
// //             cartData
// //         });

// //     } catch (error) {
// //         console.error("Remove from cart error:", error);
// //         res.status(500).json({ 
// //             success: false, 
// //             message: "Internal server error" 
// //         });
// //     }
// // };



// export {addToCart,removeFromCart,getCart}

const getCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const userData = await userModel.findById(userId);
        
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const cartData = userData.cartData || {};
        res.json({ success: true, cartData });
    } catch (error) {
        console.log("Get cart error:", error);
        res.json({ success: false, message: "Error fetching cart" });
    }
};

const addToCart = async (req, res) => {
    try {
        if (!req.body.itemId) { // ✅ Added validation
            return res.status(400).json({ success: false, message: "Item ID missing" });
        }

        let userData = await userModel.findById(req.user.id);
        let cartData = userData.cartData || {};
        
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.user.id, { cartData });
        res.json({ success: true, message: "Added to cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const removeFromCart = async (req, res) => {
    try {
        if (!req.body.itemId) { // ✅ Added validation
            return res.status(400).json({ success: false, message: "Item ID missing" });
        }

        let userData = await userModel.findById(req.user.id);
        let cartData = userData.cartData || {};

        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
            
            if (cartData[req.body.itemId] <= 0) { // ✅ Delete key if quantity ≤ 0
                delete cartData[req.body.itemId];
            }
        }

        await userModel.findByIdAndUpdate(req.user.id, { cartData });
        res.json({ success: true, message: "Removed from cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { addToCart, removeFromCart, getCart };