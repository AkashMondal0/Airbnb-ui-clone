import React from 'react'
import Avatar from '../Avatar'
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
}:ListingInfoProps) => {
  return (
    <>
        <div className='col-span-4 flex flex-col gap-8'>
           <div className='flex flex-col gap-2'>
                <div className='text-2xl font-semibold flex flex-row items-center gap-2'>
                    <div>Hosted by {"Akash"}</div>
                    <Avatar/>
                </div>
                    <div className='flex flex-row items-center gap-4 font-light text-neutral-500'>
                        <div>{2} guests</div>
                        <div>{3} rooms</div>
                        <div>{1} bathroom</div>
                    </div>
           </div>
           <hr/>
           {

           }
        </div>
    </>
  )
}

export default ListingInfo
