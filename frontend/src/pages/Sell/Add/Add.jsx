import React, {  useState } from "react";
import './Add.css'
import { assets } from "../../../assets/assets";
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {
      const [image,setImage] = useState(false);
          const [data,setData] = useState({
        name:"",
        sem:"sem 1",
        branch:"aids",
        price:"",
    })

        const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

        const onSubmitHandler = async (event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("sem",data.sem)
        formData.append("price",Number(data.price))
        formData.append("branch",data.branch)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/book/add`,formData)
        if (response.data.success) {
            setData({
              name:"",
              sem:"sem1",
              branch:"aids",
              price:"",
            })
            setImage(false)
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
    }

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img className="image" src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Type here" />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Semester</p>
            <select onChange={onChangeHandler}
              className="selectt"
              name="sem"
                value={data.sem}
            >
              <option value="sem1">Semester 1</option>
              <option value="sem2">Semester 2</option>
              <option value="sem3">Semester 3</option>
              <option value="sem4">Semester 4</option>
              <option value="sem5">Semester 5</option>
              <option value="sem6">Semester 6</option>
              <option value="sem7">Semester 7</option>
              <option value="sem8">Semester 8</option>
            </select>
          </div>

          <div className="add-branch flex-col">
            <p>Branch</p>
            <select onChange={onChangeHandler} name="branch" value={data.branch} required>
              <option value="">Select Branch</option>
              <option value="aids">AI & DS</option>
              <option value="comps">Computer Engineering</option>
              <option value="elec">Electrical Engineering</option>
              <option value="mech">Mechanical Engineering</option>
              <option value="civil">Civil Engineering</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Book Price</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder="$20" />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
