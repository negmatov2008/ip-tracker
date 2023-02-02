/* eslint-disable camelcase */
import CardInfo from './CardInfo'

export interface IpDetailProps {
	ip: string;
	isp: string;
	city: string;
	state: string;
	zipcode: string;
}

const Card = ({
	ip,
	isp,
	city,
	state,
	zipcode
}: IpDetailProps) => {
	return (
		<div className='font-Rubik absolute top-[300px] left-1/2 z-[500] w-[78vw] flex flex-col -translate-x-1/2 -translate-y-1/2 items-center justify-around divide-solid bg-white text-center rounded-2xl p-4 md:flex-row md:w-2/3 md:text-left md:top-[250px]'>
			<CardInfo header={'IP Address'} value={ip} />
			<CardInfo header={'Location'} value={`${city}, ${state}\n${zipcode}`} />
			<CardInfo header={'Timezone'} value={'UTC - ' + 'timezone'} />
			<CardInfo header={'ISP'} value={isp} />
		</div>
	)
}

export default Card
