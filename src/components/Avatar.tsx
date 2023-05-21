'use client'
import React from 'react'
import Image from 'next/image'

const Avatar = () => {
  return (
    <Image 
        src="/assets/images/avatar.jpg"
        alt="Picture of the author"
        width={30}
        height={30}
        className="rounded-full"
    />
  )
}

export default Avatar;