import React from 'react'

const List = ({title, img, location} ) => {
  return (
     <>
      <ul>
        <li>{title}</li>
        <li>{img}</li>
        <li>{location}</li>
      </ul>
     </>
  )
}

export default List