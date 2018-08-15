import React, { Component } from "react";
import ReactMapGL from "react-map-gl";
import Dimensions from "react-dimensions";

class Map extends Component {
  state = {
    viewport: {
      latitude: 2.341097,
      longitude: 38.000405,
      zoom: 14  
    }
  };

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
      />
    );
  }
}

export default Dimensions()(Map);
