'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Logo = () => {
    const router = useRouter()
  return (
  <Image 
    src='/assets/images/Airbnb_Logo.png'
    alt='logo'
    width={100}
    height={100}
    onClick={() => router.push('/')}
    className='cursor-pointer'
    />
  )
}

export default Logo