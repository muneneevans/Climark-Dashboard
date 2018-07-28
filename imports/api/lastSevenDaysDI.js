import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
export const LastSevenDaysDI=new Mongo.Collection('lastsevendaysDI');

//Publishing a method

if(Meteor.isServer){
  Meteor.publish('lastsevendaysdi',()=>{
    return LastSevenDaysDI.find();
  });
}
