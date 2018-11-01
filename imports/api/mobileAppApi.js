
import {Restivus} from 'meteor/nimble:restivus';
import {AdvisoryMA} from './advisoryMA';
import {AdvisoryDroughtIndex} from './advisorydroughtIndex';
import {pastMoistureCondition} from './pastMoistureCondition';
import {pastRainfallCondition} from './pastRainfallCondition';
import currentWeekNumber from 'current-week-number';
//APIs
export const Api = new Restivus({useDefaultAuth: true, prettyJson: true});
//Moisture Availability
Api.addRoute('advisoryma/locationid/:locationId/week/:week', {
  get: function() {
    let locationid = this.urlParams.locationId;
    let weekNo = parseFloat(this.urlParams.week);
    return AdvisoryMA.find({locationId: locationid, week: weekNo}).fetch();
  }
});
//Drought Index
Api.addRoute('advisorydroughtindex/locationid/:locationId/week/:week', {
  get: function() {
    let locationid = this.urlParams.locationId;
    let weekNo = parseFloat(this.urlParams.week);
    return AdvisoryDroughtIndex.find({locationId: locationid, week: weekNo}).fetch();
  }
});
//post mortem moisture conditions
Api.addRoute('pastmoisturecondition/locationid/:locationId/week/:week', {
  get: function() {
    let locationid = this.urlParams.locationId;
    let weekNo = parseFloat(this.urlParams.week);
    return pastMoistureCondition.find({locationId: locationid, week: weekNo}).fetch();
  }
});

//post mortem rainfall condition
Api.addRoute('pastrainfallcondition/locationid/:locationId/week/:week', {
  get: function() {
    let locationid = this.urlParams.locationId;
    let weekNo = parseFloat(this.urlParams.week);
    return pastRainfallCondition.find({locationId: locationid, week: weekNo}).fetch();
  }
});
//API End
