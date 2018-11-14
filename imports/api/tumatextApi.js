import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

let UserCollection=new Mongo.Collection('smsusers');

export const Api = new Restivus({
       prettyJson: true
   });

Api.addCollection(UserCollection, {
    authRequired: false,
    excludedEndpoints: ['getAll', 'deleteAll', 'delete'],
    endpoints: {
        post: {
            action: function () {
                let name = this.bodyParams.name;
                let mobile=this.bodyParams.mobile;
                let group =this.bodyParams.group;
                let datacollected=this.bodyParams.datacollected;
                 if (!!name) {
                    UserCollection.insert({
                        "name":name,
                        "mobile":mobile,
                        "group":group,
                        "datacollected":datacollected
                                               
                    });
                    return "all attributes posted successfully";
                } else {
                    return "one or more key attributes missing";
                }
               
            }
        }
    }
});
