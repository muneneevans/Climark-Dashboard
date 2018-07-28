import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
export const LastSevenDaysRD=new Mongo.Collection('lastsevendaysRD');

//Publishing a method

if(Meteor.isServer){
  Meteor.publish('lastsevendaysrd',()=>{
    return LastSevenDaysRD.find();
  });
}
