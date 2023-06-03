import React from 'react'
import Container from '../container/Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import Categories from './Categories'
import { useRouter } from 'next/router'


const Navbar = () => {
    const router = useRouter()
    
    return (
        <div className='sticky top-0 w-full bg-white z-10 
        transition
        duration-500
        ease-in-out
        transform
        '>
            <div className='py-4 border-b-[1x]'>
                <Container >
                    <div className='flex flex-row justify-between items-center md:gap-0 gap-3'>
                        <Logo />
                        <Search />
                        <UserMenu currentUser={undefined}/>
                    </div>
                </Container>
            </div>
            <hr/>
            {router.asPath == "/" &&<Categories/>}
        </div>
    )
}

export default Navbar