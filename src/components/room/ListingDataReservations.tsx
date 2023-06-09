import React from 'react'
import Calender from '../inputs/calender'
import { Range } from 'react-date-range'
import Button from '../Button'

interface ListingDataReservationsProps {
    price?: number
    dataRange?: Range
    onChange?: (range: Range) => void
    onSubmit?: () => void
    disabled?: boolean
    disabledDate?: Date[]
}

const ListingDataReservations = ({
    price,
    dataRange,
    onChange,
    onSubmit,
    disabled,
    disabledDate
}: ListingDataReservationsProps) => {

    return (
        <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
            <div className='flex flex-row items-center gap-1 p-4'>
                <div className='text-2xl font-semibold'>${price}</div>
                <div className='font-light text-neutral-600 px-1'>
                    night
                </div>
            </div>
            <hr />
            <Calender onChange={() => { }} value={undefined} />
            <hr />
            <div className='m-3'>
                <Button label={'Reserve'} onClick={() => { }} />
            </div>
            <div className='flex flex-row items-center gap-1 p-4 justify-between'>
                <div className=' text-base font-semibold'>Total</div>
                <div className='text-base font-semibold'>${price}</div>
            </div>
        </div>
    )
}

export default ListingDataReservations
