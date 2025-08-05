    'use client'
    
    import {   MapContainer, Marker, Popup, TileLayer   } from 'react-leaflet'
    import 'leaflet/dist/leaflet.css';
    export default function Map(){

    return (
        <MapContainer 
        center={[-3.0, -39.0]} 
        zoom= {13}
        
        className='w-full h-[600px] rounded-1g shadow-lg'
    >   

        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[-3.0, -39.0]}>
            <Popup>
                A pretty CSS3 Popup. <br/> Easily customizable
            </Popup>
        </Marker>

        </MapContainer>
    );
}