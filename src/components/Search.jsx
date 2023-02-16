import React from 'react'

const Search = ({ value, setValue }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="type to search..."
        className="px-2 py-2 search"
      />
    </div>
  )
}

export default Search
