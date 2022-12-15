import React, {useEffect, useState} from 'react'

const ResourceChange = () => {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])

    console.log('Render')
    useEffect(() => {
        console.log('Resource type changed')
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))

        return () => {
            
        }

    }, [resourceType])

    const [windowWidth, setwindowWidth] = useState(window.innerWidth)
    const handleResize = () => {
        setwindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return() => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

  return (
    <>
    <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
    })}
    <div>
        {windowWidth}
    </div>
    </>
  )
}

export default ResourceChange