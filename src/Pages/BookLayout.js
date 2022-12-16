import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const BookLayout = () => {
  return (
    <>        
    <h1>
    BookList
    </h1>
    <Link to="/books/1">Book1</Link>
    <br/>
    <Link to="/books/2">Book2</Link>
    <br/>
    <Link to="/books/new">NewBook</Link>
    <Outlet context={{hello: "world"}}/>
    </>
  )
}

export default BookLayout