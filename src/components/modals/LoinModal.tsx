'use client'
import React, { useEffect, useState, useCallback } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../inputs/input'
import { toast } from 'react-hot-toast'
import Button from '../Button'
import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'

const LoginModal = () => {
    const loinModal = useLoginModal()
    const registerModal = useRegisterModal()
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        axios.post('/api/register', data)
            .then(res => {
                console.log(res.data)
                loinModal.close()
            })
            .catch(err => {
                toast.error("Something went wrong")
            })
            .finally(() => {
                setIsLoading(false)
            })

    }

    const toggleModal = useCallback(() => {
        loinModal.close()
        registerModal.open()
    }, [registerModal, loinModal])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title={'Welcome to Airbnb'}
                subtitle={'Login'} />
            <Input
                id={'email'}
                label={'Email'}
                errors={errors}
                register={register}
                required={true} />
            <Input
                id={'Password'}
                label={'Password'}
                errors={errors}
                register={register}
                required={true} />
        </div>)

    const footerContent = (<div className='flex flex-col gap-4 mt-3'>
        <hr />
        <Button
            outline
            label={'Continue With Google'}
            icon={FcGoogle}
            onClick={() => { }} />
        <Button
            outline
            label={'Continue With Github'}
            icon={AiFillGithub}
            onClick={() => { }} />
        <div className='text-neutral-500 text-center font-light flex justify-center'>
            Don t have an account?{' '}<div className='px-2 cursor-pointer hover:underline'
                onClick={toggleModal}>Sign Up</div>
        </div>

    </div>)

    return (
        <Modal
            disabled={isLoading}
            title="Login"
            actionLabel='Login'
            body={bodyContent}
            footer={footerContent}
            isOpen={loinModal.isOpen}
            onClose={loinModal.close}
            onSubmit={handleSubmit(onSubmit)} />
    )
}

export default LoginModal