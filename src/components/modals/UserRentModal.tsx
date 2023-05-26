'use client'
import React, { useCallback, useMemo, useState } from 'react'
import Modal from './Modal'
import useUserRentModal from '@/hooks/useRentModal'
import Heading from '../Heading'
import { categories } from '../navbar/Categories'
import CategoryInput from '../inputs/CategoryInput'
import { FieldValues, useForm } from 'react-hook-form'
import CountrySelection, { CountrySelectValue } from '../inputs/CountrySelection'
import dynamic from 'next/dynamic'


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

    const Map = useMemo(() => dynamic(() => import('../Map'),{
        ssr: false
    }), [location])

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
                onChange={(val)=>{
                    setCustomValue('location', val)
                }} /> 
                <Map center={location?.latlng} />
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
            onSubmit={onNext}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            secondaryActionLabel='Back'
        />
    )
}

export default UserRentModal;