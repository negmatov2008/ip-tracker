import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import SearchInput from './components/SearchInput'
import Card from './components/Card/Card'
import Map from './components/Map'

// type Timezone = { offset: number }

interface IpDetails {
	ip: string;
	isp: string;
	city: string;
	state_prov: string;
	zipcode: string;
	country_name: string;
	latitude: number;
	longitude: number;
}

const App = () => {
	const [ipInfo, setIpInfo] = useState<IpDetails>({} as any)
	const [lat, setLat] = useState(0)
	const [lng, setLng] = useState(0)

	useEffect(() => {
		const getInitData = async () => {
			getInitialData()
		}

		getInitData()
	}, [])

	const getInitialData = async () => {
		try {
			const res = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=804f428c84f344a6840d8db7410cbc7d&')
			const data = await res.json()
			setIpInfo(data)
			setLat(data.latitude)
			setLng(data.longitude)
		} catch {
			console.log('There was an issue locating your IP')
		}
	}

	return (
		<div
			className='h-[35vh] bg-center bg-main bg-no-repeat bg-cover'
		>
			<Header />
			<SearchInput />
			<Card
				ip={ipInfo.ip}
				isp={ipInfo.isp}
				city={ipInfo.city}
				state={ipInfo.state_prov}
				zipcode={ipInfo.zipcode}
			/>
			<Map latitude={lat} longitude={lng} />
		</div>
	)
}

export default App
