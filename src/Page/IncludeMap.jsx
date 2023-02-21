import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet/';

export default function IncludeMap() {
//     // const [points, setPoints] = useState(null);

    const geom = useLoaderData();
    console.log(geom);


//     // const position = [51.505, -0.09]

    return (
        <>
            <button onClick={() => console.log(geom)} >geom</button>
        </>

    )

}