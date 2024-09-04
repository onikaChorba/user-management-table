import React, { ChangeEventHandler } from 'react';
import './input.styles.scss'
import searchIcon from '../../assets/img/search.svg'

export default function CustomInput({ search, onChange }: { search: string, onChange: ChangeEventHandler<HTMLInputElement> }) {
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
