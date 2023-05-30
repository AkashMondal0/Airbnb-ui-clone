import React from 'react'
import Container from '../container/Container'
import { TbBeach } from 'react-icons/tb'
import { GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import CategoriesBox from '../CategoriesBox'
import { useRouter } from 'next/router'
import { categories } from '../../data/airbnb'

const Categories = () => {
    const router = useRouter()
    const selected = router.query.category as string
    const scrollRef = React.useRef(null)

    const scrollToRight = () => {
        scrollRef.current?.scrollBy({ left: 70, behavior: 'smooth' })
    }

    const scrollToLeft = () => {
        scrollRef.current?.scrollBy({ left: -70, behavior: 'smooth' })
    }
// console.log(cat)

    return (
        <Container>
            {/* left btn */}
           <div className='w-full justify-center flex'>
           <div className='flex justify-between w-[90vw] items-center'>
                <div className='w-10 h-10 bg-white justify-center flex items-center hover:shadow-lg rounded-full border-neutral-400 border-[1px]'>
                    <button onClick={scrollToLeft} className='rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>

                {/* categories */}
                <div id='style-2'
                    ref={scrollRef}
                    className='flex
                    pt-4
                    bg-white
            smooth-scroll
            transition
            duration-500
            flex-row items-center justify-between overflow-x-auto'>

                    {categories.map((item, index) => (
                        <CategoriesBox
                            key={item.label}
                            label={item.label}
                            selected={selected === item.label}
                            icon={item.icon} />
                    ))}
                </div>
                
                {/* right btn */}
                <div className='w-10 h-10 bg-white justify-center flex items-center hover:shadow-lg rounded-full border-neutral-400 border-[1px]'>
                    <button onClick={scrollToRight} className='rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
           </div>
        </Container>
    )
}

export default Categories