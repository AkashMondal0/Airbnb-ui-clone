import React, { useCallback } from 'react'
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
  var cloudinary: any
}

interface ImageUploadProps {
  onChange: (image: string) => void
  value: string

}

const ImageUpload = ({
  onChange,
  value
}: ImageUploadProps) => {

  const handleUpload = useCallback((result: any) => {
    onChange(result.info.secure_url)

  }, [onChange])


  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset=''
      options={{
        maxFiles: 1
      }}>
      {({ open }) => {
        return (
          <div
            className='relative cursor-pointer hover:opacity-70 transition border-dashed
             border-2 flex items-center justify-center gap-4 text-neutral-600 w-full h-60 rounded-[30px]'
            onClick={() => {
              open?.()
            }}>
            <>
              <TbPhotoPlus size={24} />
              <div className='font-semibold text-lg'>Upload Image</div>
            </>
          </div>
        )
      }}
    </CldUploadWidget>
  )
}

export default ImageUpload