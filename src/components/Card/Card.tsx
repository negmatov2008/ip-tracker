import CardInfo from './CardInfo'

const Card = () => {
	return (
		<div className='font-Rubik absolute top-[375px] left-1/2 z-[500] w-[90vw] flex flex-col -translate-x-1/2 -translate-y-1/2 items-center justify-around divide-solid bg-white text-center rounded-xl p-4 md:flex-row md:w-2/3 md:text-left md:top-[300px]'>
			<CardInfo header={'IP Address'} value={'192.68.25.4'} />
			<CardInfo header={'Location'} value={'Phoenix, AZ'} />
			<CardInfo header={'Timezone'} value={'6:00PM MST'} />
			<CardInfo header={'ISP'} value={'Google Fiber'} />
		</div>
	)
}

export default Card
