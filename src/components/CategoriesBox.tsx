import React, { useCallback } from 'react'
import { IconType } from 'react-icons'
import { useRouter } from 'next/router'
import qs from 'query-string'

interface CategoriesBoxProps {
    label: string
    icon: IconType
    description?: string
    selected?: boolean
}
const CategoriesBox = ({
    label,
    icon: Icon,
    selected
}: CategoriesBoxProps) => {
    const router = useRouter()
    const param = router.query.category

    const handleClick = useCallback(() => {
        router.push({
            pathname: "/",
            query: {
                ...router.query,
                category: label
            }
        })
    }, [label, router])

    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center
        duration-600
    cursor-pointer 
    transition
    ${selected ? "border-b-neutral-800" : "border-transparent"}
    ${selected ? "text-neutral-800" : "text-neutral-500"}
    gap-2 p-3 border-b-2 hover:text-neutral-800`}>
            <Icon size={24} />
            <span className='text-sm font-medium'>{label}</span>
        </div>
    )
}

export default CategoriesBox