import React from 'react';
import Iframe from 'react-iframe';

export default class HistoricalMap extends React.Component {
  render() {
    return (<div className='item__container'>
      {/* <h1 className='item__title'>Historical Forecast Maps</h1> */}
      <div className='item'>
        <div className='item__sub'>
          <div className='item__line'>
            <h1 className='item__title'>Rainfall Distribution:Oct 1- Oct 31</h1>
            <Iframe url="https://amfratechdiag403.blob.core.windows.net/maps/oct_31_last30days_rd/index.html"  height="450px"  id="myId" className="item__line" display="initial" position="relative" allowFullScreen="allowFullScreen"/>
          </div>

        </div>
        {/* <div className='item__sub'>
          <div className='item__line'>
            <h1 className='item__title'>Moisture Availability Index</h1>
            <Iframe url="https://amfratechdiag403.blob.core.windows.net/maps/july_last_30_days_ma/index.html" height="450px" id="myId" className="item__line" display="initial" position="relative" allowFullScreen="allowFullScreen"/>
          </div>
        </div> */}
      </div>
    </div>);
  }
}
