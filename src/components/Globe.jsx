import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent = () => {
  const globeRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const [gotLoc, setgotLoc] = useState(false);

  useEffect(() => {
    // if(!gotLoc) {
    //   globeRef.current.controls().autoRotate = true; // set the auto-rotate
    //   fetch('https://ip-api.io/json').then(r => r.text()).then(r => {
    //   let loc = JSON.parse(r);
    //   setUserLocation({
    //     latitude: loc.latitude,
    //     longitude: loc.longitude
    //   })
    // })
    // setgotLoc(true)

    // }
    
    globeRef.current.controls().autoRotate = true;
    //Get the user's location using the Geolocation API
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  return (
    <div>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor='black'
        height={400}
        width={400}
      
        arcsData={[
          {
            startLat: 40.44062,
            startLng: -79.99589,
            endLat: userLocation ? userLocation.latitude : 0,
            endLng: userLocation ? userLocation.longitude : 0,
            color: 'red',
          },
          {
            startLat: 34.0549,
            startLng: -118.2426,
            endLat: userLocation ? userLocation.latitude : 0,
            endLng: userLocation ? userLocation.longitude : 0,
            color: 'blue',
          },
        ]}
        arcLabel={(arc) => arc.color} // Optional: Label arcs with their colors
        options={{
          enableGlobeGlow: true,
        }}
      />
    </div>
  );
};

export default GlobeComponent;
