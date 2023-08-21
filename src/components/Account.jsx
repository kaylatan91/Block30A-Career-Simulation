import React, { useEffect, useState } from "react";
import { createUser, logInUser } from "../utilities/apiutil";


export default function Account({ users, setUsers }) {
    const [isLoginPage, setIsLoginPage] = useState(true)
    const [title, setTitle] = useState()
    const [bottomlink, setBottomLink] = useState()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    useEffect(() => {
        if (isLoginPage) {
            setTitle("Log Into Your Account")
            setBottomLink("Don't have an account? Click to register")
        } else {
            setTitle("Create an Account")
            setBottomLink("Already have an account? Click to login")
        }
    }, [isLoginPage]) 

    async function handleSubmit(e) {
        e.preventDefault();
        if (isLoginPage) {
            const APIData = await logInUser(username, password)
            if (APIData.success) {
                console.log("Logged In User:", APIData.data.loggedIn)
                const loggedInUser = [...users, APIData.data.loggedIn]
                setLoggedIn(loggedInUser)
                setUsername("")
                setPassword("")
            } else {
                setError(APIData.error.message)
            }
        }
            else {
                const APIData = await createUser(username, password)
                if (APIData.success) {
                    console.log("New User: ", APIData.data.newUser)
                    const newUsersList = [...users, APIData.data.newUser]
                    setUsers(newUsersList)
                    setUsername("")
                    setPassword("")
                } else {
                    setError(APIData.error.message)
                }
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
        <>
            <h1>{title}</h1>
        <br/>
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
        <br/>
        <button onClick= {() => {
            
        }}
        >Log In</button>
        <br/>
        <label onClick= {() => {
            setIsLoginPage(!isLoginPage)
        }}>
            {bottomlink}
        </label>
      </>
      </form>
    )
}
