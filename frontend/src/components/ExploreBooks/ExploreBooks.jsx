import React from 'react'
import './ExploreBooks.css'
import { explore_books_list } from '../../assets/assets'

const ExploreBooks = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1 className='h1e'>Explore Your Branch Books</h1>
      <p className='explore-menu-text'>Choose your branch to explore relevant books.</p>
      <div className="explore-menu-list">
        {explore_books_list.map((item, index) => (
          <div
            onClick={() => setCategory(prev => prev === item.branch ? "All" : item.branch)}

            key={index}
            className='explore-menu-list-item'
          >
            <img
              className={category === item.branch ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p className='item_menu'>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExploreBooks
