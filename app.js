const fs = require('fs');

const deepClone = require('./utils/deepClone');
const calculateDistance = require('./utils/calculateDistance');
const findOfficesNearby = require('./utils/findOfficesNearby');



//Question 2
//read the partners.json file synchronously
partnersPath = `${__dirname}/partners.json`;
const partners = JSON.parse(fs.readFileSync(partnersPath, 'utf-8'));
//an array to store the offices within 100km

let officesNearby = findOfficesNearby(calculateDistance, partners);
