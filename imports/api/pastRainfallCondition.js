import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
export const pastRainfallCondition=new Mongo.Collection('pastRainfallCondition');

//Publishing a method

if(Meteor.isServer){
  Meteor.publish('lastsevendaysdi',()=>{
    return pastRainfallCondition.find();
  });
}
