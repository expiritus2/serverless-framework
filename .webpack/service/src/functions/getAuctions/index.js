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

/***/ "./src/functions/getAuctions/index.ts":
/*!********************************************!*\
  !*** ./src/functions/getAuctions/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handler = void 0;\nconst api_gateway_1 = __webpack_require__(/*! ../../libs/api-gateway */ \"./src/libs/api-gateway.ts\");\nconst aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ \"aws-sdk\"));\nconst commonMiddleware_1 = __importDefault(__webpack_require__(/*! ../../libs/commonMiddleware */ \"./src/libs/commonMiddleware.ts\"));\nconst validator_1 = __importDefault(__webpack_require__(/*! @middy/validator */ \"@middy/validator\"));\nconst http_errors_1 = __importDefault(__webpack_require__(/*! http-errors */ \"http-errors\"));\nconst getAuctionsSchema_1 = __importDefault(__webpack_require__(/*! ../../libs/schemas/getAuctionsSchema */ \"./src/libs/schemas/getAuctionsSchema.ts\"));\nconst dynamoDB = new aws_sdk_1.default.DynamoDB.DocumentClient();\nconst getAuctions = async (event) => {\n    const { status } = event.queryStringParameters || {};\n    let auctions = [];\n    const params = {\n        TableName: process.env.AUCTIONS_TABLE_NAME,\n        IndexName: 'statusAndEndDate',\n        KeyConditionExpression: '#status = :status',\n        ExpressionAttributeValues: {\n            ':status': status,\n        },\n        ExpressionAttributeNames: {\n            '#status': 'status',\n        },\n    };\n    try {\n        const result = await dynamoDB.query(params).promise();\n        auctions = result.Items || [];\n    }\n    catch (error) {\n        console.error(error);\n        throw new http_errors_1.default.InternalServerError(error);\n    }\n    return (0, api_gateway_1.formatJSONResponse)(auctions, 200);\n};\nexports.handler = (0, commonMiddleware_1.default)(getAuctions).use((0, validator_1.default)({\n    inputSchema: getAuctionsSchema_1.default,\n    ajvOptions: {\n        useDefaults: true,\n        strict: false,\n    },\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dldEF1Y3Rpb25zL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzLWZyYW1ld29yay8uL3NyYy9mdW5jdGlvbnMvZ2V0QXVjdGlvbnMvaW5kZXgudHM/N2RlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXRKU09OUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9saWJzL2FwaS1nYXRld2F5JztcbmltcG9ydCB7IEFQSUdhdGV3YXlFdmVudCwgSGFuZGxlciB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IEFXUyBmcm9tICdhd3Mtc2RrJztcbmltcG9ydCBjb21tb25NaWRkbGV3YXJlIGZyb20gJy4uLy4uL2xpYnMvY29tbW9uTWlkZGxld2FyZSc7XG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gJ0BtaWRkeS92YWxpZGF0b3InO1xuaW1wb3J0IGNyZWF0ZUh0dHBFcnJvciBmcm9tICdodHRwLWVycm9ycyc7XG5pbXBvcnQgeyBEb2N1bWVudENsaWVudCB9IGZyb20gJ2F3cy1zZGsvbGliL2R5bmFtb2RiL2RvY3VtZW50X2NsaWVudCc7XG5pbXBvcnQgZ2V0QXVjdGlvbnNTY2hlbWEgZnJvbSAnLi4vLi4vbGlicy9zY2hlbWFzL2dldEF1Y3Rpb25zU2NoZW1hJztcblxuY29uc3QgZHluYW1vREIgPSBuZXcgQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50KCk7XG5cbmNvbnN0IGdldEF1Y3Rpb25zID0gYXN5bmMgKGV2ZW50OiBBUElHYXRld2F5RXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHN0YXR1cyB9ID0gZXZlbnQucXVlcnlTdHJpbmdQYXJhbWV0ZXJzIHx8IHt9O1xuICAgIGxldCBhdWN0aW9ucyA9IFtdO1xuXG4gICAgY29uc3QgcGFyYW1zOiBEb2N1bWVudENsaWVudC5RdWVyeUlucHV0ID0ge1xuICAgICAgICBUYWJsZU5hbWU6IHByb2Nlc3MuZW52LkFVQ1RJT05TX1RBQkxFX05BTUUhLFxuICAgICAgICBJbmRleE5hbWU6ICdzdGF0dXNBbmRFbmREYXRlJyxcbiAgICAgICAgS2V5Q29uZGl0aW9uRXhwcmVzc2lvbjogJyNzdGF0dXMgPSA6c3RhdHVzJyxcbiAgICAgICAgRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1xuICAgICAgICAgICAgJzpzdGF0dXMnOiBzdGF0dXMsXG4gICAgICAgIH0sXG4gICAgICAgIEV4cHJlc3Npb25BdHRyaWJ1dGVOYW1lczoge1xuICAgICAgICAgICAgJyNzdGF0dXMnOiAnc3RhdHVzJyxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZHluYW1vREIucXVlcnkocGFyYW1zKS5wcm9taXNlKCk7XG5cbiAgICAgICAgYXVjdGlvbnMgPSByZXN1bHQuSXRlbXMgfHwgW107XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgdGhyb3cgbmV3IGNyZWF0ZUh0dHBFcnJvci5JbnRlcm5hbFNlcnZlckVycm9yKGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZShhdWN0aW9ucywgMjAwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyOiBIYW5kbGVyID0gY29tbW9uTWlkZGxld2FyZShnZXRBdWN0aW9ucykudXNlKFxuICAgIHZhbGlkYXRvcih7XG4gICAgICAgIGlucHV0U2NoZW1hOiBnZXRBdWN0aW9uc1NjaGVtYSxcbiAgICAgICAgYWp2T3B0aW9uczoge1xuICAgICAgICAgICAgdXNlRGVmYXVsdHM6IHRydWUsXG4gICAgICAgICAgICBzdHJpY3Q6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0pLFxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/getAuctions/index.ts\n");

/***/ }),

/***/ "./src/functions/placeBid/types.ts":
/*!*****************************************!*\
  !*** ./src/functions/placeBid/types.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AuctionStatus = void 0;\nvar AuctionStatus;\n(function (AuctionStatus) {\n    AuctionStatus[\"OPEN\"] = \"OPEN\";\n    AuctionStatus[\"CLOSED\"] = \"CLOSED\";\n})(AuctionStatus = exports.AuctionStatus || (exports.AuctionStatus = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3BsYWNlQmlkL3R5cGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzLWZyYW1ld29yay8uL3NyYy9mdW5jdGlvbnMvcGxhY2VCaWQvdHlwZXMudHM/YWQwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBBdWN0aW9uU3RhdHVzIHtcbiAgICBPUEVOID0gJ09QRU4nLFxuICAgIENMT1NFRCA9ICdDTE9TRUQnLFxufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Qm9keSA9IHtcbiAgICBhbW91bnQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3duRXZlbnQge1xuICAgIGJvZHk6IFJlcXVlc3RCb2R5O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/placeBid/types.ts\n");

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

/***/ "./src/libs/schemas/getAuctionsSchema.ts":
/*!***********************************************!*\
  !*** ./src/libs/schemas/getAuctionsSchema.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst types_1 = __webpack_require__(/*! ../../functions/placeBid/types */ \"./src/functions/placeBid/types.ts\");\nconst schema = {\n    type: 'object',\n    properties: {\n        queryStringParameters: {\n            type: 'object',\n            properties: {\n                status: {\n                    type: 'string',\n                    enum: [types_1.AuctionStatus.OPEN, types_1.AuctionStatus.CLOSED],\n                    default: 'OPEN',\n                },\n            },\n        },\n    },\n    required: ['queryStringParameters'],\n};\nexports[\"default\"] = schema;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9zY2hlbWFzL2dldEF1Y3Rpb25zU2NoZW1hLnRzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVybGVzcy1mcmFtZXdvcmsvLi9zcmMvbGlicy9zY2hlbWFzL2dldEF1Y3Rpb25zU2NoZW1hLnRzPzBhMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVjdGlvblN0YXR1cyB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9wbGFjZUJpZC90eXBlcyc7XG5cbmNvbnN0IHNjaGVtYSA9IHtcbiAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHF1ZXJ5U3RyaW5nUGFyYW1ldGVyczoge1xuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBlbnVtOiBbQXVjdGlvblN0YXR1cy5PUEVOLCBBdWN0aW9uU3RhdHVzLkNMT1NFRF0sXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdPUEVOJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHJlcXVpcmVkOiBbJ3F1ZXJ5U3RyaW5nUGFyYW1ldGVycyddLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2NoZW1hO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/schemas/getAuctionsSchema.ts\n");

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

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("http-errors");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/getAuctions/index.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;