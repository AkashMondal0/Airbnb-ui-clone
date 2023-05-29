import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
interface HeartButtonProps {
    listingId: string
    currentUser?: null

}
const HeartButton = ({
    listingId,
    currentUser
}: HeartButtonProps) => {
    const [hasFavorite, setHasFavorite] = React.useState(false)
    const toggleFavorite = () => { setHasFavorite(!hasFavorite) }

    return (
        <div
            onClick={toggleFavorite}
            className='
    cursor-pointer
    relative
    transition
    duration-500
    '
        >
            <AiOutlineHeart className='
        absolute
        fill-white
        ' size={28} />
            <AiFillHeart className={`
        ${hasFavorite ? 'fill-rose-500' : 'fill-neutral-500/70'}
        `} size={28} />
        </div>
    )
}

export default HeartButton