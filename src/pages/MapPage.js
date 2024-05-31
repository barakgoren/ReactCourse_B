import { AdvancedMarker, APIProvider, InfoWindow, Map } from '@vis.gl/react-google-maps'
import React, { useState } from 'react'

export default function MapPage() {
  const [open, setOpen] = useState(false)
  const position = { lat: 32.10346315558545, lng: 35.207447010456065 }
  const infoPosition = { lat: 32.1038, lng: 35.207447010456065 }
  return (
    <div>
      <div className="container d-flex justify-content-center">
        <APIProvider apiKey={"AIzaSyAXuw0e1BzIxlOUx2JCCbhCOlKcgybnSSo"}>
          <div className='border border-dark border-2 mt-5' style={{height:'80vh', width:'80vw'}}>
            <Map
              defaultCenter={position}
              defaultZoom={17}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
              mapId={'d78994b48117b2d5'}
            >
              <AdvancedMarker position={position} onClick={() => setOpen(!open)}>

              </AdvancedMarker>
              {open && <InfoWindow position={infoPosition} onCloseClick={() => setOpen(!open)}>
                <div>
                  <h5>My Marker</h5>
                  <p>My Marker is awesome</p>
                </div>
              </InfoWindow>}
            </Map>
          </div>
        </APIProvider>
      </div>
    </div>
  )
}
