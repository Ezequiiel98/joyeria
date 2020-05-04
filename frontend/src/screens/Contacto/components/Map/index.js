import React from 'react';
import { Map as MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';

import styles from './index.module.scss';

export default function Map() {
  const position = [-34.6256097, -58.3808893, 21];
  return (
    <MapContainer className={styles.map} center={position} zoom={18}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker openPopUp position={position}>
        <Tooltip permanent>
          <p>Estamos Aquí.</p>
          <p>Vení a visitarnos.</p>
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}
