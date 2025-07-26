import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  branch: { type: String, required: true },
  sem: { type: String, required: true }
})

const bookModel = mongoose.models.book || mongoose.model("book",bookSchema)

export default bookModel;