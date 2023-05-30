'use client'
import React from 'react'

interface ContainerProps {
    children: React.ReactNode
}

const Container = ({ children }:ContainerProps) => {
    return (
        <div className='max-w[2520] mx-auto xl:px-20 md:10 sm:px-2 px-4 bg-white '>
            {children}
        </div>
    )
}

export default Container