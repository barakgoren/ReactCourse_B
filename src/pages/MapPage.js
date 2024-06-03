import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

export default function MapPage() {
  return (
    <div className='container'>
      <h1>Map test</h1>
      <MapContainer center={[31.93, 34.75]} zoom={7} scrollWheelZoom={true}>
        <Marker key={"11"} position={[32.18662999435766, 34.87001772884094]} />
        <Marker key={"12"} position={[31.905165479672824, 34.80944034151415]} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  )
}

// חוברת עופר עמוד 31,32 הסבר שימוש במפה
// ותהליך שצריך לעשות לפני בשביל שימוש
// https://docs.google.com/document/d/1oJ0HgQ9VsWJFPA0SW1vKUh2VnZkvoIHv/edit