"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddFeedback() {
    const [text, setText] = useState("")
    const [author, setAuthor] = useState("")
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await fetch("/api/feedback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text, author})

        })

        router.push("/")
    }

    return (
        <main className='p-8 max-w-md mx-auto'>
            <h1 className='text-2xl font-bold mb-4'>Add Feedback</h1>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <input
                    type="text"
                    placeholder="Your feedback"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    className='w-full border p-2 rounded'
                    required />

                    <input 
                    type="text"
                    placeholder="Your name"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    className='w-full border p-2 rounded'
                    required />

                    <button type="submit" className='bg-green-600 text-white px-4 py-2 rounded w-full'>Submit</button>
            </form>
        </main>
    )
}