import React from 'react'
import { Range, DateRange, RangeKeyDict } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

interface CalenderProps {
    value?: Range
    onChange: (range: RangeKeyDict) => void
    disabledDate?: Date[]

}

const Calender = ({
    value,
    onChange,
    disabledDate
}: CalenderProps) => {

    return (
        <DateRange
            rangeColors={['#262626']}
            // ranges={[value]}
            minDate={new Date()}
            disabledDates={disabledDate}
            onChange={onChange}
            showDateDisplay={false}
            direction='vertical'
        />
    )
}

export default Calender
