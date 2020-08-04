import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import { listLogEntries } from './api';


const App =() => {
  const [viewport, setViewport] = useState({
    width: '100vh',
    height: '100vw',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 0
  });

  useEffect(()=>{
    (async() =>{
      const LogEntries = await listLogEntries();
      console.log(LogEntries)

    })();
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapStyle = "mapbox://styles/mapbox/dark-v10"
      mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}
export default App;