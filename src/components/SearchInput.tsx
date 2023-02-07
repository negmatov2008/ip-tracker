import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

interface Props {
	ipAddress: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ ipAddress, onChange }: Props) => {
	return (
		<form
			// onSubmit={someFunc}
			className='flex items-center justify-center mt-6 mx-8 md:mt-10'
		>
			<input
				type="text"
				placeholder='Search for any IP address'
				onChange={onChange}
				value={ipAddress}
				className='font-rubik rounded-l-xl py-3 px-2 w-[30rem]'
			/>
			<button
				type='submit'
				className='bg-black rounded-r-xl py-4 px-4 color-white'
			>
				<RiArrowRightSLine color='white' />
			</button>
		</form>
	)
}

export default SearchInput
