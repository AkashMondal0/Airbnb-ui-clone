import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { BiDollar } from 'react-icons/bi'

interface inputProps {
    type?: string
    id: string
    label: string
    disabled?: boolean
    formatPrice?: boolean
    required?: boolean
    register?: UseFormRegister<FieldValues>
    errors: FieldErrors
}

const Input = ({
    type = 'text',
    id,
    label,
    disabled,
    formatPrice,
    required,
    register,
    errors
}: inputProps) => {
    return (
        <div className='w-full relative'>
            {formatPrice && (<BiDollar size={24} className='text-neutral-700 absolute top-5 left-2' />)}
            <input id={id}
                disabled={disabled}
                className={`peer w-full p-4 pt-6 font-light
                 bg-white border-2 rounded-md outline-none
                 transition disabled:opacity-70
                 disabled:cursor-not-allowed
                 ${formatPrice ? 'pl-10' : 'pl-4'}
                    ${errors[id] ? 'border-red-500' : 'border-neutral-200'}
                    ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
                  `}
                {...register(id, { required })}
                placeholder=' '
            />
            <label htmlFor={id}
                className={`absolute text-md duration-150 transform
            -translate-y-3 top-5 z-10 origin-[0]
            ${formatPrice ? 'left-10' : 'left-4'}
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:-translate-y-4
            peer-focus:scale-75
            ${errors[id] ? 'text-red-500' : 'text-zinc-400'}
            `}
            >
                {label}
            </label>
        </div>
    )
}

export default Input
