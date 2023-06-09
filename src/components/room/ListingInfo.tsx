import React from 'react'
import Avatar from '../Avatar'
import ListingCategory from './ListingCategory'
import { TbBeach } from 'react-icons/tb'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../Map'), { ssr: false })
interface ListingInfoProps {
    user: any
    categories: any
    description: any
    roomCount: any
    bedCount: any
    bathCount: any
    price: any
    cancellation: any
    guestCount: any
}
const ListingInfo = ({
    user,
    categories,
    description,
    roomCount,
    bedCount,
    bathCount,
    price,
    cancellation,
    guestCount
}: ListingInfoProps) => {
    return (
        <>
            <div className='col-span-4 flex flex-col gap-8 min-h-screen'>
                <div className='flex flex-col gap-2'>
                    <div className='text-2xl font-semibold flex flex-row items-center gap-2'>
                        <div>Hosted by {"Akash"}</div>
                        <Avatar />
                    </div>
                    <div className='flex flex-row items-center gap-4 font-light text-neutral-500'>
                        <div>{2} guests</div>
                        <div>{3} rooms</div>
                        <div>{1} bathroom</div>
                    </div>
                </div>
                <hr />
                <ListingCategory icon={TbBeach} label={'Beach'} description={'This property is close to the beach'} />
                <hr />
                <div className='text-lg font-light text-neutral-500'>
                    {description || 'My Description'}
                </div>
                <hr />
                <Map center={[22,77]} />
            </div>
        </>
    )
}

export default ListingInfo
