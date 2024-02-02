import React from 'react'
import "../../styles/treestyle.css"

const tree = () => {
  return (
    <div>
        <div className="tree-container relative">
        <div className="tree-trunk h-64 w-16 bg-gray-600 rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
        <div className="tree-canopy w-96 h-96 rounded-full bg-green-500 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
        </div>  
    </div>
  )
}

export default tree
