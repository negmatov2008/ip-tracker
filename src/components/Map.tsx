import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
	return (
		<div className='pt-20'>
			<MapContainer center={[33.44825, -112.07580]} zoom={10} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[33.44825, -112.07580]}>
					<Popup>
						Your approximate location
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	)
}

export default Map
