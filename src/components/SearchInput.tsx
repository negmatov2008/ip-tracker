import { RiArrowRightSLine } from 'react-icons/ri'

const SearchInput = () => {
	return (
		<form className='flex items-center justify-center mt-6 mx-8 md:mt-10'>
			<input
				type="text"
				placeholder='Search for any IP address'
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
