import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import bookRouter from "./routes/bookRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import 'dotenv/config'
// app config
const app = express()
const PORT = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoint
app.use("/api/book", bookRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)

app.get("/",(req,res)=> {
    res.send("Api working")
})

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
    
})