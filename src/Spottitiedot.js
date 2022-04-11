import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Canvas from './Canvas';
import Uploader from './Upload';


class Spottitiedot extends React.Component {

  render() {
    return (
      <div className="spotAttribs">
        <p>Sijainti: {this.props.spotPos}</p>
        <p>Spotti: {this.props.spotName}</p>
        <p>Tallennettuja runeja: {this.props.spotSavedRunsCount}kpl</p>
        <p>Arvostelu: {this.props.spotRating}/5</p>
        <div className="spotComments">
          <p>Kommentit:</p>
          {this.props.spotComments.map(c => <p>"{c}"</p>)}
        </div>
        <p>
        {this.props.uploadedImage}
        </p>
        <Uploader />
      </div>
    )
  }
}

export default Spottitiedot;
