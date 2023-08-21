import React, { useState } from "react"
import { makePost } from "../utilities/apiutil"

export default function NewPost({ post, setPost }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const newPost = {
            title: title,
            description: description,
            price: price,
        }

        const APIData = await makePost(newPost)
        if (APIData.success) {
            console.log("New Post: ", APIData.data.newPost)

            // Resetting all posts manually
            const newPostsList = [...post, APIData.data.newPost]
            setPost(newPostsList)

            setTitle("")
            setDescription("")
            setPrice("")
        } else {
            setError(APIData.error.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <input
            value={title}
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            />
            <input
            value={description}
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            />
            <input
            value={price}
            type="number"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            />
            <button>Submit</button>
        </form>
    )

}