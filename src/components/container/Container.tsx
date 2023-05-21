'use client'
import React from 'react'

interface ContainerProps {
    children: React.ReactNode
}

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='max-w[2520] mx-auto xl:px-20 md:10 sm:px-2 px-4'>
            {children}
        </div>
    )
}

export default Container