// import jwt from "jsonwebtoken"

// const authMiddleware = async (req,res,next) => {
//     const {token} = req.headers;
//     if (!token){
//         return res.json({success:false,message:"Not Authorized Login Again"})
//     }
//     try {
//         const token_decode = jwt.verify(token,process.env.JWT_SECRET);
//         req.body.userId = token_decode.id;
//         next();
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

// export default authMiddleware;

//GPT
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: "Not Authorized. Login again." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id }; // ✅ assign here
        next();
    } catch (error) {
        console.log("Auth error:", error);
        res.json({ success: false, message: "Invalid token." });
    }
};

export default authMiddleware;
