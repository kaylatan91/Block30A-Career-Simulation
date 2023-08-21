import { fetchPosts } from "../utilities/apiutil";
import { useState, useEffect } from 'react'


export default function AllPosts() {
    const [ posts, setPost ] = useState([])
    const [searchParam, setSearchParam] = useState("")

    async function fetchAllPosts() {
        try {
            setPost(await fetchPosts ())
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchAllPosts()
    }, [])

    const postsToDisplay = searchParam
    ? posts.filter((post) =>
    post.title.toLowerCase().includes(searchParam)
    )
    : posts;

    return(
        <div>
            <label>
            Search:{" "}
            <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
            />
            </label>
            {
                postsToDisplay.map((post)=> {
                    return (
                        <div key={post._id}>
                            <h2>{post.title}</h2>
                            <h3>{post.author.username}</h3>
                            {/* <p>isAuthor: {post.isAuthor ? "Yes" : "No"}</p> */}
                            <p>Item Description: {post.description}</p>
                            <p>Location: {post.location}</p>
                            <p>Price: {post.price}</p>
                            <p>Will Deliver: {post.willDeliver ? "Yes" : "No"}</p>
                            <p>Active: {post.active ? "Yes" : "No"}</p>
                            <p>Messages:</p>
                            <ul>
                                {post.message?.map((message) => (
                                    <li key={message._id}>
                                        <p>From: {message.fromUser.username}</p>
                                        <p>Content: {message.content}</p>
                                    </li>
                                    ))}
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

            // <div>
            //     <label>
            //         Search:{" "}
            //         <input
            //         type="text"
            //         placeholder="search"
            //         onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
            //         />
            //     </label>
            //     {postsToDisplay.map((post) => {
            //         return <AllPosts key={post._id} post={post.author.username} />
            //     })}
            // </div>