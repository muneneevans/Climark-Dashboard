import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {HTTP} from 'meteor/http';
import Papa from 'papaparse';
import fs from 'fs';
import {NextSevenDays} from './../imports/api/nextsevendays';
// import {LastSevenDays} from './../imports/api/lastsevendays';
import {AdvisoryRD} from './../imports/api/advisoryRD';
import {AdvisoryMA} from './../imports/api/advisoryMA';
import {AdvisoryDroughtIndex} from './../imports/api/advisorydraughtIndex';
import {LastSevenDaysMA} from './../imports/api/lastSevenDaysMA';
import {LastSevenDaysRD} from './../imports/api/lastSevenDaysRD';
import {LastSevenDaysDI} from './../imports/api/lastSevenDaysDI';
import currentWeekNumber from 'current-week-number';
import https from 'https';
import querystring from 'querystring';


//startup method
Meteor.startup(() => {
  console.log('Papa parse imported');

  //Load next seven days
  // let nextSevenDayForecast = fs.readFileSync('./public/180701_next7.csv', 'utf8');
  // let lastSevenDayData = fs.readFileSync('./public/180701_past7.csv', 'utf8');
  let nextSevenDayForecast = Assets.getText('180715_next7.csv');
  let lastSevenDayData = Assets.getText('180715_past30.csv');

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

  let resultsLastSevenDaysData = Papa.parse(lastSevenDayData, {
    // download: true,
    delimiter: ",",
    header: true,
    preview: 3000,
    complete: function(resultsLastSevenDayData) {
      //console.log(resultsNextSevenDaysForecast);
    }
  });
  //Get the week number
  let weekNo = currentWeekNumber();

  //insert into the database
  let dataNextSevenDays = resultsNextSevenDaysForecast.data;
  let dataLastSevenDays = resultsLastSevenDaysData.data;
  console.log(resultsLastSevenDaysData.data[0]);
  dataNextSevenDays.forEach(function(doc) {
    NextSevenDays.insert(doc);
  });

  //moisture Availability Forecast classification and loading into database
  dataNextSevenDays.forEach(function(doc) {
    // LastSevenDays.insert(doc);

    let ltnsum = doc.LTNSUMP;
    let moistureAvailability = doc.CPOVRPR;
    let draughtIndex = (doc.CSUMPRE / doc.LTNSUMP) * 100;

    if (moistureAvailability >= 0 && moistureAvailability <= 0.34) {
      let implication = 'Very Deficient Moisture';
      let advisoryA = 'Due to deficient moisture conditions the state of pasture is expected to deteorate.';
      let advisoryB = 'Farmers advised to move livestock to areas  with moderate pasture conditions.';
      AdvisoryMA.insert({
        'Ward': doc.locationid,
        'Moisture': moistureAvailability,
        'Implication': implication,
        'AdvisoryA': advisoryA,
        'AdvisoryB': advisoryB,
        'week': weekNo
      });
      // console.log('Rainfall Distribution: ' + rainfallDistribution + 'SUM: ' + ltnsum + ' Moisture Availability: ' + moistureAvailability + ' Implication: ' + graughtClass);;
    } else if (moistureAvailability > 0.34 && moistureAvailability <= 0.68) {
      let implication = 'Moderately deficient Moisture';
      let advisoryA = 'Pasture conditions are expected to be rather precautious and it I advisable to keep small herds.';
      let advisoryB = 'Communities are advised to take measures to conserve available water in watering points';
      let advisoryC = 'It is advisable to initiate discussions to forestal conflicts over grazing and watering areas.';

      AdvisoryMA.insert({
        'Ward': doc.locationid,
        'Moisture': moistureAvailability,
        'Implication': implication,
        'AdvisoryA': advisoryA,
        'AdvisoryB': advisoryB,
        'AdvisoryB': advisoryB,
        'AdvisoryC': advisoryC,
        'week': weekNo
      });
      // console.log('Rainfall Distribution: ' + rainfallDistribution + 'SUM: ' + ltnsum + ' Moisture Availability: ' + moistureAvailability + ' Implication: ' + graughtClass);;
    } else if (moistureAvailability > 0.68 && moistureAvailability <= 1.0) {
      let implication = 'Somewhat Deficit Moisture';
      let advisoryA = 'Pasture conditions are expected to be good for livestock';
      let advisoryB = 'Ensure that water points are well prepared for water harvesting.';
      AdvisoryMA.insert({
        'Ward': doc.locationid,
        'Moisture': moistureAvailability,
        'Implication': implication,
        'AdvisoryA': advisoryA,
        'AdvisoryB': advisoryB,
        'week': weekNo
      });
      // console.log('Rainfall Distribution: ' + rainfallDistribution + 'SUM: ' + ltnsum + ' Moisture Availability: ' + moistureAvailability + ' Implication: ' + graughtClass);;
    } else if (moistureAvailability > 1 && moistureAvailability <= 1.34) {
      let implication = 'Adequate Moisture';
      let advisoryA = 'Pasture conditions are expected to be good for livestock ';
      let advisoryB = 'Soil moisture levels expected to saturate which may result in surface runoff. It is advisable to maximise on water harvesting and to be careful of floods in rivers and livestock yards.';
      AdvisoryMA.insert({
        'Ward': doc.locationid,
        'Moisture': moistureAvailability,
        'Implication': implication,
        'AdvisoryA': advisoryA,
        'AdvisoryB': advisoryB,
        'week': weekNo
      });
      // console.log('Rainfall Distribution: ' + rainfallDistribution + 'SUM: ' + ltnsum + ' Moisture Availability: ' + moistureAvailability + ' Implication: ' + graughtClass);;
    } else if (moistureAvailability > 1.34) {
      let implication = 'Excess Moisture';
      let advisoryA = 'Pasture conditions are expected to be good for livestock ';
      let advisoryB = 'Soil moisture levels expected to saturate which may result in surface runoff. It is advisable to maximise on water harvesting and to be careful of floods in rivers and livestock yards.';
      AdvisoryMA.insert({
        'Ward': doc.locationid,
        'Moisture': moistureAvailability,
        'Implication': implication,
        'AdvisoryA': advisoryA,
        'AdvisoryB': advisoryB,
        'week': weekNo
      });
    }

  });

  //moisture Availability Last 7 days classification and loading into database
  dataLastSevenDays.forEach(function(doc) {
    let ltnsum = doc.LTNSUMP;
    let moistureAvailability = doc.CPOVRPR;
    let draughtIndex = (doc.CSUMPRE / doc.LTNSUMP) * 100;

    if (moistureAvailability >= 0 && moistureAvailability <= 0.34) {
      let implication = 'Very Deficient Moisture';
      let advisory ='Soil is suffering from very decreased moisture and the pasture is stressed.';
      let advisoryB='Farmers are advised to move livestock to areas  with moderate pasture conditions.';
      LastSevenDaysMA.insert({'Ward': doc.locationid, 'Moisture': moistureAvailability, 'Implication': implication, 'Advisory': advisory,'AdvisoryB':advisoryB, 'week': weekNo});
      // console.log('Rainfall Distribution: ' + rainfallDistribution + 'SUM: ' + ltnsum + ' Moisture Availability: ' + moistureAvailability + ' Implication: ' + graughtClass);;
    } else if (moistureAvailability > 0.34 && moistureAvailability <= 0.68) {
      let implication = 'Moderately deficient Moisture';
      let advisory = 'pasture conditions are rather precautious and it is advised that small herds be kept'
      let advisoryB='Communities are advised to take measures to conserve available water in watering points';
      LastSevenDaysMA.insert({'Ward': doc.locationid, 'Moisture': moistureAvailability, 'Implication': implication, 'Advisory': advisory,'AdvisoryB':advisoryB, 'week': weekNo});
      // console.log('Rainfall Distribution: ' + rainfallDistribution + 'SUM: ' + ltnsum + ' Moisture Availability: ' + moistureAvailability + ' Implication: ' + graughtClass);;
    } else if (moistureAvailability > 0.68 && moistureAvailability <= 1.0) {
      let implication = 'Normal/Average Moisture';
      let advisory = 'Pasture conditions are excellent for livestock';
      let advisoryB='Ensure that water points are well prepared for harvesting.';
      LastSevenDaysMA.insert({'Ward': doc.locationid, 'Moisture': moistureAvailability, 'Implication': implication, 'Advisory': advisory,'AdvisoryB':advisoryB,  'week': weekNo});
      // console.log('Rainfall Distribution: ' + rainfallDistribution + 'SUM: ' + ltnsum + ' Moisture Availability: ' + moistureAvailability + ' Implication: ' + graughtClass);;
    } else if (moistureAvailability > 1 && moistureAvailability <= 1.34) {
      let implication = 'Adequate Moisture';
      let advisory = 'Pasture conditions are excellent for livestock';
    let advisoryB='Soil moisture levels are saturated resulting in surface runoff. Maximise on water harvesting and be careful of floods in rivers and livestock yards';
      LastSevenDaysMA.insert({'Ward': doc.locationid, 'Moisture': moistureAvailability, 'Implication': implication, 'Advisory': advisory,'AdvisoryB':advisoryB, 'week': weekNo});
      // console.log('Rainfall Distribution: ' + rainfallDistribution + 'SUM: ' + ltnsum + ' Moisture Availability: ' + moistureAvailability + ' Implication: ' + graughtClass);;
    } else if (moistureAvailability > 1.34) {
      let implication = 'Excess Moisture';
      let advisory = 'Pasture conditions are excellent for livestock';
      let advisoryB='Soil moisture levels are saturated resulting in surface runoff. Maximise on water harvesting and be careful of floods in rivers and livestock yards';
      LastSevenDaysMA.insert({'Ward': doc.locationid, 'Moisture': moistureAvailability, 'Implication': implication, 'Advisory': advisory, 'AdvisoryB':advisoryB, 'week': weekNo});
    }

  });

  //Forecast Rainfall Distribution and classification
  dataNextSevenDays.forEach(function(doc) {
    let rainfallDistribution = doc.CSUMPRE;
    if (rainfallDistribution >= 0 && rainfallDistribution <= 10) {
      let implication = 'Light Rain';
      let advisory = 'The light rains expected in the next the 7 days may sustain actively growing grass, however it is expected that pasture regeneration will be slow or zero.';
      let advisoryB = 'The expected light rains may initiate regeneration of pasture. ';
      // let advisoryC = 'PASTURE IS REGENERATED AT START OF SEASON';
      AdvisoryRD.insert({
        'Ward': doc.locationid,
        'rainfallDistribution': rainfallDistribution,
        'Implication': implication,
        'AdvisoryA': advisory,
        'AdvisoryB': advisoryB,
        // 'AdvisoryC': advisoryC,
        'week': weekNo
      });
    } else if (rainfallDistribution > 10 && rainfallDistribution <= 40) {
      let implication = 'Moderate';
      let advisory = 'The expected amount of rainfall may be sufficient to sustain pasture and recharge water reservoirs for animals.';
      let advisoryB = 'The moderate rainfall is expected to give norrmal pasture and foliage growth.';
      let advisoryC = 'Normal pasture and foliage growth expected';
      AdvisoryRD.insert({
        'Ward': doc.locationid,
        'rainfallDistribution': rainfallDistribution,
        'Implication': implication,
        'AdvisoryA': advisory,
        'AdvisoryB': advisoryB,
        'AdvisoryC': advisoryC,
        'week': weekNo
      });
    } else if (rainfallDistribution > 40 && rainfallDistribution <= 100) {
      let implication = 'Heavy';
      let advisory = 'Pasture  conditions are expected to be good due to high rainfall amounts in the next 7 days.';
      let advisoryB = 'Flooding is expected to occur and it is advisable to take caution';
      let advisoryC = 'Water points are expected to be  replenished so be advised to strengthen dam walls';
      let advisoryD = 'Avoid shelter under trees due to lighting strike';
      AdvisoryRD.insert({
        'Ward': doc.locationid,
        'rainfallDistribution': rainfallDistribution,
        'Implication': implication,
        'AdvisoryA': advisory,
        'AdvisoryB': advisoryB,
        'AdvisoryC': advisoryC,
        'AdvisoryD': advisoryD,
        'week': weekNo
      });
    } else if (rainfallDistribution >100 && rainfallDistribution <= 1000) {
      let implication = 'Very Heavy';
      let advisory = 'Pasture  conditions are expected to be good due to high rainfall amounts in the next 7 days.';
      let advisoryB = 'You are advised not to cross flooded rivers as livestock may be swept away  due to expected heavy rains ';
      let advisoryC = 'Due to expected heavy rains there is possibility of disease outbreaks';
      let advisoryD = 'Avoid shelter under trees due to lighting strike';
      AdvisoryRD.insert({
        'Ward': doc.locationid,
        'rainfallDistribution': rainfallDistribution,
        'Implication': implication,
        'AdvisoryA': advisory,
        'AdvisoryB': advisoryB,
        'AdvisoryC': advisoryC,
        'AdvisoryD': advisoryD,
        'week': weekNo
      });
    }
  });
  //Last seven days Forecast Rainfall Distribution and classification
  dataLastSevenDays.forEach(function(doc) {
    let rainfallDistribution = doc.CSUMPRE;
    if (rainfallDistribution >= 0 && rainfallDistribution <= 10) {
      let implication = 'Light rain';
      let advisory = 'The light rains realised in the last the 7 days may sustain actively growing grass, however pasture which has started drying may not be able to be  resucitated.';
      let advisoryB = 'Light rains may initiate regeneration of pasture.';
      LastSevenDaysRD.insert({
        'Ward': doc.locationid,
        'rainfallDistribution': rainfallDistribution,
        'Implication': implication,
        'AdvisoryA': advisory,
        'AdvisoryB': advisoryB,
        'week': weekNo
      });
    } else if (rainfallDistribution > 10 && rainfallDistribution <= 40) {
      let implication = 'Moderate';
      let advisory = 'The amount of rain is sufficient to sustain pasture and recharge water reservoirs for animal water.';
      let advisoryB = 'The moderate rainfall to give norrmal pasture and foliage growth.';
      let advisoryC = 'Normal pasture and foliage growth is maintained';
      LastSevenDaysRD.insert({
        'Ward': doc.locationid,
        'rainfallDistribution': rainfallDistribution,
        'Implication': implication,
        'AdvisoryA': advisory,
        'AdvisoryB': advisoryB,
        'AdvisoryC': advisoryC,
        'week': weekNo
      });
    } else if (rainfallDistribution > 40 && rainfallDistribution <= 100) {
      let implication = 'Heavy';
      let advisory = 'Pasture  conditions are good due to high rainfall amounts realised in the last 7 days that have given ample growing conditions.';
      let advisoryB = 'Flooding may occur take caution';
      let advisoryC = 'Water points are replenished so be advised to strengthen dam walls';
      let advisoryD = 'Avoid shelter under trees due to lighting strike';
      LastSevenDaysRD.insert({
        'Ward': doc.locationid,
        'rainfallDistribution': rainfallDistribution,
        'Implication': implication,
        'AdvisoryA': advisory,
        'AdvisoryB': advisoryB,
        'AdvisoryC': advisoryC,
        'AdvisoryD': advisoryD,
        'week': weekNo
      });
    } else if (rainfallDistribution > 100 && rainfallDistribution <= 1000) {
      let implication = 'Very Heavy';
      let advisory = 'Pasture  conditions are good due to high rainfall amounts realised in the last 7 days that have given ample growing conditions.';
      let advisoryB = 'Avoid crossing flooded rivers as livestock may be swept away  ';
      let advisoryC = 'Be advised on possible of disease outbreaks due to heavy rains';
      let advisoryD = 'Avoid shelter under trees due to lighting strike';
      AdvisoryRD.insert({
        'Ward': doc.locationid,
        'rainfallDistribution': rainfallDistribution,
        'Implication': implication,
        'AdvisoryA': advisory,
        'AdvisoryB': advisoryB,
        'AdvisoryC': advisoryC,
        'AdvisoryD': advisoryD,
        'week': weekNo
      });
    }
  });

  //Forecast Draught Index calculation
  dataNextSevenDays.forEach(function(doc) {
    let draughtIndex = (doc.CSUMPRE / doc.LTNSUMP) * 100;
    console.log('CSUMPRE: ' + doc.CSUMPRE + ' LTNSUMP: ' + doc.LTNSUMP + ' Draught Index: ' + draughtIndex);

    if (draughtIndex >= 0 && draughtIndex <= 25) {
      let implication = 'Severe drought';
      let advisoryA = 'Pasture conditions are expected to be very poor with no grass and browse availability.';
      let advisoryB = 'It is advisable to destock through selling off weak animals. Kill the weak animals to maximise on available pasture';
      let advisoryC = 'Migrate to Wards with Mild Drougtht Conditions';
      let advisoryD = 'County government advised to deliver for hay and water';

      AdvisoryDroughtIndex.insert({
        'ward': doc.locationid,
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
        'ward': doc.locationid,
        'draughtIndex': draughtIndex,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryD,
        'advisoryD': advisoryD,
        'week': weekNo
      });
    } else if (draughtIndex > 50 && draughtIndex <= 75) {
      let implication = 'Mild Drought';
      let advisoryA = 'Pasture conditions are ideal and farmers are advised not increase livestock numbers';
      let advisoryB = 'Vaccinate the animals incase conditions deterioriate to render some animals sustainable to diseases attack';
      let advisoryC = 'Desilt water points in order to harvest  rainwater incase it rains';
      let advisoryD = 'Sell livestock to maximise on market prices';

      AdvisoryDroughtIndex.insert({
        'ward': doc.locationid,
        'draughtIndex': draughtIndex,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryD,
        'advisoryD': advisoryD,
        'week': weekNo
      });
    } else if (draughtIndex > 75 && draughtIndex <= 125) {
      let implication = 'Normal';
      let advisoryA = 'Pasture conditions very good for both grazers and browser due to ample rainfall';
      let advisoryB = 'Ensure that all water points are sufficiently desilted to harvest all rain water. Community and private water points should have their dykes strengthened in case this has not been done';
      let advisoryC = 'Herders are advised to buy drugs for diseases which accompany high rainfall';
      let advisoryD = 'Avoid crossing livestock over flooded rivers as they may be swept';
      let advisoryE = 'Clean the cattle shed regularly, through dug removal, to avoid fungal diseases';

      AdvisoryDroughtIndex.insert({
        'ward': doc.locationid,
        'draughtIndex': draughtIndex,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryD,
        'advisoryD': advisoryD,
        'advisoryE': advisoryE,
        'week': weekNo
      });
    } else if (draughtIndex > 125 && draughtIndex < 10000) {
      let implication = 'Wet';
      let advisoryA = 'Pasture conditions are expected to be very good for both grazers and browser due to ample rainfall';
      let advisoryB = 'Keep safe calves and kids to avoid being drowned or drenched in stagnant water';
      let advisoryC = 'Vaccinate animals against diseases which accompany high rainfall  especially Rift Valley Fever';
      let advisoryD = 'Avoid crossing livestock over flooded rivers as they may be swept';
      let advisoryE = 'Clean the cattle shed regularly, through dug removal, to avoid fungal diseases';

      AdvisoryDroughtIndex.insert({
        'ward': doc.locationid,
        'draughtIndex': draughtIndex,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryD,
        'advisoryD': advisoryD,
        'advisoryE': advisoryE,
        'week': weekNo
      });
    } else {
      let draughtIndex = 0;
      let implication = 'Severe Drought';
      let advisoryA = 'Pasture conditions are expected to be very poor with no grass and browse availability.  ';
      let advisoryB = 'It is advisable to destock through selling off weak animals. Kill the weak animals to maximise on available pasture';
      let advisoryC = 'Migrate to Wards with Mild Drougtht Conditions';
      let advisoryD = 'County government advised to deliver for hay and water';

      AdvisoryDroughtIndex.insert({
        'ward': doc.locationid,
        'draughtIndex': draughtIndex,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryD,
        'advisoryD': advisoryD,
        'week': weekNo
      });
    }
  });

  //Draught index calculation and loading into database for the past 7 days
  dataLastSevenDays.forEach(function(doc) {
    let draughtIndex = (doc.CSUMPRE / doc.LTNSUMP) * 100;
    console.log('CSUMPRE: ' + doc.CSUMPRE + ' LTNSUMP: ' + doc.LTNSUMP + ' Draught Index: ' + draughtIndex);

    if (draughtIndex >= 0 && draughtIndex <= 25) {
      let implication = 'Severe Drought';
      let advisoryA = 'Pasture conditions very poor with no grass availability.                      ';
      let advisoryB = 'Destock through Selling off Weak Animals. Kill the weak Animals to Maximise on available pasture';
      let advisoryC = 'Migrate to Wards with Mild Drought Conditions';
      let advisoryD = 'County government advised to deliver for hay and water';

      LastSevenDaysDI.insert({
        'ward': doc.locationid,
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
      let advisoryA = 'Pasture and  nutrient conditions are low together with water availability. Send scouts to areas with mild drought conditions and prepare for migration';
      let advisoryB = 'Diversify stock through replacement of grazers with browsers.';
      let advisoryC = 'Conserve available water in watering point through all possible means. County governments prepare hay water trucks ready for delivery to the ward ';
      let advisoryD = 'Destock through Selling off Weak Animals and keep in-calf and lactacting ones for any conserved hay and water';

      LastSevenDaysDI.insert({
        'ward': doc.locationid,
        'draughtIndex': draughtIndex,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryD,
        'advisoryD': advisoryD,
        'week': weekNo
      });
    } else if (draughtIndex >50 && draughtIndex <= 75) {
      let implication = 'Mild Drought';
      let advisoryA = 'Pasture conditions are ideal and farmers are advised not increase livestock numbers';
      let advisoryB = 'Vaccinate the animals incase conditions deterioriate to render some animals sustainable to diseases attack';
      let advisoryC = 'Desilt water points in order to harvest  rainwater incase it rains';
      let advisoryD = 'Sell livestock to maximise on market prices';

      LastSevenDaysDI.insert({
        'ward': doc.locationid,
        'draughtIndex': draughtIndex,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryD,
        'advisoryD': advisoryD,
        'week': weekNo
      });
    } else if (draughtIndex > 75 && draughtIndex <= 125) {
      let implication = 'Normal';
      let advisoryA = 'Pasture conditions very good for both grazers and browser due to ample rainfall';
      let advisoryB = 'Make sure that all water points all sufficiently desilted to harvest all rain water. Community and private water point should have their dykes are strengthened where this has not been done';
      let advisoryC = 'Herders are advised to buy drugs for diseases which accompany high rainfall';
      let advisoryD = 'Avoid crossing livestock over flooded rivers as they may be swept';

      LastSevenDaysDI.insert({
        'ward': doc.locationid,
        'draughtIndex': draughtIndex,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryD,
        'advisoryD': advisoryD,
        'week': weekNo
      });
    } else if (draughtIndex > 125 && draughtIndex < 10000) {
      let implication = 'Wet';
      let advisoryA = 'Pasture conditions very good for both grazers and browser due to ample rainfall';
      let advisoryB = 'Keep safe calves and kids to avoid being drowned by drenched in stagnant water ';
      let advisoryC = 'Vaccinate animals against diseases which accompany high rainfall';
      let advisoryD = 'Avoid crossing livestock over flooded rivers as they may be swept';

      LastSevenDaysDI.insert({
        'ward': doc.locationid,
        'draughtIndex': draughtIndex,
        'implication': implication,
        'advisoryA': advisoryA,
        'advisoryB': advisoryB,
        'advisoryC': advisoryD,
        'advisoryD': advisoryD,
        'week': weekNo
      });
    } else {
      let draughtIndex = 0;
      let implication = 'Severe Drought';
      let advisoryA = 'Pasture conditions very poor with no grass availability.                               ';
      let advisoryB = 'Destock through Selling off Weak Animals. Kill the weak Animals to Maximise on available pasture';
      let advisoryC = 'Migrate to Wards with Mild Drougtht Conditions';
      let advisoryD = 'County government advised to deliver for hay and water';

      LastSevenDaysDI.insert({
        'ward': doc.locationid,
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


});

