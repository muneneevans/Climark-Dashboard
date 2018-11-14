import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import currentWeekNumber from 'current-week-number';
export const AdvisoryMASw = new Mongo.Collection('advisoryMASw');

if(Meteor.isServer){
  Meteor.publish('advisoryMASw',() => {
    let weekNo = currentWeekNumber();
    return AdvisoryMASw.find({$and:[{
      $or: [
        {
          locationId: "10275441"
        }, {
          locationId: "10323753"
        }, {
          locationId: "10246851"
        }, {
          locationId: "10200557"
        }, {
          locationId: "10279489"
        }, {
          locationId: "10226293"
        }, {
          locationId: "10262227"
        }, {
          locationId: "10243072"
        }, {
          locationId: "10221179"
        }, {
          locationId: "10203946"
        }, {
          locationId: "10218019"
        }, {
          locationId: "10491050"
        }, {
          locationId: "10331288"
        }, {
          locationId: "10228209"
        }, {
          locationId: "10274707"
        }, {
          locationId: "10196117"
        }, {
          locationId: "10256046"
        }, {
          locationId: "10325610"
        }, {
          locationId: "10271892"
        }, {
          locationId: "10230238"
        }, {
          locationId: "10255893"
        }, {
          locationId: "10306201"
        }, {
          locationId: "10256828"
        }, {
          locationId: "10236602"
        }, {
          locationId: "10316435"
        }, {
          locationId: "10206114"
        }, {
          locationId: "10248056"
        }, {
          locationId: "10284578"
        }
      ]},{week:weekNo}]});
  });
}
