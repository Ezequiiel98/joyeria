import React from 'react';
import { render } from 'react-dom';
import { Map as MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/'
import styles from './index.module.scss';

export default function Map() {
  const position = [51, 9];
  return (
    <div>
      <MapContainer  className={styles.map} center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
