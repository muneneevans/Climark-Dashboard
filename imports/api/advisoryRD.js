import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
export const AdvisoryRD=new Mongo.Collection('advisoryrd');


//Publishing a method

if(Meteor.isServer){
  Meteor.publish('nextsevendaysrd',()=>{
    return AdvisoryRD.find();
  });
}
