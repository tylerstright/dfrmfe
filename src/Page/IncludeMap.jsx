import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export default function IncludeMap() {

    const geom = useLoaderData();
    console.log(geom);

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    return (
        <>
            <MapContainer center={[46.5, -116.5]} zoom={7} scrollWheelZoom={false} style={{ height: '600px' }} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {geom.map(feature => {
                    // could check geom type and put lines and polys
                    return (
                        <Marker position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}>
                            <Popup>
                                {feature.properties.name.name}
                            </Popup>
                        </Marker>
                    )
                })}
            </MapContainer>
        </>
    )

}