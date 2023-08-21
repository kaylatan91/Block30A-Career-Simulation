import { Routes, Route, Link } from "react-router-dom"
import Account from './components/Account'
import AllPosts from './components/AllPosts'
import NewPost from "./components/NewPost"
import './App.css'

export default function App() {

  return (
    <>
    <div id="container">
      <h1>Strangers Things</h1>
      <Link to="/">View Posts</Link>
      <Link to="/account">Sign In/Sign Up</Link>
      <Link to="/newpost">Create a Post</Link>
    </div>
    <div id="main-section">
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/account" element={<Account />} />
        <Route path="/newpost" element={<NewPost />} />
      </Routes>
    </div>
    </>
  )
}
