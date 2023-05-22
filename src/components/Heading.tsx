'use client'
import React from 'react'
interface HeadingProps {
    title: string
    subtitle: string
    center?: boolean
}

const Heading = ({
    title,
    subtitle,
    center
}: HeadingProps) => {
    return (
        <div className={center ? "text-center" : "text-start"}>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-neutral-500 mt-2">{subtitle}</p>
        </div>
    )
}

export default Heading