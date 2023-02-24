import React, { useState, useEffect } from 'react'

import Header from './components/Header'
import SearchInput from './components/SearchInput'
import Card from './components/Card/Card'
import Map from './components/Map'

const App = () => {
	const [loading, setLoading] = useState(true)
	const [ipAddress, setIpAddress] = useState('')
	const [ipData, setIpData] = useState({
		ip: '',
		isp: '',
		location: '',
		timezone: '' || 0,
		geolocation: [0, 0]
	})

	useEffect(() => {
		fetchIpOnLoad()
	}, [])

	const fetchIpOnLoad = async () => {
		setLoading(true)
		const response = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=804f428c84f344a6840d8db7410cbc7d')
		const data = await response.json()
		setIpData({
			ip: data.ip,
			isp: data.isp,
			location: `${data.city}, ${data.country_name}`,
			timezone: data.time_zone.offset,
			geolocation: [Number(data.latitude), Number(data.longitude)]
		})
		setLoading(false)
	}

	const fetchIpOnRequest = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		if (ipAddress && ipAddress !== ipData.ip) {
			const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=804f428c84f344a6840d8db7410cbc7d&ip=${ipAddress}`)
			const data = await response.json()
			setIpData({
				ip: data.ip,
				isp: data.isp,
				location: `${data.city}, ${data.country_name}`,
				timezone: data.time_zone.offset,
				geolocation: [Number(data.latitude), Number(data.longitude)]
			})
			setIpAddress(data.ip)
			setLoading(false)
		}
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIpAddress(event.target.value)
	}

	return (
		<div className='h-[35vh] bg-center bg-main bg-no-repeat bg-cover'>
			<Header />
			<SearchInput ipAddress={ipAddress} onChange={handleInputChange} onSubmit={fetchIpOnRequest} />
			<Card ipData={ipData} loading={loading} />
			<Map ipLocation={ipData.geolocation} />
		</div>
	)
}

export default App
