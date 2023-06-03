import React, { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import useCountries from '@/hooks/useCountries'
import HeartButton from '../HeartButton'
const ListingData = [] // import from database
import { listings } from '@/data/airbnb'
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

    const pushRoomPage = useCallback((id: string) => {
        router.push({
            pathname: '/room',
            query: { id }
        })
    }, [router])

    return (
        <div
            onClick={() => pushRoomPage(data.id)}
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
                    <>
                        <img className='
                    object-cover
                    w-full
                    h-full
                    group-hover:scale-110
                    transition
                    duration-300
                    ' src={data.images} alt='no image' />
                        <div className='absolute top-3 right-3' >
                            <HeartButton listingId={''} currentUser={null}                                // id={data?.id}
                            // currentUser={currentUser}
                            />

                        </div>
                    </>
                </div>
                <div className='font-semibold text-lg'>
                    {data.title}
                </div>
                <div className='text-sm text-gray-500'>
                    Beach
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <div className='font-semibold'>
                        $ {data.price}
                    </div>
                    <span>night</span>
                </div>
            </div>
        </div>
    )
}

export default ListCard