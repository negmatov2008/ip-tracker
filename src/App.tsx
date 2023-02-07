/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

import Header from './components/Header'
import SearchInput from './components/SearchInput'
import Card from './components/Card/Card'
import Map from './components/Map'

const App = () => {
	const [ipAddress, setIpAddress] = useState('')
	const [ipData, setIpData] = useState({
		ip: '',
		isp: '',
		location: '',
		timezone: '' || 0,
		geolocation: ['', '']
	})

	useEffect(() => {
		fetchIpOnLoad()
	}, [])

	const fetchIpOnLoad = async () => {
		const response = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=804f428c84f344a6840d8db7410cbc7d')
		const data = await response.json()
		setIpData({
			ip: data.ip,
			isp: data.isp,
			location: `${data.city}, ${data.state_prov}`,
			timezone: data.time_zone.offset,
			geolocation: [data.latitude, data.longitude]
		})
		setIpAddress(data.ip)
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIpAddress(event.target.value)
	}

	return (
		<div className='h-[35vh] bg-center bg-main bg-no-repeat bg-cover'>
			<button onClick={fetchIpOnLoad}>Press for IP info</button>
			<Header />
			<SearchInput ipAddress={ipAddress} onChange={handleInputChange} />
			<Card ipData={ipData} />
			<Map />
		</div>
	)
}

export default App
