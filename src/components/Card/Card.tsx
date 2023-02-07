import CardInfo from './CardInfo'

interface Props {
	ipData: {
		geolocation: string[];
		ip: string;
		isp: string;
		location: string;
		timezone: number;
	}
}

const Card = ({ ipData }: Props) => {
	return (
		<div className='font-Rubik absolute top-[350px] left-1/2 z-[500] w-[78vw] flex flex-col -translate-x-1/2 -translate-y-1/2 items-center justify-around divide-solid bg-white text-center rounded-2xl p-4 md:flex-row md:w-2/3 md:text-left md:top-[250px]'>
			<CardInfo header={'IP Address'} value={ipData.ip} />
			<CardInfo header={'Location'} value={ipData.location} />
			<CardInfo header={'Timezone'} value={'UTC' + ipData.timezone + ':00'} />
			<CardInfo header={'ISP'} value={ipData.isp} />
		</div>
	)
}

export default Card
