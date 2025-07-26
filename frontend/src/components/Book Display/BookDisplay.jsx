//Gpt
// import React, { useContext } from "react";
// import "./BookDisplay.css";
// import BookItem from "../BookItem/BookItem";
// import { StoreContext } from "../../context/StoreContext";

// const BookDisplay = ({ category }) => {
//   const { books } = useContext(StoreContext);
//   console.log("Selected category:", category);
//   console.log("All book branches:", books.map((book) => book.branch));


//   // Filter books by selected branch
//   const filteredBooks = books.filter((book) => book.branch === category);
//   console.log("Filtered books for this branch:", filteredBooks);

//   // Group books by semester (e.g., sem1, sem2)
//   const booksBySemester = {};
//   filteredBooks.forEach((book) => {
//     const sem = book.sem;
//     if (!booksBySemester[sem]) {
//       booksBySemester[sem] = [];
//     }
//     booksBySemester[sem].push(book);
//   });

//   return (
//     <div className="book-display">
//       {Object.keys(booksBySemester)
//         .sort((a, b) => parseInt(a.replace("sem", "")) - parseInt(b.replace("sem", "")))
//         .map((sem) => (
//           <div className="First-Year" key={sem}>
//             <div className="fy-left">
//               <h2>Sem {sem.replace("sem", "")} Books</h2>
//               <p>Explore curated semester {sem.replace("sem", "")} books from the {category.toUpperCase()} branch.</p>
//             </div>
//             <div className="fy-right">
//               {booksBySemester[sem].map((book) => (
//                 <BookItem
//                   key={book.id}
//                   id={book.id}
//                   name={book.name}
//                   price={book.price}
//                   image={book.image}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default BookDisplay;




//YT
// import React, { useContext } from "react";
// import "./BookDisplay.css";
// import { StoreContext } from "../../context/StoreContext";
// import BookItem from "../BookItem/BookItem";

// const BookDisplay = ({ category }) => {
//   const { books } = useContext(StoreContext);

//   return (
//     <div className="book-display" id="book-display">
//       <h2 className="h2we">
//         {`Books for ${
//           category.charAt(0).toUpperCase() + category.slice(1)
//         } Branch`}
//       </h2>
//       <div className="book-display-list">
//         {books
//           .filter((item) => item.branch === category)
//           .map((item, index) => (
//             <BookItem
//               // key={index}
//               key={item._id}
//               id={item._id}
//               name={item.name}
//               price={item.price}
//               image={item.image}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default BookDisplay;

import React, { useContext } from "react";
import "./BookDisplay.css";
import BookItem from "../BookItem/BookItem";
import { StoreContext } from "../../context/StoreContext";

const BookDisplay = ({ category }) => {
  const { books } = useContext(StoreContext);

  // Filter books by branch
  const filteredBooks = books.filter((book) => book.branch === category);

  // Log books with missing IDs (debug only)
  filteredBooks.forEach(book => {
    if (!book.id) console.warn("Book missing ID:", book.name); 
  });

  // Group by semester
  const booksBySemester = {};
  filteredBooks.forEach((book) => {
    const sem = book.sem;
    if (!booksBySemester[sem]) booksBySemester[sem] = [];
    booksBySemester[sem].push(book);
  });

  return (
    <div className="book-display">
      {Object.keys(booksBySemester)
        .sort((a,b) => parseInt(a.replace("sem","")) - parseInt(b.replace("sem","")))
        .map((sem) => (
          <div className="First-Year" key={sem}>
            <div className="fy-left">
              <h2>Sem {sem.replace("sem","")} Books</h2>
              <p>Explore curated semester {sem.replace("sem","")} books from the {category.toUpperCase()} branch.</p>
            </div>
            <div className="fy-right">
              {booksBySemester[sem].map((book) => {
  const bookId = book.id || book._id; // Fallback to _id if id doesn't exist
  if (!bookId) {
    console.error("Invalid book - missing both id and _id:", book.name);
    return null;
  }
  
  return (
    <BookItem
      key={bookId}
      id={bookId}
      name={book.name}
      price={book.price}
      image={book.image}
    />
  );
})}
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookDisplay;
