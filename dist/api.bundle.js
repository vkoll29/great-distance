/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./utils/calculateDistance.js":
/*!************************************!*\
  !*** ./utils/calculateDistance.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const degToRad = __webpack_require__(/*! ./degToRad */ \"./utils/degToRad.js\");\r\n\r\n/** HAVERSINE FORMULA:\r\n * a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)\r\n * c = 2 ⋅ atan2( √a, √(1−a) )\r\n * d = R ⋅ c\r\n * WHERE:\r\n * φ1 is the reference latitude i.e central London (refLat)\r\n * φ2 is the latitude for each partner's location\r\n * λ denotes longitude\r\n */\r\nmodule.exports = (location1, location2) => {\r\n  const R = 6371; //earth's radius in km\r\n  let [lat1, lng1] = location1.split(',');\r\n  let [lat2, lng2] = location2.split(',');\r\n  latDiff = degToRad(lat1 - lat2);\r\n  lngDiff = degToRad(lng1 - lng2);\r\n  const a = Math.sin(latDiff / 2) ** 2 + Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * (Math.sin(lngDiff) ** 2);\r\n  const b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));\r\n  return R * b;\r\n};\n\n//# sourceURL=webpack://spidergap-coding-test-answers/./utils/calculateDistance.js?");

/***/ }),

/***/ "./utils/deepClone.js":
/*!****************************!*\
  !*** ./utils/deepClone.js ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = (obj) => {\r\n  objCopied = Object.assign({}, obj);\r\n  return objCopied;\r\n}\r\n\n\n//# sourceURL=webpack://spidergap-coding-test-answers/./utils/deepClone.js?");

/***/ }),

/***/ "./utils/degToRad.js":
/*!***************************!*\
  !*** ./utils/degToRad.js ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = (deg) => deg * Math.PI / 180;\r\n\n\n//# sourceURL=webpack://spidergap-coding-test-answers/./utils/degToRad.js?");

/***/ }),

/***/ "./utils/findOfficesNearby.js":
/*!************************************!*\
  !*** ./utils/findOfficesNearby.js ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = (calcDistance, partnersList) => {\r\n  //an array to store the offices within 100km\r\n  let officesNearby = [];\r\n\r\n  partnersList.forEach((partner) => {\r\n    let orgName = partner.organization;\r\n    const centralLondon = \"51.515419, -0.141099\";\r\n\r\n    partner.offices.forEach((office) => {\r\n      let distance = calcDistance(centralLondon, office.coordinates);\r\n\r\n      if (distance <= 100) {\r\n        let officeNearby = {};\r\n        officeNearby.organization = orgName;\r\n        officeNearby.address = office.address;\r\n\r\n        officesNearby.push(officeNearby);\r\n      }\r\n    })\r\n  }) \r\n\r\n  //sort the results\r\n  return officesNearby.sort((a, b) => a.organization > b.organization ? 1 : -1);\r\n};\n\n//# sourceURL=webpack://spidergap-coding-test-answers/./utils/findOfficesNearby.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!****************!*\
  !*** ./app.js ***!
  \****************/
eval("const fs = __webpack_require__(/*! fs */ \"fs\");\r\n\r\nconst deepClone = __webpack_require__(/*! ./utils/deepClone */ \"./utils/deepClone.js\");\r\nconst calculateDistance = __webpack_require__(/*! ./utils/calculateDistance */ \"./utils/calculateDistance.js\");\r\nconst findOfficesNearby = __webpack_require__(/*! ./utils/findOfficesNearby */ \"./utils/findOfficesNearby.js\");\r\n\r\n//Question 1\r\nlet person = {\r\n  name: \"Paddy\",\r\n  address: {\r\n    town: \"Lerum\",\r\n    country: \"Sweden\"\r\n  }\r\n};\r\nconst copiedPerson = deepClone(person);\r\n\r\n\r\n//Question 2\r\n//read the partners.json file synchronously\r\npartnersPath = `${__dirname}/partners.json`;\r\nconst partners = JSON.parse(fs.readFileSync(partnersPath, 'utf-8'));\r\n//an array to store the offices within 100km\r\n\r\nlet officesNearby = findOfficesNearby(calculateDistance, partners);\r\nconsole.log(officesNearby);\n\n//# sourceURL=webpack://spidergap-coding-test-answers/./app.js?");
})();

/******/ })()
;