'use client'

import { useRouter } from "next/router"

export default function Button ({children}) {
    const router = useRouter();
    const handleClick = () =>{
        router.push('/dashboard/analytics')
    }
    return (
        <button className="bg-blue-500 px-3 py-2 text-gray-50 rounded mt-6" onClick={handleClick}>
        {children}
      </button>
    )
}