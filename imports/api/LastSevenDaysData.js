import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import currentWeekNumber from 'current-week-number';
export const LastSevenDaysData = new Mongo.Collection('lastSevenDaysData');