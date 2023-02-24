const CardInfo = ({ header, value }: any) => {
	return (
		<div className='font-rubik flex flex-col p-1 sm:p-2 md:p-4'>
			<span className='text-gray-600 text-xs'>{header}</span>
			<span className='text-lg sm:text-xl md:text-2xl font-medium text-gray-900'>{value}</span>
		</div>
	)
}

export default CardInfo
