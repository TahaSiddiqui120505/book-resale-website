import React, { useState } from 'react'
import ExploreBooks from '../../components/ExploreBooks/ExploreBooks'
import BookDisplay from '../../components/Book Display/BookDisplay';

const Buy = () => {
        const [category,setCategory] = useState("aids");
  return (
    <div>
        <ExploreBooks category={category} setCategory={setCategory}></ExploreBooks>
        <BookDisplay category={category}></BookDisplay>
    </div>
  )
}

export default Buy
