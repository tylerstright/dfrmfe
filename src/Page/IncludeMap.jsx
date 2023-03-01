import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Circle, FeatureGroup, MapContainer, Marker, Popup, Polygon, TileLayer, Tooltip } from 'react-leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';

export default function IncludeMap() {

    const geom = useLoaderData();
    console.log(geom);



    const iconMarkup = renderToStaticMarkup(<i className=" fa fa-map-marker-alt fa-3x" />);
    const customMarkerIcon = divIcon({
        html: iconMarkup,
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
                        <Marker
                            position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}
                            icon={customMarkerIcon}
                            style={{ background: 'transparent', border: 'none' }}>
                            {/* <Popup>
                                {feature.properties.name.name}
                            </Popup> */}
                            <Tooltip >{feature.properties.name.name}</Tooltip>

                        </Marker>
                        // <FeatureGroup pathOptions={{color:'blue'}}>
                        //     <Popup>Circle</Popup>
                        //     <Circle center={[46.8, -116.8]} radius={2500} />
                        // </FeatureGroup>
                    )
                })}
                <Polygon pathOptions={{ color: 'lime' }} positions={[[47, -117], [47, -116], [46, -116], [46, -117]]} />

            </MapContainer>
        </>
    )

}