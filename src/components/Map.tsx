'use client'
import React from 'react'
import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

delete (L.Icon.Default.prototype as any)._getIconUrl

L.Icon.Default.mergeOptions({
    iconUrl: 'assets/images/marker-icon-2x.png',
    iconRetinaUrl: 'assets/images/marker-icon-2x.png',
    shadowUrl: 'assets/images/marker-shadow.png',
})

interface MapProps {
    center: number []
}

const Map = ({
    center
}: MapProps) => {
    return (
        
            <MapContainer
                scrollWheelZoom={false}
                className='h-[35vh] rounded-lg'
                center={center as L.LatLngExpression || [51, -0.09]}
                zoom={center ? 4 : 2}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {center && (<Marker position={center as L.LatLngExpression}>
                    <Popup>
                        A pretty CSS3 popup. <br /> sky inc.
                    </Popup>
                </Marker>)}
            </MapContainer>

    )
}

export default Map