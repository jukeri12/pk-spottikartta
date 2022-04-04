import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {
  return (
    <div className="App">
      <div id="map">
        <MapContainer center={[60.4593, 22.274]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[60.4593, 22.274]}>
              <Popup>
                Sivistymättömien kotikenttä!
              </Popup>
            </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
