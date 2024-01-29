import Image from 'next/image'
import styles from './page.module.css'
import { Component } from 'react'
import Cards from '../components/Cards'



import WaveContainer from '../components/WaveContainer'

export default function Home() {
 
  return (
    <div >
       
       <Cards/>
      
       <WaveContainer/>
       </div>

  )
}
