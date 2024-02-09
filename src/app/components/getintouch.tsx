'use client';
import React from 'react'
import Link from 'next/link'


const Getintouch = () => {
  return (
    <div>
      <Link href="/contact">
        <button className="bg-green-700 mb-[2%] px-4 py-3 text-white">
          Get in touch</button>
      </Link>
    </div>

  )
}

export default Getintouch
