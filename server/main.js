import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {HTTP} from 'meteor/http';
import Papa from 'papaparse';
import fs from 'fs';

import querystring from 'querystring';
import './scheduleFileLoading';
import './../imports/api/mobileAppApi';
import './../imports/api/tumatextApi';
// import Client from 'ssh2-sftp-client';
// import getRemoteContent from 'remote-content';

//
import {Restivus} from 'meteor/nimble:restivus';
// import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import schedule from 'node-schedule';

// advisoryMA = new Mongo.Collection("advisoryMA");

//startup method
Meteor.startup(() => {


});
