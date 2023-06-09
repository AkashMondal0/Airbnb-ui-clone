import { useRouter } from 'next/router'
import React from 'react'
import { listings } from '@/data/airbnb'
import Container from '@/components/container/Container'
import RoomHead from '@/components/room/RoomHead'
import ListingInfo from '@/components/room/ListingInfo'
import ListingDataReservations from '@/components/room/ListingDataReservations'


const Room = () => {

  const router = useRouter()
  const { id } = router.query

  const room = listings.find((room) => {
    if (room.id === id) {
      return room
    }
  })

  if (!room) {
    return (<>
      <h2>Room not found</h2>
      <h1>something is wrong!</h1>
    </>
    )
  }

  return (
    <Container>
      <div className='max-w-screen-lg mx-auto bg-white h-screen'>
        <div className='flex flex-col gap-6 py-3'>
          <RoomHead title={room.title} image={room.images} description={''} />
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            <ListingInfo
              user={null} categories={null} description={null}
              roomCount={null} bedCount={null} bathCount={null}
              price={null} cancellation={null}
              guestCount={null}
            />
            <div className='order-first mb-10 md:order-last md:col-span-3'>
              <ListingDataReservations price={100000} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Room
