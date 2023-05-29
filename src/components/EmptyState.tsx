'use client'
import React from 'react'
import { useRouter } from 'next/router'
import Heading from './Heading'
import Button from './Button'

interface EmptyStateProps {
    title?: string
    description?: string
    showReset?: boolean
}

const EmptyState = ({
    title = "No results found",
    description = "Try adjusting your search or filter to find what you're looking for.",
    showReset = false
}:EmptyStateProps) => {
    const router = useRouter()
  return (
    <div className='h-[60vh] flex flex-col gap-2 justify-center items-center'>
        <Heading title={title} subtitle={description} />
        <div className='w-96 my-5'>
        <Button onClick={() => router.push('/')} label='Reset' />
        </div>
    </div>
  )
}

export default EmptyState