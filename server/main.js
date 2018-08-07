import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {HTTP} from 'meteor/http';
import Papa from 'papaparse';
import fs from 'fs';
import {NextSevenDays} from './../imports/api/nextsevendays';
import {AdvisoryMA} from './../imports/api/advisoryMA';
import {AdvisoryDroughtIndex} from './../imports/api/advisorydraughtIndex';
import {pastMoistureCondition} from './../imports/api/pastMoistureCondition';
import {pastRainfallCondition} from './../imports/api/pastRainfallCondition';
import currentWeekNumber from 'current-week-number';
import querystring from 'querystring';

//
import {Restivus} from 'meteor/nimble:restivus';
// import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

// advisoryMA = new Mongo.Collection("advisoryMA");

//startup method
Meteor.startup(() => {
  //Api
  let Api = new Restivus({useDefaultAuth: true, prettyJson: true});
  // Generates: GET, POST on /api/items and GET, PUT, PATCH, DELETE on
  // /api/items/:id for the Items collection
  Api.addCollection(AdvisoryMA);
  //API End
  console.log('Papa parse imported');
//load ftp data
  let nextSevenDayForecast = Assets.getText('180715_next7.csv');
  let lastSevenDayData = Assets.getText('180715_past30.csv');
  let lastThirtyDaysData=Assets.getText('180715_past30.csv');

  //parse the data for the next 7 days
  let resultsNextSevenDaysForecast = Papa.parse(nextSevenDayForecast, {
    // download: true,
    delimiter: ",",
    header: true,
    preview: 3000,
    complete: function(resultsNextSevenDaysForecast) {
      //console.log(resultsNextSevenDaysForecast);
    }
  });
 //parse the last 30 days data
  let resultsLastThirtyDaysData = Papa.parse(lastThirtyDaysData, {
    // download: true,
    delimiter: ",",
    header: true,
    preview: 3000,
    complete: function(resultsLastThirtyDaysData) {
      //console.log(resultsNextSevenDaysForecast);
    }
  });
  //Get the week number
  let weekNo = currentWeekNumber();

  //insert into the database
  let dataNextSevenDays = resultsNextSevenDaysForecast.data;
  let dataLastThirtyDays = resultsLastThirtyDaysData.data;
  console.log(resultsLastThirtyDaysData.data[0]);
  dataNextSevenDays.forEach(function(doc) {
    NextSevenDays.insert(doc);
  });

  //moisture Availability Forecast classification and loading into database
  dataNextSevenDays.forEach(function(doc) {
    let ltnsum = doc.LTNSUMP;
    let moistureAvailability = doc.CPOVRPR;
    let draughtIndex = (doc.CSUMPRE / doc.LTNSUMP) * 100;

    if (moistureAvailability >= 0 && moistureAvailability <= 0.34) {
      let implication = 'Very Deficient Moisture';
      let advisoryA = 'Due to deficient moisture conditions the state of pasture is expected to deteorate.';
      let advisoryB = 'Farmers advised to move livestock to areas  with moderate pasture conditions.';
      AdvisoryMA.insert({
        'locationId': doc.locationid,
        'latitude': doc.latitude,
        'longitude': doc.longitude,
        'ward': 'test',
        'moisture': doc.CPOVRPR,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'week': weekNo
      });
      // console.log('Rainfall Distribution: ' + rainfallDistribution + 'SUM: ' + ltnsum + ' Moisture Availability: ' + moistureAvailability + ' Implication: ' + graughtClass);;
    } else if (moistureAvailability > 0.34 && moistureAvailability <= 0.68) {
      let implication = 'Moderately deficient Moisture';
      let advisoryA = 'Pasture conditions are expected to be rather precautious and it is advisable to keep small herds.';
      let advisoryB = 'Communities are advised to take measures to conserve available water in watering points. It is advisable to initiate discussions to forestal conflicts over grazing and watering areas.';
      // let advisoryC = 'It is advisable to initiate discussions to forestal conflicts over grazing and watering areas.';

      AdvisoryMA.insert({
        'locationId': doc.locationid,
        'latitude': doc.latitude,
        'longitude': doc.longitude,
        'ward': 'test',
        'moisture': doc.CPOVRPR,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'week': weekNo
      });
      // console.log('Rainfall Distribution: ' + rainfallDistribution + 'SUM: ' + ltnsum + ' Moisture Availability: ' + moistureAvailability + ' Implication: ' + graughtClass);;
    } else if (moistureAvailability > 0.68 && moistureAvailability <= 1.0) {
      let implication = 'Somewhat Deficit Moisture';
      let advisoryA = 'Pasture conditions are expected to be sufficiently ideal for livestock. Take insurance for your livestock if possible. ';
      let advisoryB = 'Ensure that water points are well prepared for water harvesting.';
      AdvisoryMA.insert({
        'locationId': doc.locationid,
        'latitude': doc.latitude,
        'longitude': doc.longitude,
        'ward': 'test',
         'moisture': doc.CPOVRPR,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'week': weekNo
      });
      // console.log('Rainfall Distribution: ' + rainfallDistribution + 'SUM: ' + ltnsum + ' Moisture Availability: ' + moistureAvailability + ' Implication: ' + graughtClass);;
    } else if (moistureAvailability > 1 && moistureAvailability <= 1.34) {
      let implication = 'Adequate Moisture';
      let advisoryA = 'Pasture conditions are expected to be good for livestock ';
      let advisoryB = 'Soil moisture levels expected to saturate and may result in surface runoff hence floods. It is advisable to maximise on water harvesting and avoid floods in rivers and in livestock yards as young ones may be drowned.';
      AdvisoryMA.insert({
        'locationId': doc.locationid,
        'latitude': doc.latitude,
        'longitude': doc.longitude,
        'ward': 'test',
        'moisture': doc.CPOVRPR,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'week': weekNo
      });
      // console.log('Rainfall Distribution: ' + rainfallDistribution + 'SUM: ' + ltnsum + ' Moisture Availability: ' + moistureAvailability + ' Implication: ' + graughtClass);;
    } else if (moistureAvailability > 1.34) {
      let implication = 'Excess Moisture';
      let advisoryA = 'Pasture conditions are expected to be good for livestock ';
      let advisoryB = 'Soil moisture levels expected to saturate and may result in surface runoff hence floods. It is advisable to maximise on water harvesting and avoid floods in rivers and in livestock yards as young ones may be drowned.';
      AdvisoryMA.insert({
        'locationId': doc.locationid,
        'latitude': doc.latitude,
        'longitude': doc.longitude,
        'ward': 'test',
         'moisture': doc.CPOVRPR,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'week': weekNo
      });
    }

  });

  //Last 30 days moisture Availability Departure from the Normal classification and loading into database
  dataLastThirtyDays.forEach(function(doc) {
    let MADFTN = (doc.DFLTPVP / doc.LTNASPO) * 100;
 console.log('DFLTPVP: ' + doc.DFLTPVP + ' LTNASPO: '+ doc.LTNASPO +' MADFTN: '+ MADFTN)
    if (MADFTN > 26) {
      let implication = 'VERY EXCESS SOIL MOISTURE';
      let advisoryA = 'Pasture conditions are excellent for livestock. Conserve excess pasture and cut hay and stack for future use ';
      let advisoryB = 'Soil moisture levels are saturated resulting in surface runoff. Maximise on water harvesting and be careful of floods in rivers and livestock yards';
      pastMoistureCondition.insert({
        'locationId': doc.locationid,
        'latitude': doc.latitude,
        'longitude': doc.longitude,
        'ward': 'test',
         'MADFTN': MADFTN,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'week': weekNo
      });
      // console.log('Rainfall Distribution: ' + rainfallDistribution + 'SUM: ' + ltnsum + ' Moisture Availability: ' + moistureAvailability + ' Implication: ' + graughtClass);;
    } else if (MADFTN < 26 && MADFTN >= 1) {
      let implication = 'EXCESS SOIL MOISTURE';
      let advisoryA = 'Pasture conditions are excellent for livestock. Conserve excess pasture and cut hay and stack for future use '
      let advisoryB = 'Soil moisture levels are saturated resulting in surface runoff and floods. Maximise on water harvesting and be careful of floods in rivers and livestock yards';
      pastMoistureCondition.insert({
        'locationId': doc.locationid,
        'latitude': doc.latitude,
        'longitude': doc.longitude,
        'ward': 'test',
         'MADFTN': MADFTN,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'week': weekNo
      });
      // console.log('Rainfall Distribution: ' + rainfallDistribution + 'SUM: ' + ltnsum + ' Moisture Availability: ' + moistureAvailability + ' Implication: ' + graughtClass);;
    } else if (MADFTN < 1 &&  MADFTN >= -25) {
      let implication = 'ADEQUATE SOIL MOISTURE';
      let advisoryA = 'Pasture conditions are good for livestock. Stack hay and paddock areas with pasture for conservation incase of adverse conditions in future.';
      let advisoryB = 'Ensure that water points are well prepared for harvesting. With fairly healthy animals consider taking insurance cover as a safety net.';
      pastMoistureCondition.insert({
        'locationId': doc.locationid,
        'latitude': doc.latitude,
        'longitude': doc.longitude,
        'ward': 'test',
         'MADFTN': MADFTN,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'week': weekNo
      });
      // console.log('Rainfall Distribution: ' + rainfallDistribution + 'SUM: ' + ltnsum + ' Moisture Availability: ' + moistureAvailability + ' Implication: ' + graughtClass);;
    } else if (MADFTN < -25 && MADFTN >= -50) {
      let implication = 'SOMEWHAT DEFICIT SOIL MOISTURE';
      let advisoryA = 'Pasture conditions are moderate and it is  advised that small herds, especially browsers, be kept. Explore possibilities of migrating to areas with adequate soil moisture conditions for pasture but avoid conflicts over grazing and watering areas.';
      let advisoryB = 'Communities are advised to take measures to  conserve water in watering and County government prepare hay, water trucks for delivery to the ward ';
      pastMoistureCondition.insert({
        'locationId': doc.locationid,
        'latitude': doc.latitude,
        'longitude': doc.longitude,
        'ward': 'test',
         'MADFTN': MADFTN,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'week': weekNo
      });
      // console.log('Rainfall Distribution: ' + rainfallDistribution + 'SUM: ' + ltnsum + ' Moisture Availability: ' + moistureAvailability + ' Implication: ' + graughtClass);;
    } else if (MADFTN < -50 && MADFTN >= -75) {
      let implication = 'DEFICIENT SOIL MOISTURE';
      let advisoryA = 'Soil is suffering from very decreased moisture and the pasture is stressed. County government need to mobilise provision of hay and water';
      let advisoryB = 'Farmers are advised to move livestock to areas  with adequate pasture conditions but avoid conflicts over grazing and watering areas.';
      pastMoistureCondition.insert({
        'locationId': doc.locationid,
        'latitude': doc.latitude,
        'longitude': doc.longitude,
        'ward': 'test',
         'MADFTN': MADFTN,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'week': weekNo
      });
    } else {
      let implication = 'VERY DEFICIENT SOIL MOISTURE';
      let advisoryA = 'Pasture conditions a very adverse. Utilise all sources of hay and pasture to save the animals';
      let advisoryB = 'County government need to take urgent action to provide hay and water';
      pastMoistureCondition.insert({
        'locationId': doc.locationid,
        'latitude': doc.latitude,
        'longitude': doc.longitude,
        'ward': 'test',
         'MADFTN': MADFTN,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'week': weekNo
      });
    }

  });

  //Forecast Draught Index calculation
  dataNextSevenDays.forEach(function(doc) {
    let draughtIndex = (doc.CSUMPRE / doc.LTNSUMP) * 100;

    if (draughtIndex >= 0 && draughtIndex <= 25) {
      let implication = 'Severe drought';
      let advisoryA = 'Pasture conditions are expected to be very poor with no grass and browse availability.';
      let advisoryB = 'It is advisable to destock through selling off weak animals. Slaughter weak animals to maximise on available pasture';
      let advisoryC = 'Migrate to Wards with Mild Drougtht Conditions';
      let advisoryD = 'County government advised to deliver for hay and water';

      AdvisoryDroughtIndex.insert({
        'locationId': doc.locationid,
        'latitude': doc.latitude,
        'longitude': doc.longitude,
        'ward': 'test',
        'draughtIndex': draughtIndex,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryC,
        'advisoryD': advisoryD,
        'week': weekNo
      });
    } else if (draughtIndex > 25 && draughtIndex <= 50) {
      let implication = 'Moderate Drought';
      let advisoryA = 'Pasture and  nutrient conditions are expected to deteriorate together with water availability. Send scouts to areas with mild drought conditions and prepare for migration';
      let advisoryB = 'It is advisable to replace grazers with browsers';
      let advisoryC = 'Conserve available water in watering point through all possible means. County governments prepare hay water trucks ready for delivery to the ward ';
      let advisoryD = 'Destock through Selling off Weak Animals and keep in-calf and lactacting ones for any conserved hay and water';

      AdvisoryDroughtIndex.insert({
        'locationId': doc.locationid,
        'latitude': doc.latitude,
        'longitude': doc.longitude,
        'ward': 'test',
        'draughtIndex': draughtIndex,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryC,
        'advisoryD': advisoryD,
        'week': weekNo
      });
    } else if (draughtIndex > 50 && draughtIndex <= 75) {
      let implication = 'Mild Drought';
      let advisoryA = 'Pasture conditions are ideal and farmers are advised not increase livestock numbers';
      let advisoryB = 'Sell livestock to maximise on market prices.';
      let advisoryC = 'Take insurance for your livestock.';
      let advisoryD = 'Vaccinate the animals to enhance immunity in case of diseases attacks';

      AdvisoryDroughtIndex.insert({
        'locationId': doc.locationid,
        'latitude': doc.latitude,
        'longitude': doc.longitude,
        'ward': 'test',
        'draughtIndex': draughtIndex,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryC,
        'advisoryD': advisoryD,
        'week': weekNo
      });
    } else if (draughtIndex > 75 && draughtIndex <= 125) {
      let implication = 'Normal';
      let advisoryA = 'Pasture conditions very good for both grazers and browser due to ample rainfall';
      let advisoryB = 'Ensure that all water points are sufficiently desilted to harvest all rain water. Community and private water points should have their dykes strengthened in case this has not been done';
      let advisoryC = 'Herders are advised to buy drugs for diseases which accompany high rainfall';
      let advisoryD = 'Avoid crossing livestock over flooded rivers as they may be swept';
      // let advisoryE = 'Clean the cattle shed regularly, through dug removal, to avoid fungal diseases';

      AdvisoryDroughtIndex.insert({
        'locationId': doc.locationid,
        'latitude': doc.latitude,
        'longitude': doc.longitude,
        'ward': 'test',
        'draughtIndex': draughtIndex,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryC,
        'advisoryD': advisoryD,
        'week': weekNo
      });
    } else if (draughtIndex > 125 && draughtIndex < 10000) {
      let implication = 'Wet';
      let advisoryA = 'Pasture conditions are expected to be very good for both grazers and browser due to ample rainfall';
      let advisoryB = 'Keep safe calves and kids to avoid being drowned or drenched in stagnant water';
      let advisoryC = 'Vaccinate animals against diseases which accompany high rainfall  especially Rift Valley Fever';
      let advisoryD = 'Avoid crossing livestock over flooded rivers as they may be swept';
      // let advisoryE = 'Clean the cattle shed regularly, through dug removal, to avoid fungal diseases';

      AdvisoryDroughtIndex.insert({
        'locationId': doc.locationid,
        'latitude': doc.latitude,
        'longitude': doc.longitude,
        'ward': 'test',
        'draughtIndex': draughtIndex,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryC,
        'advisoryD': advisoryD,
        'week': weekNo
      });
    } else {
      let draughtIndex = 0;
      let implication = 'Severe Drought';
      let advisoryA = 'Pasture conditions are expected to be very poor with no grass and browse availability.  ';
      let advisoryB = 'It is advisable to destock through selling off weak animals. Slaughter weak animals to maximise on available pasture';
      let advisoryC = 'Migrate to Wards with Mild Drougtht Conditions';
      let advisoryD = 'County government advised to deliver for hay and water';

      AdvisoryDroughtIndex.insert({
        'locationId': doc.locationid,
        'latitude': doc.latitude,
        'longitude': doc.longitude,
        'ward': 'test',
        'draughtIndex': draughtIndex,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryC,
        'advisoryD': advisoryD,
        'week': weekNo
      });
    }
  });

  //Rainfall departure calculation and loading into database for the past 30 days
  dataLastThirtyDays.forEach(function(doc) {
    let RDPI= (doc.DFLTSUM/ doc.LTNSUMP)*100;
console.log('DFLTSUL: '+ doc.DFLTSUM + 'LTNSUMP:'+ doc.LTNSUMP +' RDPI: '+RDPI);

    if (RDPI >= 25) {
      let implication = 'VERY HEAVY RAIN';
      let advisoryA = 'Due to very heavy rainfall: Pasture conditions are very good for both grazers and browser due to ample rainfall';
      let advisoryB = 'Avoid crossing livestock over flooded rivers as they may be swept';
      let advisoryC = 'Keep safe calves and kids to avoid being drowned or drenched in stagnant water. Vaccinate animals.';
      // let advisoryD = 'County government advised to deliver for hay and water';

      pastRainfallCondition.insert({
        'locationId': doc.locationid,
        'latitude':doc.latitude,
        'longitude':doc.longitude,
        'ward':"ward",
        'RDPI': RDPI,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryC,
        // 'advisoryD': advisoryD,
        'week': weekNo
      });
    } else if (RDPI <25 && RDPI >= 1) {
      let implication = 'HEAVY RAINFALL';
      let advisoryA = 'Due to heavy: Pasture conditions are very good for both grazers and browsers due to ample rainfall';
      let advisoryB = 'Avoid crossing livestock over flooded rivers as they may be swept. Desilt water pans, dams and strengthen dykes';
      let advisoryC = 'Buy drugs for diseases which accompany high rainfall and vaccinate the animals ';
      // let advisoryD = 'Destock through Selling off Weak Animals and keep in-calf and lactacting ones for any conserved hay and water';

      pastRainfallCondition.insert({
        'locationId': doc.locationid,
        'latitude':doc.latitude,
        'longitude':doc.longitude,
        'ward':"ward",
        'RDPI': RDPI,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryC,
        // 'advisoryD': advisoryD,
        'week': weekNo
      });
    } else if (RDPI < 1 && RDPI >= -25) {
      let implication = 'NORMAL RAINFALL';
      let advisoryA = 'As a resultt of normal rainfall: Pasture conditions are just ideal and farmers need not increase livestock numbers ';
      let advisoryB = 'Sell livestock to maximise on market prices. Take insurance cover for your healthy animals';
      let advisoryC = 'Vaccinate the animals to enhance immunity in case of diseases attacks';
      // let advisoryD = 'Sell livestock to maximise on market prices';

      pastRainfallCondition.insert({
        'locationId': doc.locationid,
        'latitude':doc.latitude,
        'longitude':doc.longitude,
        'ward':"ward",
        'RDPI': RDPI,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryC,
        // 'advisoryD': advisoryD,
        'week': weekNo
      });
    } else if ( RDPI < -25 && RDPI >= -50) {
      let implication = 'MODERATE RAINFAL';
      let advisoryA = 'Due to moderate rainfal: Pasture  as well as water availability conditions are moderate. Take insurance cover for your livestock ';
      let advisoryB = 'Destock through selling off weak animals and keep in-calf and lactacting ones on any conserved hay and water';
      let advisoryC = 'Diversify stock through replacement of grazers with browsers. Conserve available water. County government prepare hay, water trucks for delivery to the ward';
      // let advisoryD = 'Avoid crossing livestock over flooded rivers as they may be swept';

      pastRainfallCondition.insert({
        'locationId': doc.locationid,
        'latitude':doc.latitude,
        'longitude':doc.longitude,
        'ward':"ward",
        'RDPI': RDPI,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryC,
        // 'advisoryD': advisoryD,
        'week': weekNo
      });
    } else if (RDPI <-50 && RDPI >= -75) {
      let implication = 'POOR RAINFALL';
      let advisoryA = 'Due to poor rainfall: Pasture conditions are poor and limited or unavailable for livestock.  Explore areas with moderate rainfall conditions and prepare for migration';
      let advisoryB = 'Destock through selling off weak animals. Slaughter weak animals to maximise on any available pasture/hay. County government need to deliver hay and water';
      let advisoryC = 'Migrate to areas with moderate rainfall conditions';
      // let advisoryD = 'Avoid crossing livestock over flooded rivers as they may be swept';

      pastRainfallCondition.insert({
        'locationId': doc.locationid,
        'latitude':doc.latitude,
        'longitude':doc.longitude,
        'ward':"ward",
        'RDPI': RDPI,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryC,
        // 'advisoryD': advisoryD,
        'week': weekNo
      });
    } else if (RDPI < -75){

      let implication = 'VERY POOR/FAILED RAINS';
      let advisoryA = 'Due to very poor rainfall: Pasture is very poor and animal may die';
      let advisoryB = 'Utilise preserved hay or any available pasture. County government need to intensify delivery of hay and water';
      let advisoryC = 'Continue moving stronger animals to areas with better pasture conditions';
      // let advisoryD = 'County government advised to deliver for hay and water';

      pastRainfallCondition.insert({
        'locationId': doc.locationid,
        'latitude':doc.latitude,
        'longitude':doc.longitude,
        'ward':"ward",
        'RDPI': RDPI,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryC,
        // 'advisoryD': advisoryD,
        'week': weekNo
      });
    }
  });

});
