import React, { useState } from "react";
import MenuSidebar from "../MenuSidebar/MenuSidebar";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  FullscreenControl,
  Marker,
  NavigationControl,
} from "react-map-gl";

const MapadePacientes = () => {
  const [viewport, setViewport] = useState({
    latitude: -22.90556,
    longitude: -47.06083,
    width: "fit",
    height: "100vh",
    zoom: 12,
  });

  return (
    <div className="min-h-screen min-w-full	flex flex-row  bg-[#f4f6f8] ">
      <MenuSidebar />
      <div className="">
        <Map
          mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
          initialViewState={{
            ...viewport,
          }}
          style={{ width: "1148px", height: "100vh" }}
          mapStyle="mapbox://styles/matheusmoura22/clbv1ma5g001c14nuuwcx16ak"
        >
          <Marker latitude={-22.90556} longitude={-47.06083} />
          <FullscreenControl />
          <NavigationControl position="bottom-right" />
          onViewportChange={(viewport) => setViewport(viewport)}
        </Map>
      </div>
    </div>
  );
};

export default MapadePacientes;
