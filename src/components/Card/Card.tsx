import CardInfo from './CardInfo'
import { ClipLoader } from 'react-spinners'

interface Props {
	ipData: {
		ip: string;
		isp: string;
		location: string;
		timezone: number;
	};
	loading: boolean;
}

const Card = ({ ipData, loading }: Props) => {
	return (
		<div className='font-Rubik absolute top-[260px] left-1/2 z-[500] w-[70vw] flex flex-col -translate-x-1/2 -translate-y-1/2 items-center justify-around divide-solid bg-white text-center rounded-2xl sm:top-[280px] sm:w-[60vw] md:flex-row md:w-fit md:h-[12vh] md:text-left md:top-[250px]'>

			{loading
				? (
					<>
						<CardInfo
							header={'IP Address'}
							value={
								<div className='flex justify-center w-full pt-2'>
									<ClipLoader color='#000000' />
								</div>
							}
						/>
						<CardInfo
							header={'Location'}
							value={
								<div className='flex justify-center w-full pt-2'>
									<ClipLoader color='#000000' />
								</div>
							}
						/>
						<CardInfo
							header={'Timezone'}
							value={
								<div className='flex justify-center w-full pt-2'>
									<ClipLoader color='#000000' />
								</div>
							}
						/>
						<CardInfo
							header={'ISP'}
							value={
								<div className='flex justify-center w-full pt-2'>
									<ClipLoader color='#000000' />
								</div>
							}
						/>
					</>
				)
				: (
					<>
						<CardInfo header={'IP Address'} value={ipData.ip} />
						<CardInfo header={'Location'} value={ipData.location} />
						<CardInfo header={'Timezone'} value={'UTC' + ipData.timezone + ':00'} />
						<CardInfo header={'ISP'} value={ipData.isp} />
					</>
				)}
		</div>
	)
}

export default Card
