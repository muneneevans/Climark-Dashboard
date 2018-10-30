import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

let UserCollection=new Mongo.Collection('userCollection');

export const Api = new Restivus({
       prettyJson: true
   });

Api.addCollection(UserCollection, {
    authRequired: false,
    excludedEndpoints: ['getAll', 'deleteAll', 'delete'],
    endpoints: {
        post: {
            authRequired: false,
            action: function () {
                var name = this.bodyParams.name;
                console.log ("Entity: " + JSON.stringify(name));
                return true
            }
        }
    }
});
