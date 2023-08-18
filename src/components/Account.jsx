import React, { useEffect } from "react";
import { useState } from "react";

export default function Account() {
    const [isLoginPage, setIsLoginPage] = useState(true)
    const [title, setTitle] = useState()
    const [bottomlink, setBottomLink] = useState()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (isLoginPage) {
            setTitle("Log Into Your Account")
            setBottomLink("Don't have an account? Click to register")
        } else {
            setTitle("Create an Account")
            setBottomLink("Already have an account? Click to login")
        }
    }, [isLoginPage]) 

    return(
      <>
      <label>
       <h1>{title}</h1>
      </label>
        <input
          value={username}
          placeholder="Username"
          type="text"
          onChange={(e) => {
              setUsername(e.target.value)
          }}
        />
        <input
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick= {() => {
        
          let {token, message} = createUser(username, password)


        }}
        >Log In</button>
        <label onClick= {() => {
            setIsLoginPage(!isLoginPage)
        }}>
            {bottomlink}
        </label>
      </>
    )
}
