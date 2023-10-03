import {useState} from 'react'
import Datepicker from "tailwind-datepicker-react"

const options = {
	title: "Demo Title",
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-gray-200",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		disabledText: "bg-gray-600",
		input: "",
		inputIcon: "",
		selected: "",
	},
	icons: {
		// () => ReactElement | JSX.Element
		prev: () => 
    <span>
      <svg className="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
      </svg>
    </span>,
		next: () => 
    <span>
      <svg className="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
      </svg>
    </span>,
	},
	datepickerClassNames: "top-12",
	defaultDate: new Date("2022-01-01"),
	language: "en",
}

const DatePicker = () => {

  const [show, setShow] = useState(false)
	const handleChange = (selectedDate: Date) => {
		console.log(selectedDate)
	}
	const handleClose = (state: boolean) => {
		setShow(state)
	}

  return (
    <div className='relative'>
      <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
    </div>
  )
}

export default DatePicker