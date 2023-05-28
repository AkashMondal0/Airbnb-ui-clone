'use client'
import React, { useCallback, useMemo, useState } from 'react'
import Modal from './Modal'
import useUserRentModal from '@/hooks/useRentModal'
import Heading from '../Heading'
import { categories } from '../navbar/Categories'
import CategoryInput from '../inputs/CategoryInput'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import CountrySelection from '../inputs/CountrySelection'
import dynamic from 'next/dynamic'
import Counter from '../inputs/Counter'
import ImageUpload from '../inputs/ImageUpload'
import { toast } from 'react-hot-toast'


enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGE = 3,
    DESCRIPTION = 4,
    PRICE = 5,
}

const UserRentModal = () => {

    const userRentModal = useUserRentModal()
    const [isLoading, setIsLoading] = useState(false)
    const [step, setStep] = useState(STEPS.CATEGORY)

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            location: null,
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: '',
            price: 1,
            title: '',
            description: '',
        }
    })

    const category = watch('category')
    const location = watch('location')
    const guestCount = watch('guestCount')
    const roomCount = watch('roomCount')
    const bathroomCount = watch('bathroomCount')


    const Map = useMemo(() => dynamic(() => import('../Map'), {
        ssr: false
    }), [])

    const setCustomValue = useCallback((name: string, value: any) => {
        setValue(name, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        })

    }, [setValue])

    const onBack = () => {
        setStep((prev) => prev - 1)
    }
    const onNext = () => {
        setStep((prev) => prev + 1)
    }

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        if (step !== STEPS.PRICE) {
            onNext()
            return
        }
        setIsLoading(true)
        try {
            console.log(data)
            toast.success('Successfully created your listing!')
            reset()
            setStep(STEPS.CATEGORY)
            userRentModal.close()
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) return 'Create'
        return 'Next'
    }, [step])

    const secondaryActionActionLabel = useMemo(() => {
        if (step === STEPS.PRICE) return 'Cancel'
        return 'Back'
    }, [step])

    let bodyContent = (
        <div className='flex flex-col gap-8'>
            <Heading title={'Which of these best describes your place?'} subtitle={'pick a category'} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto'>
                {categories.map((item) => {
                    return <div key={item.label} className='col-span-1'>
                        <CategoryInput onClick={(value) => {
                            setCustomValue('category', value)
                            onNext()
                        }}
                            selected={category === item.label}
                            label={item.label}
                            icon={item.icon}
                        />
                    </div>
                })}
            </div>
        </div>
    )

    if (step === STEPS.LOCATION) {
        bodyContent = (
            <div>
                <Heading title={'Where is your place located?'} subtitle={'Help guests find find you!'} />
                <CountrySelection
                    value={location}
                    onChange={(val) => {
                        setCustomValue('location', val)
                    }} />
                <Map center={location?.latlng} />
            </div>
        )
    }

    if (step === STEPS.INFO) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading
                    title={'Share some details about your place'}
                    subtitle={'What amenities do you have?'} />
                <Counter
                    value={guestCount}
                    onChange={(value) => setCustomValue('guestCount', value)}
                    title='Guests'
                    subtitle='How many guests do you allow?' />
                <hr />
                <Counter
                    value={roomCount}
                    onChange={(value) => setCustomValue('roomCount', value)}
                    title='Rooms'
                    subtitle='How many rooms do you have?' />
                <hr />
                <Counter
                    value={bathroomCount}
                    onChange={(value) => setCustomValue('bathroomCount', value)}
                    title='Bathrooms'
                    subtitle='How many Bathrooms do you have?' />
                <hr />
            </div>
        )
    }

    if (step === STEPS.IMAGE) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading title={'Add a photos of your place'}
                    subtitle={'Showcase guests what your place looks like!'} />
                <ImageUpload onChange={() => { }} value={''} />
            </div>
        )
    }

    if (step === STEPS.DESCRIPTION) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading title={'Describe your place'} subtitle={'Tell guests about your place'} />
                <textarea
                    className='w-full h-60 border border-neutral-200 rounded-lg p-4 focus:outline-none focus:border-primary-500'
                    placeholder='Describe your place'
                    {...register('description', {
                        required: 'Description is required'
                    })} />

            </div>
        )
    }

    if (step === STEPS.PRICE) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading title={'How much do you want to charge?'} subtitle={'Set a price for your place'} />
                <input
                    className='w-full h-12 border border-neutral-200 rounded-lg p-4 focus:outline-none focus:border-primary-500'
                    placeholder='Price'
                    {...register('price', {
                        required: 'Price is required'
                    })} />
            </div>
        )
    }


    return (
        <Modal
            disabled={isLoading}
            title="Airbnb your home!"
            actionLabel='Next'
            body={bodyContent}
            isOpen={userRentModal.isOpen}
            onClose={userRentModal.close}
            onSubmit={handleSubmit(onSubmit)}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            secondaryActionLabel='Back'
        />
    )
}

export default UserRentModal;