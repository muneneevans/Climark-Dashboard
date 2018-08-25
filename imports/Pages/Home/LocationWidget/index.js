import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import Dimensions from "react-dimensions";

class Map extends Component {
  state = {
    viewport: {
      latitude: this.props.ward.latitude,
      longitude: this.props.ward.longitude,
      zoom: 12
    }
  };

  componentDidMount() {
  
  }
  render() {
    let { containerWidth, containerHeight } = this.props;
    return (
      <ReactMapGL
        width={containerWidth}
        height={700}
        mapboxApiAccessToken={
          "pk.eyJ1IjoibXVuZW5lZXZhbnMiLCJhIjoiY2prbWpwbjVwMDJ4ZjNxcHA3Zm5sZHNzZiJ9.tGeaHaeRyntv4q5KA2iSqw"
        }
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <Marker
          latitude={this.props.ward.latitude}
          longitude={this.props.ward.longitude}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div>You are here</div>
        </Marker>
      </ReactMapGL>
    );
  }
}

export default Dimensions()(Map);
