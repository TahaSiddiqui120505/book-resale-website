import bookModel from "../models/bookModel.js";
import fs from "fs"

// add book item
const addBook = async(req,res) => {
     console.log("Received data:", req.body);
    let image_filename = req.file ? req.file.filename : null;
    const book = new bookModel({
        name: req.body.name,
        price: req.body.price,
        sem: req.body.sem,
        branch: req.body.branch,
        image: image_filename
    })
    try{
        await book.save();
        res.json({success: true, message:"Book Added"})
    }
    catch(error){
        console.error(error);
        res.status(500).json({success: false, message: "Error adding book", error: error.message})
    }
}

//all book list
const listBook = async(req,res) => {
try {
    const books = await bookModel.find({})
    res.json({success: true, data: books})
} catch (error) {
    console.log(error);
    res.json({success: false, message: "Error"})
}
}

//remove book items
const removeBook = async (req,res) => {
    try {
        const book = await bookModel.findById(req.body.id);
        fs.unlink(`uploads/${book.image}`, ()=>{})

        await bookModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Book Removed"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"})
    }
}

export {addBook, listBook, removeBook}