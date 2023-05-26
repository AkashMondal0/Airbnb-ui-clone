'use Client';
import useCountries from '@/hooks/useCountries';
import React from 'react'
import Select from 'react-select'

export type CountrySelectValue = {
    label: string
    value: string
    latlng: number[]
    region: string
    flag: string
}

interface CountrySelectionProps {
    value: CountrySelectValue | null
    onChange: (value: CountrySelectValue | null) => void
}



const CountrySelection = ({
    value,
    onChange
}: CountrySelectionProps) => {

    const { getCountries } = useCountries();

    return (
        <div>
            <Select
                isClearable
                value={value}
                onChange={onChange}
                options={getCountries()}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                formatOptionLabel={(option) => (
                    <div className='flex flex-row items-center gap-3'>
                        <div>{option.flag}</div>
                        <div>{option.label}
                            <span className='text-neutral-800 ml-1'>{option.region}</span></div>
                    </div>
                )}
                classNames={{
                    control: () => 'p-3 border-2 my-5',
                    input: () => 'text-lg',
                    option: () => 'text-lg',
                    menu: () => 'text-lg',
                    singleValue: () => 'text-lg',
                    placeholder: () => 'text-lg',
                }}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 20,
                    colors: {
                        ...theme.colors,
                        primary25: '#ffe4e6',
                        primary: 'black',
                    },
                })}
            />

        </div>
    )
}

export default CountrySelection