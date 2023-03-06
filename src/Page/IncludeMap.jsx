import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Circle, FeatureGroup, MapContainer, Marker, Popup, Polygon, TileLayer, Tooltip } from 'react-leaflet';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
// import icon from '../images/DFRM.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


export default function IncludeMap() {

    const geom = useLoaderData();
    console.log(geom);
    
    //https://leafletjs.com/reference.html#icon
    // this is putting icons below the actual point. 
    let DefaultIcon = L.icon({
        iconUrl: icon,
        // iconSize: 15, // [15,20],
        shadowUrl: iconShadow,
        iconAnchor: [13,40] // this puts the tip of the marker on the true point.
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
                    return (<>
                        <Marker
                            position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}
                            icon={DefaultIcon}
                            style={{ background: 'transparent', border: 'none' }}>
                            {/* <Popup>
                                {feature.properties.name.name}
                            </Popup> */}
                            <Tooltip >{feature.properties.name.name}</Tooltip>

                        </Marker>
                        {/* <FeatureGroup pathOptions={{color:'blue'}}>
                            <Popup>Circle</Popup>
                            <Circle center={[44.86209, -116.087852]} radius={2} />
                        </FeatureGroup> */}
                        </>
                    )
                })}
                <Polygon pathOptions={{ color: 'lime' }} positions={[[47, -117], [47, -116], [46, -116], [46, -117]]} />

            </MapContainer>
        </>
    )

}