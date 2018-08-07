import React from 'react';
import Iframe from 'react-iframe';

export default class ForecastMap extends React.Component {
  render() {
    return (<div className='item__container'>
      {/* <h1 className='item__title'>Regional Forecast Maps</h1> */}
      <div className='item'>
        <div className='item__sub'>
          <div className='item__line'>
            <h1 className='item__title'>Rainfall Distribution</h1>
            <Iframe url="https://amfratechdiag403.blob.core.windows.net/maps/july_next_7_days_rd/index.html"  height="450px" id="myId" className="item__line" display="initial" position="relative" allowFullScreen="allowFullScreen"/>
          </div>

        </div>
        {/* <div className='item__sub'>
          <div className='item__line'>
            <h1 className='item__title'>Moisture Availability Index</h1>
            <Iframe url="https://amfratechdiag403.blob.core.windows.net/maps/july_next_7_days_ma/index.html"  height="450px" id="myId" className="item__line" display="initial" position="relative" allowFullScreen="allowFullScreen"/>
          </div>
        </div> */}
      </div>
    </div>);
  }
}
