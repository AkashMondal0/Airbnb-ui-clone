'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import useRegisterModal from '@/hooks/useRegisterModal'
import axios from 'axios'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../inputs/input'
import { toast } from 'react-hot-toast'
import Button from '../Button'
import useLoginModal from '@/hooks/useLoginModal'

const RegisterModal = () => {
  const registerModal = useRegisterModal()
  const LoginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    axios.post('/api/register', data)
      .then(res => {
        console.log(res.data)
        registerModal.close()
      })
      .catch(err => {
        toast.error("Something went wrong")
      })
      .finally(() => {
        setIsLoading(false)
      })

  }

  const toggleModal = useCallback(()=>{
    registerModal.close()
    LoginModal.open()
  },[registerModal,LoginModal])

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading
        title={'Welcome to Airbnb'}
        subtitle={'Create an account'} />
      <Input
        id={'Name'}
        label={'Name'}
        errors={errors}
        register={register}
        required={true} />
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
      Already have an account?{' '}<div className='px-2 cursor-pointer hover:underline' onClick={toggleModal}>Log in</div>
    </div>

  </div>)

  return (
    <Modal
      disabled={isLoading}
      title="Register"
      actionLabel='Register'
      body={bodyContent}
      footer={footerContent}
      isOpen={registerModal.isOpen}
      onClose={registerModal.close}
      onSubmit={handleSubmit(onSubmit)} />
  )
}

export default RegisterModal