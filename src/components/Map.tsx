import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import MarkerIcon from '../assets/icon-location.svg'

interface Props {
	ipLocation: [number, number] | any;
}

const ChangeMapView = ({ coords }: any) => {
	const map = useMap()
	map.setView(coords, map.getZoom())

	return null
}

const Map = ({ ipLocation }: Props) => {
	const locationIcon = new Icon({
		iconUrl: MarkerIcon,
		iconSize: [25, 34]
	})

	return (
		<div className='pt-20'>
			<MapContainer center={ipLocation} zoom={10} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={ipLocation} icon={locationIcon}>
					<Popup>
						<span>Approximate IP Location</span>
					</Popup>
				</Marker>
				<ChangeMapView coords={ipLocation} />
			</MapContainer>
		</div>
	)
}

export default Map
