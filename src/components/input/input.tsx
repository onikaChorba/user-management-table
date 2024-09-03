import React from 'react';
import './input.styles.scss'
import search from '../../assets/img/search.svg'
export default function CustomInput() {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type to search..."
        className="input__field"
      // onChange={handleChange}
      />
      <img src={search} alt='search' className='input__icon' />
    </div>
  )
}
