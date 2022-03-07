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

/***/ "./src/functions/placeBid/types.ts":
/*!*****************************************!*\
  !*** ./src/functions/placeBid/types.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AuctionStatus = void 0;\nvar AuctionStatus;\n(function (AuctionStatus) {\n    AuctionStatus[\"OPEN\"] = \"OPEN\";\n    AuctionStatus[\"CLOSED\"] = \"CLOSED\";\n})(AuctionStatus = exports.AuctionStatus || (exports.AuctionStatus = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3BsYWNlQmlkL3R5cGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzLWZyYW1ld29yay8uL3NyYy9mdW5jdGlvbnMvcGxhY2VCaWQvdHlwZXMudHM/YWQwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBBdWN0aW9uU3RhdHVzIHtcbiAgICBPUEVOID0gJ09QRU4nLFxuICAgIENMT1NFRCA9ICdDTE9TRUQnLFxufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Qm9keSA9IHtcbiAgICBhbW91bnQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3duRXZlbnQge1xuICAgIGJvZHk6IFJlcXVlc3RCb2R5O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/placeBid/types.ts\n");

/***/ }),

/***/ "./src/functions/processAuctions/index.ts":
/*!************************************************!*\
  !*** ./src/functions/processAuctions/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handler = void 0;\nconst api_gateway_1 = __webpack_require__(/*! ../../libs/api-gateway */ \"./src/libs/api-gateway.ts\");\nconst commonMiddleware_1 = __importDefault(__webpack_require__(/*! ../../libs/commonMiddleware */ \"./src/libs/commonMiddleware.ts\"));\nconst getEndedAuctions_1 = __webpack_require__(/*! ../../libs/getEndedAuctions */ \"./src/libs/getEndedAuctions.ts\");\nconst closeAuction_1 = __webpack_require__(/*! ../../libs/closeAuction */ \"./src/libs/closeAuction.ts\");\nconst http_errors_1 = __importDefault(__webpack_require__(/*! http-errors */ \"http-errors\"));\nconst processAuctions = async (event) => {\n    try {\n        const auctionsToClose = await (0, getEndedAuctions_1.getEndedAuctions)();\n        const closePromises = auctionsToClose.map(closeAuction_1.closeAuction);\n        await Promise.all(closePromises);\n        return (0, api_gateway_1.formatJSONResponse)({ closed: auctionsToClose.length });\n    }\n    catch (error) {\n        throw new http_errors_1.default.InternalServerError(error);\n    }\n};\nexports.handler = (0, commonMiddleware_1.default)(processAuctions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3Byb2Nlc3NBdWN0aW9ucy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVybGVzcy1mcmFtZXdvcmsvLi9zcmMvZnVuY3Rpb25zL3Byb2Nlc3NBdWN0aW9ucy9pbmRleC50cz81MWI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlFdmVudCB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHsgZm9ybWF0SlNPTlJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbGlicy9hcGktZ2F0ZXdheSc7XG5pbXBvcnQgeyBIYW5kbGVyIH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgY29tbW9uTWlkZGxld2FyZSBmcm9tICcuLi8uLi9saWJzL2NvbW1vbk1pZGRsZXdhcmUnO1xuaW1wb3J0IHsgT3duRXZlbnQgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldEVuZGVkQXVjdGlvbnMgfSBmcm9tICcuLi8uLi9saWJzL2dldEVuZGVkQXVjdGlvbnMnO1xuaW1wb3J0IHsgQXVjdGlvbiwgY2xvc2VBdWN0aW9uIH0gZnJvbSAnLi4vLi4vbGlicy9jbG9zZUF1Y3Rpb24nO1xuaW1wb3J0IGNyZWF0ZUh0dHBFcnJvciBmcm9tICdodHRwLWVycm9ycyc7XG5cbmNvbnN0IHByb2Nlc3NBdWN0aW9ucyA9IGFzeW5jIChldmVudDogQVBJR2F0ZXdheUV2ZW50ICYgT3duRXZlbnQpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhdWN0aW9uc1RvQ2xvc2U6IEF1Y3Rpb25bXSA9IGF3YWl0IGdldEVuZGVkQXVjdGlvbnMoKTtcbiAgICAgICAgY29uc3QgY2xvc2VQcm9taXNlcyA9IGF1Y3Rpb25zVG9DbG9zZS5tYXAoY2xvc2VBdWN0aW9uKTtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoY2xvc2VQcm9taXNlcyk7XG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSh7IGNsb3NlZDogYXVjdGlvbnNUb0Nsb3NlLmxlbmd0aCB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBjcmVhdGVIdHRwRXJyb3IuSW50ZXJuYWxTZXJ2ZXJFcnJvcihlcnJvcik7XG4gICAgfVxuXG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlcjogSGFuZGxlciA9IGNvbW1vbk1pZGRsZXdhcmUocHJvY2Vzc0F1Y3Rpb25zKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/processAuctions/index.ts\n");

/***/ }),

/***/ "./src/libs/api-gateway.ts":
/*!*********************************!*\
  !*** ./src/libs/api-gateway.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.formatJSONResponse = void 0;\nconst formatJSONResponse = (response, statusCode = 200) => {\n    return {\n        statusCode,\n        body: JSON.stringify(response),\n    };\n};\nexports.formatJSONResponse = formatJSONResponse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGktZ2F0ZXdheS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MtZnJhbWV3b3JrLy4vc3JjL2xpYnMvYXBpLWdhdGV3YXkudHM/NTMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZm9ybWF0SlNPTlJlc3BvbnNlID0gKHJlc3BvbnNlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBzdGF0dXNDb2RlID0gMjAwKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzQ29kZSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpLFxuICAgIH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/api-gateway.ts\n");

/***/ }),

/***/ "./src/libs/closeAuction.ts":
/*!**********************************!*\
  !*** ./src/libs/closeAuction.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.closeAuction = void 0;\nconst aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ \"aws-sdk\"));\nconst types_1 = __webpack_require__(/*! ../functions/placeBid/types */ \"./src/functions/placeBid/types.ts\");\nconst dynamoDB = new aws_sdk_1.default.DynamoDB.DocumentClient();\nconst closeAuction = async (auction) => {\n    const params = {\n        TableName: process.env.AUCTIONS_TABLE_NAME,\n        Key: { id: auction.id },\n        UpdateExpression: 'set #status = :status',\n        ExpressionAttributeValues: {\n            ':status': types_1.AuctionStatus.CLOSED,\n        },\n        ExpressionAttributeNames: {\n            '#status': 'status',\n        },\n    };\n    const result = await dynamoDB.update(params).promise();\n    return result;\n};\nexports.closeAuction = closeAuction;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9jbG9zZUF1Y3Rpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBaEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVybGVzcy1mcmFtZXdvcmsvLi9zcmMvbGlicy9jbG9zZUF1Y3Rpb24udHM/OTQ2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVdTIGZyb20gJ2F3cy1zZGsnO1xuaW1wb3J0IHsgRG9jdW1lbnRDbGllbnQgfSBmcm9tICdhd3Mtc2RrL2xpYi9keW5hbW9kYi9kb2N1bWVudF9jbGllbnQnO1xuaW1wb3J0IHsgQXVjdGlvblN0YXR1cyB9IGZyb20gJy4uL2Z1bmN0aW9ucy9wbGFjZUJpZC90eXBlcyc7XG5cbmNvbnN0IGR5bmFtb0RCID0gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1Y3Rpb24ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgc3RhdHVzOiBBdWN0aW9uU3RhdHVzO1xuICAgIGhpZ2hlc3RCaWQ6IHtcbiAgICAgICAgYW1vdW50OiBudW1iZXI7XG4gICAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGNsb3NlQXVjdGlvbiA9IGFzeW5jIChhdWN0aW9uOiBBdWN0aW9uKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zOiBEb2N1bWVudENsaWVudC5VcGRhdGVJdGVtSW5wdXQgPSB7XG4gICAgICAgIFRhYmxlTmFtZTogcHJvY2Vzcy5lbnYuQVVDVElPTlNfVEFCTEVfTkFNRSEsXG4gICAgICAgIEtleTogeyBpZDogYXVjdGlvbi5pZCB9LFxuICAgICAgICBVcGRhdGVFeHByZXNzaW9uOiAnc2V0ICNzdGF0dXMgPSA6c3RhdHVzJyxcbiAgICAgICAgRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1xuICAgICAgICAgICAgJzpzdGF0dXMnOiBBdWN0aW9uU3RhdHVzLkNMT1NFRCxcbiAgICAgICAgfSxcbiAgICAgICAgRXhwcmVzc2lvbkF0dHJpYnV0ZU5hbWVzOiB7XG4gICAgICAgICAgICAnI3N0YXR1cyc6ICdzdGF0dXMnLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkeW5hbW9EQi51cGRhdGUocGFyYW1zKS5wcm9taXNlKCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/closeAuction.ts\n");

/***/ }),

/***/ "./src/libs/commonMiddleware.ts":
/*!**************************************!*\
  !*** ./src/libs/commonMiddleware.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst core_1 = __importDefault(__webpack_require__(/*! @middy/core */ \"@middy/core\"));\nconst http_json_body_parser_1 = __importDefault(__webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\"));\nconst http_event_normalizer_1 = __importDefault(__webpack_require__(/*! @middy/http-event-normalizer */ \"@middy/http-event-normalizer\"));\nconst http_error_handler_1 = __importDefault(__webpack_require__(/*! @middy/http-error-handler */ \"@middy/http-error-handler\"));\nexports[\"default\"] = (handler) => (0, core_1.default)(handler).use([(0, http_json_body_parser_1.default)(), (0, http_event_normalizer_1.default)(), (0, http_error_handler_1.default)()]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9jb21tb25NaWRkbGV3YXJlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MtZnJhbWV3b3JrLy4vc3JjL2xpYnMvY29tbW9uTWlkZGxld2FyZS50cz9lNDYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkeSBmcm9tICdAbWlkZHkvY29yZSc7XG5pbXBvcnQgaHR0cEpzb25Cb2R5UGFyc2VyIGZyb20gJ0BtaWRkeS9odHRwLWpzb24tYm9keS1wYXJzZXInO1xuaW1wb3J0IGh0dHBFdmVudE5vcm1hbGl6ZXIgZnJvbSAnQG1pZGR5L2h0dHAtZXZlbnQtbm9ybWFsaXplcic7XG5pbXBvcnQgaHR0cEVycm9ySGFuZGxlciBmcm9tICdAbWlkZHkvaHR0cC1lcnJvci1oYW5kbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGhhbmRsZXI6IGFueSkgPT4gbWlkZHkoaGFuZGxlcikudXNlKFtodHRwSnNvbkJvZHlQYXJzZXIoKSwgaHR0cEV2ZW50Tm9ybWFsaXplcigpLCBodHRwRXJyb3JIYW5kbGVyKCldKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/commonMiddleware.ts\n");

/***/ }),

/***/ "./src/libs/getEndedAuctions.ts":
/*!**************************************!*\
  !*** ./src/libs/getEndedAuctions.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getEndedAuctions = void 0;\nconst aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ \"aws-sdk\"));\nconst dynamoDB = new aws_sdk_1.default.DynamoDB.DocumentClient();\nconst getEndedAuctions = async () => {\n    const now = new Date();\n    const params = {\n        TableName: process.env.AUCTIONS_TABLE_NAME,\n        IndexName: 'statusAndEndDate',\n        KeyConditionExpression: '#status = :status AND endingAt <= :now',\n        ExpressionAttributeValues: {\n            ':status': 'OPEN',\n            ':now': now.toISOString(),\n        },\n        ExpressionAttributeNames: {\n            '#status': 'status',\n        },\n    };\n    const result = await dynamoDB.query(params).promise();\n    return result.Items;\n};\nexports.getEndedAuctions = getEndedAuctions;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9nZXRFbmRlZEF1Y3Rpb25zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBbEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVybGVzcy1mcmFtZXdvcmsvLi9zcmMvbGlicy9nZXRFbmRlZEF1Y3Rpb25zLnRzP2UwMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFXUyBmcm9tICdhd3Mtc2RrJztcbmltcG9ydCB7IERvY3VtZW50Q2xpZW50IH0gZnJvbSAnYXdzLXNkay9saWIvZHluYW1vZGIvZG9jdW1lbnRfY2xpZW50JztcbmltcG9ydCB7IEF1Y3Rpb24gfSBmcm9tICcuL2Nsb3NlQXVjdGlvbic7XG5cbmNvbnN0IGR5bmFtb0RCID0gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xuXG5leHBvcnQgY29uc3QgZ2V0RW5kZWRBdWN0aW9ucyA9IGFzeW5jICgpOiBQcm9taXNlPEF1Y3Rpb25bXT4gPT4ge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgICBjb25zdCBwYXJhbXM6IERvY3VtZW50Q2xpZW50LlF1ZXJ5SW5wdXQgPSB7XG4gICAgICAgIFRhYmxlTmFtZTogcHJvY2Vzcy5lbnYuQVVDVElPTlNfVEFCTEVfTkFNRSEsXG4gICAgICAgIEluZGV4TmFtZTogJ3N0YXR1c0FuZEVuZERhdGUnLFxuICAgICAgICBLZXlDb25kaXRpb25FeHByZXNzaW9uOiAnI3N0YXR1cyA9IDpzdGF0dXMgQU5EIGVuZGluZ0F0IDw9IDpub3cnLFxuICAgICAgICBFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzOiB7XG4gICAgICAgICAgICAnOnN0YXR1cyc6ICdPUEVOJyxcbiAgICAgICAgICAgICc6bm93Jzogbm93LnRvSVNPU3RyaW5nKCksXG4gICAgICAgIH0sXG4gICAgICAgIEV4cHJlc3Npb25BdHRyaWJ1dGVOYW1lczoge1xuICAgICAgICAgICAgJyNzdGF0dXMnOiAnc3RhdHVzJyxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZHluYW1vREIucXVlcnkocGFyYW1zKS5wcm9taXNlKCk7XG4gICAgcmV0dXJuIHJlc3VsdC5JdGVtcyBhcyBBdWN0aW9uW107XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/getEndedAuctions.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/processAuctions/index.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;