"use client"
import {useState, useEffect} from 'react'
import Link from 'next/link'

export default function Home() {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch("/api/feedback")
        .then(res => res.json())
        .then(data => setFeedbacks(data))
    }, [])

    return (
        <main className='p-8 max-w-xl mx-auto'>
            <h1 className='text-3xl font-bold mb-4 text-center'>Feedback Board💬</h1>
            <button className='flex justify-items-center items-center m-auto mt-10 mb-12'><Link href="/add" className='bg-blue-600 text-white px-4 py-2 rounded-md'>Add Feedback</Link></button>


            <div className='mt-6 space-y-4'>
                {feedbacks.map(f => (
                    <div key={f.id} className='p-4 border rounded-lg shadow'>
                        <p className='text-lg'>{f.text}</p>
                        <p className='text-sm text-gray-500'>- {f.author}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}