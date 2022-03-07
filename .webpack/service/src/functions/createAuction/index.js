/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/createAuction/index.ts":
/*!**********************************************!*\
  !*** ./src/functions/createAuction/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handler = void 0;\nconst api_gateway_1 = __webpack_require__(/*! ../../libs/api-gateway */ \"./src/libs/api-gateway.ts\");\nconst types_1 = __webpack_require__(/*! ./types */ \"./src/functions/createAuction/types.ts\");\nconst uuid_1 = __webpack_require__(/*! uuid */ \"uuid\");\nconst aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ \"aws-sdk\"));\nconst commonMiddleware_1 = __importDefault(__webpack_require__(/*! ../../libs/commonMiddleware */ \"./src/libs/commonMiddleware.ts\"));\nconst dynamoDB = new aws_sdk_1.default.DynamoDB.DocumentClient();\nconst createAuction = async (event) => {\n    const { title } = event === null || event === void 0 ? void 0 : event.body;\n    const now = new Date();\n    const endDate = new Date();\n    endDate.setHours(now.getHours() + 1);\n    const auction = {\n        id: (0, uuid_1.v4)(),\n        title,\n        status: types_1.AuctionStatus.OPEN,\n        createdAt: now.toISOString(),\n        endDate: endDate.toISOString(),\n        highestBid: {\n            amount: 0,\n        },\n    };\n    await dynamoDB\n        .put({\n        TableName: process.env.AUCTIONS_TABLE_NAME,\n        Item: auction,\n    })\n        .promise();\n    return (0, api_gateway_1.formatJSONResponse)(auction, 201);\n};\nexports.handler = (0, commonMiddleware_1.default)(createAuction);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZUF1Y3Rpb24vaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVybGVzcy1mcmFtZXdvcmsvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZUF1Y3Rpb24vaW5kZXgudHM/MTAwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElHYXRld2F5RXZlbnQgfSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCB7IGZvcm1hdEpTT05SZXNwb25zZSB9IGZyb20gJy4uLy4uL2xpYnMvYXBpLWdhdGV3YXknO1xuaW1wb3J0IHsgSGFuZGxlciB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHsgUmVxdWVzdEJvZHksIEF1Y3Rpb25TdGF0dXMsIE93bkV2ZW50IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgQVdTIGZyb20gJ2F3cy1zZGsnO1xuaW1wb3J0IGNvbW1vbk1pZGRsZXdhcmUgZnJvbSAnLi4vLi4vbGlicy9jb21tb25NaWRkbGV3YXJlJztcblxuY29uc3QgZHluYW1vREIgPSBuZXcgQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50KCk7XG5cbmNvbnN0IGNyZWF0ZUF1Y3Rpb24gPSBhc3luYyAoZXZlbnQ6IEFQSUdhdGV3YXlFdmVudCAmIE93bkV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyB0aXRsZSB9OiBSZXF1ZXN0Qm9keSA9IGV2ZW50Py5ib2R5O1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgZW5kRGF0ZS5zZXRIb3Vycyhub3cuZ2V0SG91cnMoKSArIDEpO1xuXG4gICAgY29uc3QgYXVjdGlvbiA9IHtcbiAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHN0YXR1czogQXVjdGlvblN0YXR1cy5PUEVOLFxuICAgICAgICBjcmVhdGVkQXQ6IG5vdy50b0lTT1N0cmluZygpLFxuICAgICAgICBlbmREYXRlOiBlbmREYXRlLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIGhpZ2hlc3RCaWQ6IHtcbiAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgYXdhaXQgZHluYW1vREJcbiAgICAgICAgLnB1dCh7XG4gICAgICAgICAgICBUYWJsZU5hbWU6IHByb2Nlc3MuZW52LkFVQ1RJT05TX1RBQkxFX05BTUUhLFxuICAgICAgICAgICAgSXRlbTogYXVjdGlvbixcbiAgICAgICAgfSlcbiAgICAgICAgLnByb21pc2UoKTtcblxuICAgIHJldHVybiBmb3JtYXRKU09OUmVzcG9uc2UoYXVjdGlvbiwgMjAxKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyOiBIYW5kbGVyID0gY29tbW9uTWlkZGxld2FyZShjcmVhdGVBdWN0aW9uKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/createAuction/index.ts\n");

/***/ }),

/***/ "./src/functions/createAuction/types.ts":
/*!**********************************************!*\
  !*** ./src/functions/createAuction/types.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AuctionStatus = void 0;\nvar AuctionStatus;\n(function (AuctionStatus) {\n    AuctionStatus[\"OPEN\"] = \"OPEN\";\n})(AuctionStatus = exports.AuctionStatus || (exports.AuctionStatus = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZUF1Y3Rpb24vdHlwZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzLWZyYW1ld29yay8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlQXVjdGlvbi90eXBlcy50cz9jMDVmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEF1Y3Rpb25TdGF0dXMge1xuICAgIE9QRU4gPSAnT1BFTicsXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RCb2R5ID0ge1xuICAgIHRpdGxlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE93bkV2ZW50IHtcbiAgICBib2R5OiBSZXF1ZXN0Qm9keTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/createAuction/types.ts\n");

/***/ }),

/***/ "./src/libs/api-gateway.ts":
/*!*********************************!*\
  !*** ./src/libs/api-gateway.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.formatJSONResponse = void 0;\nconst formatJSONResponse = (response, statusCode = 200) => {\n    return {\n        statusCode,\n        body: JSON.stringify(response),\n    };\n};\nexports.formatJSONResponse = formatJSONResponse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGktZ2F0ZXdheS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MtZnJhbWV3b3JrLy4vc3JjL2xpYnMvYXBpLWdhdGV3YXkudHM/NTMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZm9ybWF0SlNPTlJlc3BvbnNlID0gKHJlc3BvbnNlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBzdGF0dXNDb2RlID0gMjAwKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzQ29kZSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpLFxuICAgIH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/api-gateway.ts\n");

/***/ }),

/***/ "./src/libs/commonMiddleware.ts":
/*!**************************************!*\
  !*** ./src/libs/commonMiddleware.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst core_1 = __importDefault(__webpack_require__(/*! @middy/core */ \"@middy/core\"));\nconst http_json_body_parser_1 = __importDefault(__webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\"));\nconst http_event_normalizer_1 = __importDefault(__webpack_require__(/*! @middy/http-event-normalizer */ \"@middy/http-event-normalizer\"));\nconst http_error_handler_1 = __importDefault(__webpack_require__(/*! @middy/http-error-handler */ \"@middy/http-error-handler\"));\nexports[\"default\"] = (handler) => (0, core_1.default)(handler).use([(0, http_json_body_parser_1.default)(), (0, http_event_normalizer_1.default)(), (0, http_error_handler_1.default)()]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9jb21tb25NaWRkbGV3YXJlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MtZnJhbWV3b3JrLy4vc3JjL2xpYnMvY29tbW9uTWlkZGxld2FyZS50cz9lNDYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkeSBmcm9tICdAbWlkZHkvY29yZSc7XG5pbXBvcnQgaHR0cEpzb25Cb2R5UGFyc2VyIGZyb20gJ0BtaWRkeS9odHRwLWpzb24tYm9keS1wYXJzZXInO1xuaW1wb3J0IGh0dHBFdmVudE5vcm1hbGl6ZXIgZnJvbSAnQG1pZGR5L2h0dHAtZXZlbnQtbm9ybWFsaXplcic7XG5pbXBvcnQgaHR0cEVycm9ySGFuZGxlciBmcm9tICdAbWlkZHkvaHR0cC1lcnJvci1oYW5kbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGhhbmRsZXI6IGFueSkgPT4gbWlkZHkoaGFuZGxlcikudXNlKFtodHRwSnNvbkJvZHlQYXJzZXIoKSwgaHR0cEV2ZW50Tm9ybWFsaXplcigpLCBodHRwRXJyb3JIYW5kbGVyKCldKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/commonMiddleware.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-error-handler":
/*!********************************************!*\
  !*** external "@middy/http-error-handler" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-error-handler");

/***/ }),

/***/ "@middy/http-event-normalizer":
/*!***********************************************!*\
  !*** external "@middy/http-event-normalizer" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-event-normalizer");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/createAuction/index.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;