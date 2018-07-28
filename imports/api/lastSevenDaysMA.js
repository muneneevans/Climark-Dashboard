import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
export const LastSevenDaysMA = new Mongo.Collection('lastsevendaysMA');

//Publishing a method

if (Meteor.isServer) {
  Meteor.publish('lastsevendaysma', () => {
    return LastSevenDaysMA.find();
  });
}
