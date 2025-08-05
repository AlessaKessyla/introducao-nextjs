'use client'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';


type PointsType = 'restaurant' | 'bar' | 'hotel';

// Mapeamento dos ícones por tipo
const iconMap: Record<PointsType, L.Icon> = {
    restaurant: new L.Icon({
        iconUrl: '',
        iconSize: [40,40],
        iconAnchor: [20,40],
        popupAnchor: [0,-40],
    }),
    bar: new L.Icon({
        iconUrl: '',
        iconSize: [40,40],
        iconAnchor: [20,40],
        popupAnchor: [0,-40],
    }),
    hotel: new L.Icon({
        iconUrl: '',
        iconSize: [40,40],
        iconAnchor: [20,40],
        popupAnchor: [0,-40],
    }),


}

export default function MapPage(){
    return (
        <div className=" flex flex-col items-center"> 
            <h1 className="text-3x1 font-bold mb-4">  Mapa com Leaflet </h1>
            <p className=" text-center"> 
                Clique nos marcadores para ver 
                    os detalahes dos locais
            </p>
            <Map/>
        </div>
    )

}