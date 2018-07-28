import React from 'react';
import {Pastoralist} from './../api/pastoralist';
import Header from './Header';
import querystring from 'querystring';
import request from 'request';
import {AdvisoryMA} from './../api/advisoryMA';
import {LastSevenDaysMA} from './../api/lastSevenDaysMA';
import {Tracker} from 'meteor/tracker';

export default class AddPastoralist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'English',
      moisture: {},
      pastMoisture: {},
      deviation: 0,
      deviationRule: '',
      deviationRuleSw: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //mounting components
  componentDidMount() {
    console.log('Component mounted: Add Pastoralist');
    this.moistureTracker = Tracker.autorun(() => {
      Meteor.subscribe('sevenDayForecastMoistureAvailability');
      const moisture = AdvisoryMA.find({Ward: "10319287"}).fetch();
      Meteor.subscribe('lastsevendaysma');
      const pastMoist = LastSevenDaysMA.find({Ward: "10319287"}).fetch();
      console.log('Seven Days Forecast:' + moisture);
      console.log('Last Seven Days Data:' + pastMoist);

      //implementing the logic for calculating the deviationRule
      if (moisture && pastMoist) {
        this.setState({moisture: moisture[0], pastMoisture: pastMoist[0]});
        let moistureForecastArray = this.state.moisture;
        let pastSevenDaysMoistureArray = this.state.pastMoisture;
        let moistureForecast = parseFloat(moistureForecastArray.Moisture).toFixed(2);
        let pastSevenDaysMoisture = parseFloat(pastSevenDaysMoistureArray.Moisture).toFixed(2);

        let deviation = moistureForecast - pastSevenDaysMoisture;
        console.log(moistureForecastArray);
        console.log(pastSevenDaysMoistureArray);
        console.log(deviation);
        if (deviation < 0) {
          let deviationRule = 'DECREASED RAINFALL: Soil moisture conditions are expected to decrease in the next 7 days hence this may reduce both quantity and quality of pasture for livestock ';
          let deviationRuleSw='UPUNGUFU WA MVUA: Hali ya unyevu wa ardhi inatarajiwa kupungua kwa siku 7 zifuatazo kwa hivyo hii inaweza kupunguza kiasi na ubora wa malisho ya mifugo';
          this.setState({deviation: deviation, deviationRule: deviationRule,deviationRuleSw: deviationRuleSw})
          // console.log(deviationRule);
        } else if (deviation > 0) {
          let deviationRule = 'INCREASED RAINFALL: Soil moisture conditions are expected to improve in the next 7 days hence pasture conditions expected to improve for livestock in the near future.';
          let deviationRuleSw='ONGEZEKO YA MVUA: Hali ya unyevu wa ardhi unatarajiwa kuboreshwa katika siku 7 zifuatazo kwa hivyo hali ya malisho inatarajiwa kuwa bora kwa mifugo siku zijazo';
          this.setState({deviation: deviation, deviationRule: deviationRule,deviationRuleSw: deviationRuleSw});
          // console.log(deviationRule);
        } else if (deviation == 0) {
          let deviationRule = 'NO CHANGE IN RAINFALL: No change in rainfall conditions hence current  status of pasture are expected to continue';
          let deviationRuleSw='HAKUNA MABADILIKO KATIKA HALI YA MVUA: hakuna mabadiliko katika hali ya mvua kwa hivyo hali ya sasa ya malisho inatarajiwa kuendelea';
          this.setState({deviation: deviation, deviationRule: deviationRule,deviationRuleSw: deviationRuleSw})
          // console.log(deviationRule);
        }
      }
    })
  }

  //component will unmount is called when the component is unmounted
  componentWillUnmount() {
    console.log('Component will unmount Add Pastoralist');
    this.moistureTracker.stop();
  }
  render() {
    return (<div>
      <div>
        <Header/>
      </div>
      <div className='item__sub wrapper'>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input className='form__input' type='text' name='firstName' placeholder='First Name'/>
          </div>
          <div>
            <input className='form__input' type='text' name='lastName' placeholder='Last Name'/>
          </div>
          <div>
            <input className='form__input' type='text' name='county' placeholder='County'/>
          </div>
          <div>
            <input className='form__input' type='text' name='ward' placeholder='Ward'/>
          </div>
          <div>
            <input className='form__input' type='text' name='phoneNo' placeholder='Phone No'/>
          </div>
          <div className='item__searchbox'>
            <h1>
              Select SMS Language:
            </h1>
            <select className='item__input' value={this.state.value} onChange={this.handleChange}>
              <option value="English">English</option>
              <option value="Kiswahili">Kiswahili</option>
            </select>
          </div>
          <div className='item__line'>
            <button className='button'>Send SMS</button>
          </div>
        </form>
      </div>
    </div>);
  }
//
  handleChange(e) {
   this.setState({value: e.target.value});
 }
 //
  handleSubmit(e) {
    e.preventDefault();
  let language=this.state.value;
    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;
    let county = e.target.county.value;
    let ward = e.target.ward.value;
    let phoneNo = e.target.phoneNo.value;
    if (language==='English') {
      let weather = this.state.deviationRule;
      // console.log(this.state.deviationRule);
      let message = 'Dear ' + firstName + ', For ' + county + ' County, ' + ward + ' Ward, ' + weather;
      request({
        url: 'https://api.africastalking.com/restless/send?username=catzer&Apikey=b35ab456464c141c3c2e564ce116d02feb2cf0b7e7b55a3e9f987c2c2593768e&to=' + phoneNo + '&message=' + message,
        json: true
      }, (error, response, body) => {
        console.log(body);
      });
    }else{
      let weather = this.state.deviationRuleSw;
      // console.log(this.state.deviationRule);
      let message = 'Jambo ' + firstName + ',  Kaunti ya ' + county + ', wadi ya ' + ward + ' kutakuwa na ' + weather;
      request({
        url: 'https://api.africastalking.com/restless/send?username=catzer&Apikey=b35ab456464c141c3c2e564ce116d02feb2cf0b7e7b55a3e9f987c2c2593768e&to=' + phoneNo + '&message=' + message,
        json: true
      }, (error, response, body) => {
        console.log(body);
      });
    }

    //
    // let username = 'sandbox';
    // let apikey = '2f618bb8ca76fc4b6c8733db87aa2ef931d6791a45ffcdfab70c967c311c7233';
    //  Define the recipient numbers in a comma separated string
    //  Numbers should be in international format as shown
    // var to = '+254790509816';
    //  var https = require('https');
    //  And of course we want our recipients to know what we really do
    // var message = "I'm a lumberjack and its ok, I sleep all night and I work all day";
    //
    //  Build the post string from an object
    //
    // var post_data = querystring.stringify({'username': username, 'to': to, 'message': message});
    //
    // var post_options = {
    //   host: 'api.africastalking.com',
    //   path: '/version1/messaging',
    //   method: 'POST',
    //
    //   rejectUnauthorized: false,
    //   requestCert: true,
    //   agent: false,
    //
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Content-Length': post_data.length,
    //     'Accept': 'application/json',
    //     'apikey': apikey
    //   }
    // };
    //
    // var post_req = https.request(post_options, function(res) {
    //   res.setEncoding('utf8');
    //   res.on('data', function(chunk) {
    //     var jsObject = JSON.parse(chunk);
    //     var recipients = jsObject.SMSMessageData.Recipients;
    //     if (recipients.length > 0) {
    //       for (var i = 0; i < recipients.length; ++i) {
    //         var logStr = 'number=' + recipients[i].number;
    //         logStr += ';cost=' + recipients[i].cost;
    //         logStr += ';status=' + recipients[i].status;  status is either "Success" or "error message"
    //         logStr += ';statusCode=' + recipients[i].statusCode;
    //         console.log(logStr);
    //       }
    //     } else {
    //       console.log('Error while sending: ' + jsObject.SMSMessageData.Message);
    //     }
    //   });
    // });
    //
    //  Add post parameters to the http request
    // post_req.write(post_data);
    //
    // post_req.end();
  }
}
