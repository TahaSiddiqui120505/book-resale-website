import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://siddiquitaha120:TahaSid%4012@cluster0.iqv2d3s.mongodb.net/book-resale')
    .then(()=>console.log("DB connected"));
}
