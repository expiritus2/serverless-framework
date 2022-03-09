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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handler = void 0;\nconst api_gateway_1 = __webpack_require__(/*! ../../libs/api-gateway */ \"./src/libs/api-gateway.ts\");\nconst types_1 = __webpack_require__(/*! ./types */ \"./src/functions/createAuction/types.ts\");\nconst uuid_1 = __webpack_require__(/*! uuid */ \"uuid\");\nconst aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ \"aws-sdk\"));\nconst commonMiddleware_1 = __importDefault(__webpack_require__(/*! ../../libs/commonMiddleware */ \"./src/libs/commonMiddleware.ts\"));\nconst createAuctionSchema_1 = __importDefault(__webpack_require__(/*! ../../libs/schemas/createAuctionSchema */ \"./src/libs/schemas/createAuctionSchema.ts\"));\nconst validator_1 = __importDefault(__webpack_require__(/*! @middy/validator */ \"@middy/validator\"));\nconst dynamoDB = new aws_sdk_1.default.DynamoDB.DocumentClient();\nconst createAuction = async (event) => {\n    const { title } = event === null || event === void 0 ? void 0 : event.body;\n    const now = new Date();\n    const endDate = new Date();\n    endDate.setHours(now.getHours() + 1);\n    const auction = {\n        id: (0, uuid_1.v4)(),\n        title,\n        status: types_1.AuctionStatus.OPEN,\n        createdAt: now.toISOString(),\n        endingAt: endDate.toISOString(),\n        highestBid: {\n            amount: 0,\n        },\n    };\n    await dynamoDB\n        .put({\n        TableName: process.env.AUCTIONS_TABLE_NAME,\n        Item: auction,\n    })\n        .promise();\n    return (0, api_gateway_1.formatJSONResponse)(auction, 201);\n};\nexports.handler = (0, commonMiddleware_1.default)(createAuction).use((0, validator_1.default)({ inputSchema: createAuctionSchema_1.default }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZUF1Y3Rpb24vaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MtZnJhbWV3b3JrLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVBdWN0aW9uL2luZGV4LnRzPzEwMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJR2F0ZXdheUV2ZW50IH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgeyBmb3JtYXRKU09OUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9saWJzL2FwaS1nYXRld2F5JztcbmltcG9ydCB7IEhhbmRsZXIgfSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCB7IFJlcXVlc3RCb2R5LCBBdWN0aW9uU3RhdHVzLCBPd25FdmVudCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IEFXUyBmcm9tICdhd3Mtc2RrJztcbmltcG9ydCBjb21tb25NaWRkbGV3YXJlIGZyb20gJy4uLy4uL2xpYnMvY29tbW9uTWlkZGxld2FyZSc7XG5pbXBvcnQgY3JlYXRlQXVjdGlvblNjaGVtYSBmcm9tICcuLi8uLi9saWJzL3NjaGVtYXMvY3JlYXRlQXVjdGlvblNjaGVtYSc7XG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gJ0BtaWRkeS92YWxpZGF0b3InO1xuXG5jb25zdCBkeW5hbW9EQiA9IG5ldyBBV1MuRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKTtcblxuY29uc3QgY3JlYXRlQXVjdGlvbiA9IGFzeW5jIChldmVudDogQVBJR2F0ZXdheUV2ZW50ICYgT3duRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHRpdGxlIH06IFJlcXVlc3RCb2R5ID0gZXZlbnQ/LmJvZHk7XG4gICAgLy8gY29uc3QgeyBlbWFpbCB9ID0gZXZlbnQucmVxdWVzdENvbnRleHQuYXV0aG9yaXplcjtcblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgZW5kRGF0ZS5zZXRIb3Vycyhub3cuZ2V0SG91cnMoKSArIDEpO1xuXG4gICAgY29uc3QgYXVjdGlvbiA9IHtcbiAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHN0YXR1czogQXVjdGlvblN0YXR1cy5PUEVOLFxuICAgICAgICBjcmVhdGVkQXQ6IG5vdy50b0lTT1N0cmluZygpLFxuICAgICAgICBlbmRpbmdBdDogZW5kRGF0ZS50b0lTT1N0cmluZygpLFxuICAgICAgICBoaWdoZXN0QmlkOiB7XG4gICAgICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNlbGxlcjogZW1haWwsXG4gICAgfTtcblxuICAgIGF3YWl0IGR5bmFtb0RCXG4gICAgICAgIC5wdXQoe1xuICAgICAgICAgICAgVGFibGVOYW1lOiBwcm9jZXNzLmVudi5BVUNUSU9OU19UQUJMRV9OQU1FISxcbiAgICAgICAgICAgIEl0ZW06IGF1Y3Rpb24sXG4gICAgICAgIH0pXG4gICAgICAgIC5wcm9taXNlKCk7XG5cbiAgICByZXR1cm4gZm9ybWF0SlNPTlJlc3BvbnNlKGF1Y3Rpb24sIDIwMSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlcjogSGFuZGxlciA9IGNvbW1vbk1pZGRsZXdhcmUoY3JlYXRlQXVjdGlvbikudXNlKHZhbGlkYXRvcih7IGlucHV0U2NoZW1hOiBjcmVhdGVBdWN0aW9uU2NoZW1hIH0pKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/createAuction/index.ts\n");

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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.formatJSONResponse = void 0;\nconst formatJSONResponse = (body, statusCode = 200) => {\n    return {\n        statusCode,\n        body: JSON.stringify(body),\n    };\n};\nexports.formatJSONResponse = formatJSONResponse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGktZ2F0ZXdheS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MtZnJhbWV3b3JrLy4vc3JjL2xpYnMvYXBpLWdhdGV3YXkudHM/NTMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElHYXRld2F5UHJveHlSZXN1bHQgfSBmcm9tICdhd3MtbGFtYmRhJztcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEpTT05SZXNwb25zZSA9IChib2R5OiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBzdGF0dXNDb2RlID0gMjAwKTogQVBJR2F0ZXdheVByb3h5UmVzdWx0ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICB9O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/api-gateway.ts\n");

/***/ }),

/***/ "./src/libs/commonMiddleware.ts":
/*!**************************************!*\
  !*** ./src/libs/commonMiddleware.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst core_1 = __importDefault(__webpack_require__(/*! @middy/core */ \"@middy/core\"));\nconst http_json_body_parser_1 = __importDefault(__webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\"));\nconst http_event_normalizer_1 = __importDefault(__webpack_require__(/*! @middy/http-event-normalizer */ \"@middy/http-event-normalizer\"));\nconst http_error_handler_1 = __importDefault(__webpack_require__(/*! @middy/http-error-handler */ \"@middy/http-error-handler\"));\nexports[\"default\"] = (handler) => (0, core_1.default)(handler).use([(0, http_json_body_parser_1.default)(), (0, http_event_normalizer_1.default)(), (0, http_error_handler_1.default)()]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9jb21tb25NaWRkbGV3YXJlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MtZnJhbWV3b3JrLy4vc3JjL2xpYnMvY29tbW9uTWlkZGxld2FyZS50cz9lNDYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkeSBmcm9tICdAbWlkZHkvY29yZSc7XG5pbXBvcnQgaHR0cEpzb25Cb2R5UGFyc2VyIGZyb20gJ0BtaWRkeS9odHRwLWpzb24tYm9keS1wYXJzZXInO1xuaW1wb3J0IGh0dHBFdmVudE5vcm1hbGl6ZXIgZnJvbSAnQG1pZGR5L2h0dHAtZXZlbnQtbm9ybWFsaXplcic7XG5pbXBvcnQgaHR0cEVycm9ySGFuZGxlciBmcm9tICdAbWlkZHkvaHR0cC1lcnJvci1oYW5kbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGhhbmRsZXI6IGFueSkgPT4gbWlkZHkoaGFuZGxlcikudXNlKFtodHRwSnNvbkJvZHlQYXJzZXIoKSwgaHR0cEV2ZW50Tm9ybWFsaXplcigpLCBodHRwRXJyb3JIYW5kbGVyKCldKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/commonMiddleware.ts\n");

/***/ }),

/***/ "./src/libs/schemas/createAuctionSchema.ts":
/*!*************************************************!*\
  !*** ./src/libs/schemas/createAuctionSchema.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst schema = {\n    type: 'object',\n    properties: {\n        body: {\n            type: 'object',\n            properties: {\n                title: {\n                    type: 'string',\n                },\n            },\n            required: ['title'],\n        },\n    },\n    required: ['body'],\n};\nexports[\"default\"] = schema;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9zY2hlbWFzL2NyZWF0ZUF1Y3Rpb25TY2hlbWEudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MtZnJhbWV3b3JrLy4vc3JjL2xpYnMvc2NoZW1hcy9jcmVhdGVBdWN0aW9uU2NoZW1hLnRzP2QxZTUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2NoZW1hID0ge1xuICAgIHR5cGU6ICdvYmplY3QnLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYm9keToge1xuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXF1aXJlZDogWyd0aXRsZSddLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgcmVxdWlyZWQ6IFsnYm9keSddLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2NoZW1hO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/schemas/createAuctionSchema.ts\n");

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

/***/ "@middy/validator":
/*!***********************************!*\
  !*** external "@middy/validator" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@middy/validator");

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