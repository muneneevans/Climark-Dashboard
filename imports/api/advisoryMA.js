import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
export const AdvisoryMA=new Mongo.Collection('advisoryMA');

if(Meteor.isServer){
  Meteor.publish('sevenDayForecastMoistureAvailability',()=>{
    return AdvisoryMA.find();
  });
}
