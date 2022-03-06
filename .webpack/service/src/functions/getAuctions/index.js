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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handler = void 0;\nconst api_gateway_1 = __webpack_require__(/*! ../../libs/api-gateway */ \"./src/libs/api-gateway.ts\");\nconst aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ \"aws-sdk\"));\nconst commonMiddleware_1 = __importDefault(__webpack_require__(/*! ../../libs/commonMiddleware */ \"./src/libs/commonMiddleware.ts\"));\nconst http_errors_1 = __importDefault(__webpack_require__(/*! http-errors */ \"http-errors\"));\nconst dynamoDB = new aws_sdk_1.default.DynamoDB.DocumentClient();\nconst getAuctions = async () => {\n    let auctions = [];\n    try {\n        const result = await dynamoDB\n            .scan({\n            TableName: process.env.AUCTIONS_TABLE_NAME,\n        })\n            .promise();\n        auctions = result.Items || [];\n    }\n    catch (error) {\n        console.error(error);\n        throw new http_errors_1.default.InternalServerError(error);\n    }\n    return (0, api_gateway_1.formatJSONResponse)(auctions, 200);\n};\nexports.handler = (0, commonMiddleware_1.default)(getAuctions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dldEF1Y3Rpb25zL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVybGVzcy1mcmFtZXdvcmsvLi9zcmMvZnVuY3Rpb25zL2dldEF1Y3Rpb25zL2luZGV4LnRzPzdkZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0SlNPTlJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL2xpYnMvYXBpLWdhdGV3YXlcIjtcbmltcG9ydCB7IEhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiO1xuaW1wb3J0IEFXUyBmcm9tIFwiYXdzLXNka1wiO1xuaW1wb3J0IGNvbW1vbk1pZGRsZXdhcmUgZnJvbSBcIi4uLy4uL2xpYnMvY29tbW9uTWlkZGxld2FyZVwiO1xuaW1wb3J0IGNyZWF0ZUh0dHBFcnJvciBmcm9tIFwiaHR0cC1lcnJvcnNcIjtcblxuY29uc3QgZHluYW1vREIgPSBuZXcgQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50KCk7XG5cbmNvbnN0IGdldEF1Y3Rpb25zID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgYXVjdGlvbnMgPSBbXTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGR5bmFtb0RCXG4gICAgICAuc2Nhbih7XG4gICAgICAgIFRhYmxlTmFtZTogcHJvY2Vzcy5lbnYuQVVDVElPTlNfVEFCTEVfTkFNRSEsXG4gICAgICB9KVxuICAgICAgLnByb21pc2UoKTtcblxuICAgIGF1Y3Rpb25zID0gcmVzdWx0Lkl0ZW1zIHx8IFtdO1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgdGhyb3cgbmV3IGNyZWF0ZUh0dHBFcnJvci5JbnRlcm5hbFNlcnZlckVycm9yKGVycm9yKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0SlNPTlJlc3BvbnNlKGF1Y3Rpb25zLCAyMDApO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXI6IEhhbmRsZXIgPSBjb21tb25NaWRkbGV3YXJlKGdldEF1Y3Rpb25zKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/getAuctions/index.ts\n");

/***/ }),

/***/ "./src/libs/api-gateway.ts":
/*!*********************************!*\
  !*** ./src/libs/api-gateway.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.formatJSONResponse = void 0;\nconst formatJSONResponse = (response, statusCode = 200) => {\n    return {\n        statusCode,\n        body: JSON.stringify(response),\n    };\n};\nexports.formatJSONResponse = formatJSONResponse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGktZ2F0ZXdheS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MtZnJhbWV3b3JrLy4vc3JjL2xpYnMvYXBpLWdhdGV3YXkudHM/NTMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZm9ybWF0SlNPTlJlc3BvbnNlID0gKFxuICByZXNwb25zZTogUmVjb3JkPHN0cmluZywgYW55PixcbiAgc3RhdHVzQ29kZSA9IDIwMFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXNwb25zZSksXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/api-gateway.ts\n");

/***/ }),

/***/ "./src/libs/commonMiddleware.ts":
/*!**************************************!*\
  !*** ./src/libs/commonMiddleware.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst core_1 = __importDefault(__webpack_require__(/*! @middy/core */ \"@middy/core\"));\nconst http_json_body_parser_1 = __importDefault(__webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\"));\nconst http_event_normalizer_1 = __importDefault(__webpack_require__(/*! @middy/http-event-normalizer */ \"@middy/http-event-normalizer\"));\nconst http_error_handler_1 = __importDefault(__webpack_require__(/*! @middy/http-error-handler */ \"@middy/http-error-handler\"));\nexports[\"default\"] = (handler) => (0, core_1.default)(handler).use([\n    (0, http_json_body_parser_1.default)(),\n    (0, http_event_normalizer_1.default)(),\n    (0, http_error_handler_1.default)(),\n]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9jb21tb25NaWRkbGV3YXJlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVybGVzcy1mcmFtZXdvcmsvLi9zcmMvbGlicy9jb21tb25NaWRkbGV3YXJlLnRzP2U0NjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZGR5IGZyb20gXCJAbWlkZHkvY29yZVwiO1xuaW1wb3J0IGh0dHBKc29uQm9keVBhcnNlciBmcm9tIFwiQG1pZGR5L2h0dHAtanNvbi1ib2R5LXBhcnNlclwiO1xuaW1wb3J0IGh0dHBFdmVudE5vcm1hbGl6ZXIgZnJvbSBcIkBtaWRkeS9odHRwLWV2ZW50LW5vcm1hbGl6ZXJcIjtcbmltcG9ydCBodHRwRXJyb3JIYW5kbGVyIGZyb20gXCJAbWlkZHkvaHR0cC1lcnJvci1oYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChoYW5kbGVyOiBhbnkpID0+XG4gIG1pZGR5KGhhbmRsZXIpLnVzZShbXG4gICAgaHR0cEpzb25Cb2R5UGFyc2VyKCksXG4gICAgaHR0cEV2ZW50Tm9ybWFsaXplcigpLFxuICAgIGh0dHBFcnJvckhhbmRsZXIoKSxcbiAgXSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/commonMiddleware.ts\n");

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