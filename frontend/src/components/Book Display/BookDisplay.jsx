import React, { useContext } from "react";
import "./BookDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import BookItem from "../BookItem/BookItem";

const BookDisplay = ({ category }) => {
  const { books } = useContext(StoreContext);

  return (
    <div className="book-display" id="book-display">
      <h2 className="h2we">
        {`Books for ${
          category.charAt(0).toUpperCase() + category.slice(1)
        } Branch`}
      </h2>
      <div className="book-display-list">
        {books
          .filter((item) => item.branch === category)
          .map((item, index) => (
            <BookItem
              // key={index}
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default BookDisplay;
