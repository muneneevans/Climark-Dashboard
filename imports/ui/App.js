import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import CountySelector from './CountySelector';
// import WardSelector from './WardSelector';
import SevenDayForeCast from './SevenDayForeCast';
import SevenDayPostMortem from './SevenDayPostMortem';
import ForecastMap from './ForecastMap';
import HistoricalMap from './HistoricalMap';
import SelectLocation from './SelectLocation';

export default class App extends React.Component {
  render() {
    return (<div>
      <TitleBar title='Climark Weather Dashboard'/>
      <div className='item'>
        <div className='wrapper'>
          <div>
            {/* <CountySelector/> */}
            <SelectLocation/>
          </div>
          {/* <div >
            <WardSelector/>
          </div> */}

        </div>
      </div>
      {/* <SevenDayForeCast/>
      <ForecastMap/>
      <HistoricalMap/> */}
      {/* <SevenDayPostMortem/> */}
    </div>);
  }
}
