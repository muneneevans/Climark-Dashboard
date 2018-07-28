import React from 'react';
import {Tracker} from 'meteor/tracker'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import SevenDayForeCast from './SevenDayForeCast';
import TitleBar from './TitleBar';
import ForecastMap from './ForecastMap';
import HistoricalMap from './HistoricalMap';

export default class SelectLocation extends React.Component {

  //constructor
  constructor() {
    super();
    this.state = {
      name: 'React',
      selectedOption: {},
      selectedOption2: {}
    };
  }

  //handle change 1
  handleChange1 = (selectedOption) => {
    const value = selectedOption === null
      ? ''
      : selectedOption;
    this.setState({selectedOption: value});
  };
  //handle change in the second selection
  handleChange2 = (selectedOption) => {
    //handling the null which gets passed when
    const value = selectedOption === null
      ? ''
      : selectedOption;
    this.setState({selectedOption2: value})
    // console.log(value.value);

  }

  componentDidMount() {
    console.log('Component did mount Select Location');
    this.selectTracker = Tracker.autorun(() => {
      // let value=this.state.selectedOption2.value;
      // console.log(value);
    })
  }

  //component will unmount is called when the component is unmounted
  componentWillUnmount() {
    console.log('Component will unmount Select Location');
  }

  render() {
    const county = [
      {
        value: 'Marsabit',
        label: 'Marsabit'
      }, {
        value: 'Isiolo',
        label: 'Isiolo'
      }
    ];

    const ward = [
      {
        value: '10224789',
        label: 'Butiye',
        link: 'Marsabit'
      }, {
        value: '10296922',
        label: 'Loiyangalani',
        link: 'Marsabit'
      }, {
        value: '10326372',
        label: 'Burat',
        link: 'Isiolo'
      }, {
        value: '10274034',
        label: 'Sericho',
        link: 'Isiolo'
      }
    ];

    const filteredOptions = ward.filter((o) => o.link === this.state.selectedOption.value)

    return (<div>
      <TitleBar title='Climark Weather Dashboard'/>
      <div className='item'>
        <div className='wrapper'>
          <div>
            <div>
              <div className='item__input'>
                {/* <h1>Select County</h1> */}
                <Select name="form-field-name" placeholder={'Select County'} value={this.state.selectedOption.value} onChange={this.handleChange1} options={county}/>
              </div>
              <div className='item__input'>
                {/* <h1>Select Sub-County</h1> */}
                <Select name="form-field-name" placeholder={'Select Ward'} value={this.state.selectedOption2.value} onChange={this.handleChange2} options={filteredOptions}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SevenDayForeCast locationid={this.state.selectedOption2.value}/>

      <ForecastMap/>
      <HistoricalMap/>
    </div>);
  }

}
