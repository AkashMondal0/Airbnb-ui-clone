import React, { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import useCountries from '@/hooks/useCountries'
import { format } from 'date-fns'
import Image from 'next/image'
import HeartButton from '../HeartButton'
const ListingData = [] // import from database
interface User {
    id: string
    name: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zip: string
    country: string
    avatar: string
    createdAt: string
    updatedAt: string
}

interface ListCardProps {
    data: any
    reservation: []
    onAction: (id: string) => void
    disabled: boolean
    actionLabel: string
    actionId: string
    currentUser?: User | null
}

const ListCard = ({
    data,
    reservation,
    onAction,
    disabled,
    actionLabel,
    actionId,
    currentUser
}: ListCardProps) => {
    const router = useRouter()
    const { getByValue } = useCountries()
    const location = getByValue(data?.locationValue)

    const handleCancel = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        if (disabled) {
            return
        }
        onAction?.(actionId)
    }, [disabled, onAction, actionId])

    const price = useMemo(() => {
        if (reservation) {
            // return reservation.totalPrice;
        }
    }, [reservation])

    const reservationData = useMemo(() => {
        if (!reservation) {
            return null
        }
        // const start = new Date(reservation?.startDate)
        // const end = new Date(reservation?.endDate)

        // return `${format(start, 'PP')} - ${format(end, 'PP')}`
    }, [reservation])


    return (
        <div
            // onClick={() => router.push(`/listings/${data?.id}`)}
            className='
        col-span-1
        flex
        cursor-pointer
        group'>
            <div className='
            flex flex-col gap-2 w-full 
            '>
                <div className='
                aspect-square
                relative
                w-full
                overflow-hidden
                rounded-[20px]
                '>
                    <img className='
                    object-cover
                    w-full
                    h-full
                    group-hover:scale-110
                    transition
                    duration-300
                    ' src={'https://a0.muscache.com/im/pictures/miso/Hosting-787294559973104944/original/59551ea1-7feb-4a96-a9b3-1f2d2f15523a.jpeg?im_w=720'} alt='no image' />
                    <div className='absolute top-3 right-3' >
                        <HeartButton
                            id={data?.id}
                            currentUser={currentUser}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCard