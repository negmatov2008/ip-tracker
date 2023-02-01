import CardInfo from './CardInfo'

const Card = () => {
	return (
		<div className='font-Rubik absolute top-[300px] left-1/2 z-[500] w-[78vw] flex flex-col -translate-x-1/2 -translate-y-1/2 items-center justify-around divide-solid bg-white text-center rounded-2xl p-2 md:flex-row md:w-2/3 md:text-left md:top-[250px]'>
			<CardInfo header={'IP Address'} value={'192.212.174.101'} />
			<CardInfo header={'Location'} value={'Phoenix, AZ 85248'} />
			<CardInfo header={'Timezone'} value={'UTC-7:00'} />
			<CardInfo header={'ISP'} value={'Google Fiber'} />
		</div>
	)
}

export default Card
