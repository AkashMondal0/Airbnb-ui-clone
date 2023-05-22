import React from 'react'
import Container from '../container/Container'
import { TbBeach } from 'react-icons/tb'
import { GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import CategoriesBox from '../CategoriesBox'
import { useRouter } from 'next/router'

export const categories = [
    {
        label: "Beach",
        icon: TbBeach,
        description: "Beach"
    },
    {
        label: "Windmills",
        icon: GiWindmill,
        description: "Beach"
    },
    {
        label: "Modern",
        icon: MdOutlineVilla,
        description: "Beach"
    },
    {
        label: "Beach11",
        icon: TbBeach,
        description: "Beach"
    },
    {
        label: "Windmills11",
        icon: GiWindmill,
        description: "Beach"
    },
    {
        label: "Modern222",
        icon: MdOutlineVilla,
        description: "Beach"
    },
    {
        label: "Beach1",
        icon: TbBeach,
        description: "Beach"
    },
    {
        label: "Windmills1",
        icon: GiWindmill,
        description: "Beach"
    },
    {
        label: "Modern1",
        icon: MdOutlineVilla,
        description: "Beach"
    }

]

const Categories = () => {
    const router = useRouter()
    const selected = router.query.category as string
    
    return (
        <Container>
            <div className='flex flex-row items-center justify-between overflow-x-auto'>
                {categories.map((item, index) => (
                    <CategoriesBox
                        key={item.label}
                        label={item.label}
                        selected={selected === item.label}
                        icon={item.icon} />
                ))}
            </div>
        </Container>
    )
}

export default Categories