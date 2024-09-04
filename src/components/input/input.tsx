import React from 'react';
import './input.styles.scss'
import searchIcon from '../../assets/img/search.svg'

export default function CustomInput({ search, onChange }: any) {
  return (
    <div className="input">
      <input
        type="text"
        value={search}
        placeholder="Type to search..."
        className="input__field"
        onChange={onChange}
      />
      <img src={searchIcon} alt='search' className='input__icon' />
    </div>
  )
}
