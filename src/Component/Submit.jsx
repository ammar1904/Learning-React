import React, { useRef } from 'react'


const Submit = () => {

  const emailRef = useRef()
  const passwordRef = useRef()

  function onSubmit(e) {
    e.preventDefault()
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input ref={emailRef} type="email" id="email"/>
      <label htmlFor="email">Password</label>
      <input ref={passwordRef} type="password" id="password"/>
      <button type="submit">Submit</button>

    </form>
  )
}

export default Submit