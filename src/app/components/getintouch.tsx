'use client';
import React from 'react'
import Link from 'next/link'


const Getintouch = () => {
  return (
    <div>
      <Link href="/contact">
        <button className="btn btn-outline border-lime-800 text-lime-800 hover:bg-lime-800 mb-[2%] px-4 py-3 hover:text-white hover:border-none">
          Get in touch</button>
      </Link>
    </div>

  )
}

export default Getintouch
