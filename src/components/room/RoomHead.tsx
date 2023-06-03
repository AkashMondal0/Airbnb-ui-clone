import React from 'react'
import Heading from '../Heading'
import HeartButton from '../HeartButton'

interface RoomHeadProps {
    title: string
    image: string[]
    description: string
}

const RoomHead = ({
    title,
    image,
    description

}: RoomHeadProps) => {
    return (
        <>
            <Heading title={title} subtitle={"Europe Croatia"} />
            <div className='w-full h-[60vh] overflow-hidden relative rounded-xl'>
                <img
                    className='w-full h-full object-cover'
                    src={image[0]}
                    alt={title}
                />
                <div className='absolute top-5 right-5'>
                    <HeartButton listingId={image[0]} currentUser={null} />
                </div>
            </div>
        </>
    )
}

export default RoomHead
