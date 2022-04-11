import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import Spottitiedot from './Spottitiedot';


class Spottikartta extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      spotRating: 0,  // Should be average of all ratings
      spotAllRatings: [0],
      spotName: "Valitse Spotti!",
      spotSavedRunsCount: 0,
      spotComments: [],
      spotRuns: [],  // Collection of objects with base64 image data  and run name
      editSpotPos: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    console.log(e.latlng)
    console.log(e);
    this.setState({ editSpotPos: e.latlng });
  }


  setSpotDetails(latlong, name, runs, rating, comments) {
    // TODO: Needs to use actual data from backend and should not set it to state
    this.setState({
      editSpotPos: latlong,
      spotName: name,
      spotRating: rating,
      spotSavedRunsCount: runs,
      spotComments: comments
    });
  }

  render() {
      return (
        <div id="map">
          <MapContainer center={[60.4593, 22.274]} zoom={13} onclick={this.handleClick}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
            position={[60.4593, 22.274]}
            eventHandlers={{
              click: (e) => {
                console.log(e.latlng);
                this.setSpotDetails([60.4593, 22.274], "Turun Parkour Akatemia", 23, 5, ["Testikommentti"])
              },
            }}
            >
              <Popup>
                Turun Parkour Akatemia
              </Popup>
            </Marker>
            <Marker
            position={[60.4459980, 22.2688020]}
            eventHandlers={{
              click: (e) => {
                this.setSpotDetails([60.4459980, 22.2688020], "Samppalinnanmäki", 10, 5, ["Testikommentti", "Testikommentti 2"])
              },
            }}>
              <Popup>
                Samppalinnanmäki
              </Popup>
            </Marker>
            {this.state.editSpotPos && <Marker position={this.state.editSpotPos} draggable={true}>
              <Popup>Uusi spotti!</Popup>
            </Marker>}
          </MapContainer>
          <Spottitiedot
          spotPos={this.state.editSpotPos}
          spotName={this.state.spotName}
          spotRating={this.state.spotRating}
          spotComments={this.state.spotComments}
          uploadedImage={null}
          spotSavedRunsCount={this.state.spotSavedRunsCount}/>

        </div>
      );
  }

}

export default Spottikartta;
