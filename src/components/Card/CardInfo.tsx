const CardInfo = ({ header, value }: any) => {
	return (
		<div className='flex flex-col gap-2 p-4'>
			<p className='text-gray-600 text-lg'>{header}</p>
			<p className='text-2xl font-semibold text-black'>{value}</p>
		</div>
	)
}

export default CardInfo
