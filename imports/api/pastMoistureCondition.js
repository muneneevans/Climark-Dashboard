import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
export const pastMoistureCondition = new Mongo.Collection('pastMoistureCondition');

//Publishing a method

if (Meteor.isServer) {
  Meteor.publish('lastsevendaysma', () => {
    return pastMoistureCondition.find();
  });
}
