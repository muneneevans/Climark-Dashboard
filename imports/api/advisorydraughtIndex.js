import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
export const AdvisoryDroughtIndex=new Mongo.Collection('advisoryDraughtIndex');

//Publishing a method

if(Meteor.isServer){
  Meteor.publish('sevenDayForecastDroughtIndex',()=>{
    return AdvisoryDroughtIndex.find();
  });
}
