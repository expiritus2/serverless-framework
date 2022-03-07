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

/***/ "./src/functions/getAuction/index.ts":
/*!*******************************************!*\
  !*** ./src/functions/getAuction/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handler = exports.getAuctionById = void 0;\nconst api_gateway_1 = __webpack_require__(/*! ../../libs/api-gateway */ \"./src/libs/api-gateway.ts\");\nconst aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ \"aws-sdk\"));\nconst commonMiddleware_1 = __importDefault(__webpack_require__(/*! ../../libs/commonMiddleware */ \"./src/libs/commonMiddleware.ts\"));\nconst http_errors_1 = __importDefault(__webpack_require__(/*! http-errors */ \"http-errors\"));\nconst dynamoDB = new aws_sdk_1.default.DynamoDB.DocumentClient();\nconst getAuctionById = async (id) => {\n    let auction;\n    try {\n        const result = await dynamoDB\n            .get({\n            TableName: process.env.AUCTIONS_TABLE_NAME,\n            Key: { id },\n        })\n            .promise();\n        auction = result.Item;\n    }\n    catch (error) {\n        console.error(error);\n        throw new http_errors_1.default.InternalServerError(error);\n    }\n    if (!auction) {\n        throw new http_errors_1.default.NotFound(`Auction with ID ${id} not found!`);\n    }\n    return auction;\n};\nexports.getAuctionById = getAuctionById;\nconst getAuction = async (event) => {\n    const { id } = event.pathParameters;\n    const auction = await (0, exports.getAuctionById)(id);\n    return (0, api_gateway_1.formatJSONResponse)(auction, 200);\n};\nexports.handler = (0, commonMiddleware_1.default)(getAuction);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dldEF1Y3Rpb24vaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFyQkE7QUF1QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVybGVzcy1mcmFtZXdvcmsvLi9zcmMvZnVuY3Rpb25zL2dldEF1Y3Rpb24vaW5kZXgudHM/MDkzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXRKU09OUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9saWJzL2FwaS1nYXRld2F5JztcbmltcG9ydCB7IEFQSUdhdGV3YXlFdmVudCwgSGFuZGxlciB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IEFXUyBmcm9tICdhd3Mtc2RrJztcbmltcG9ydCBjb21tb25NaWRkbGV3YXJlIGZyb20gJy4uLy4uL2xpYnMvY29tbW9uTWlkZGxld2FyZSc7XG5pbXBvcnQgY3JlYXRlSHR0cEVycm9yIGZyb20gJ2h0dHAtZXJyb3JzJztcbmltcG9ydCB7IEF1Y3Rpb24gfSBmcm9tICcuLi8uLi9saWJzL2Nsb3NlQXVjdGlvbic7XG5cbmNvbnN0IGR5bmFtb0RCID0gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xuXG5leHBvcnQgY29uc3QgZ2V0QXVjdGlvbkJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8QXVjdGlvbj4gPT4ge1xuICAgIGxldCBhdWN0aW9uO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGR5bmFtb0RCXG4gICAgICAgICAgICAuZ2V0KHtcbiAgICAgICAgICAgICAgICBUYWJsZU5hbWU6IHByb2Nlc3MuZW52LkFVQ1RJT05TX1RBQkxFX05BTUUhLFxuICAgICAgICAgICAgICAgIEtleTogeyBpZCB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5wcm9taXNlKCk7XG5cbiAgICAgICAgYXVjdGlvbiA9IHJlc3VsdC5JdGVtO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHRocm93IG5ldyBjcmVhdGVIdHRwRXJyb3IuSW50ZXJuYWxTZXJ2ZXJFcnJvcihlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKCFhdWN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBjcmVhdGVIdHRwRXJyb3IuTm90Rm91bmQoYEF1Y3Rpb24gd2l0aCBJRCAke2lkfSBub3QgZm91bmQhYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF1Y3Rpb24gYXMgQXVjdGlvbjtcbn07XG5cbmNvbnN0IGdldEF1Y3Rpb24gPSBhc3luYyAoZXZlbnQ6IEFQSUdhdGV3YXlFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IGV2ZW50LnBhdGhQYXJhbWV0ZXJzITtcbiAgICBjb25zdCBhdWN0aW9uID0gYXdhaXQgZ2V0QXVjdGlvbkJ5SWQoaWQhKTtcblxuICAgIHJldHVybiBmb3JtYXRKU09OUmVzcG9uc2UoYXVjdGlvbiwgMjAwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyOiBIYW5kbGVyID0gY29tbW9uTWlkZGxld2FyZShnZXRBdWN0aW9uKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/getAuction/index.ts\n");

/***/ }),

/***/ "./src/functions/placeBid/index.ts":
/*!*****************************************!*\
  !*** ./src/functions/placeBid/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handler = void 0;\nconst api_gateway_1 = __webpack_require__(/*! ../../libs/api-gateway */ \"./src/libs/api-gateway.ts\");\nconst aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ \"aws-sdk\"));\nconst commonMiddleware_1 = __importDefault(__webpack_require__(/*! ../../libs/commonMiddleware */ \"./src/libs/commonMiddleware.ts\"));\nconst http_errors_1 = __importDefault(__webpack_require__(/*! http-errors */ \"http-errors\"));\nconst types_1 = __webpack_require__(/*! ./types */ \"./src/functions/placeBid/types.ts\");\nconst getAuction_1 = __webpack_require__(/*! ../getAuction */ \"./src/functions/getAuction/index.ts\");\nconst validator_1 = __importDefault(__webpack_require__(/*! @middy/validator */ \"@middy/validator\"));\nconst placeBidSchema_1 = __importDefault(__webpack_require__(/*! ../../libs/schemas/placeBidSchema */ \"./src/libs/schemas/placeBidSchema.ts\"));\nconst dynamoDB = new aws_sdk_1.default.DynamoDB.DocumentClient();\nconst placeBid = async (event) => {\n    const { id } = event.pathParameters;\n    const { amount } = event.body;\n    const auction = await (0, getAuction_1.getAuctionById)(id);\n    if (auction.status !== types_1.AuctionStatus.OPEN) {\n        throw new http_errors_1.default.Forbidden(`You cannot bid on closed auctions!`);\n    }\n    if (amount <= auction.highestBid.amount) {\n        throw new http_errors_1.default.Forbidden(`Your bid must be higher than ${auction.highestBid.amount}!`);\n    }\n    const params = {\n        TableName: process.env.AUCTIONS_TABLE_NAME,\n        Key: { id },\n        UpdateExpression: 'set highestBid.amount = :amount',\n        ExpressionAttributeValues: {\n            ':amount': amount,\n        },\n        ReturnValues: 'ALL_NEW',\n    };\n    let updatedAuction;\n    try {\n        const result = await dynamoDB.update(params).promise();\n        updatedAuction = result.Attributes;\n    }\n    catch (error) {\n        console.error(error);\n        throw new http_errors_1.default.InternalServerError(error);\n    }\n    return (0, api_gateway_1.formatJSONResponse)(updatedAuction, 201);\n};\nexports.handler = (0, commonMiddleware_1.default)(placeBid).use((0, validator_1.default)({ inputSchema: placeBidSchema_1.default }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3BsYWNlQmlkL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVybGVzcy1mcmFtZXdvcmsvLi9zcmMvZnVuY3Rpb25zL3BsYWNlQmlkL2luZGV4LnRzPzI4NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJR2F0ZXdheUV2ZW50LCBIYW5kbGVyIH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgeyBmb3JtYXRKU09OUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9saWJzL2FwaS1nYXRld2F5JztcbmltcG9ydCBBV1MgZnJvbSAnYXdzLXNkayc7XG5pbXBvcnQgY29tbW9uTWlkZGxld2FyZSBmcm9tICcuLi8uLi9saWJzL2NvbW1vbk1pZGRsZXdhcmUnO1xuaW1wb3J0IGNyZWF0ZUh0dHBFcnJvciBmcm9tICdodHRwLWVycm9ycyc7XG5pbXBvcnQgeyBEb2N1bWVudENsaWVudCB9IGZyb20gJ2F3cy1zZGsvbGliL2R5bmFtb2RiL2RvY3VtZW50X2NsaWVudCc7XG5pbXBvcnQgeyBBdWN0aW9uU3RhdHVzLCBPd25FdmVudCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0QXVjdGlvbkJ5SWQgfSBmcm9tICcuLi9nZXRBdWN0aW9uJztcbmltcG9ydCB7IEF1Y3Rpb24gfSBmcm9tICcuLi8uLi9saWJzL2Nsb3NlQXVjdGlvbic7XG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gJ0BtaWRkeS92YWxpZGF0b3InO1xuaW1wb3J0IHBsYWNlQmlkU2NoZW1hIGZyb20gJy4uLy4uL2xpYnMvc2NoZW1hcy9wbGFjZUJpZFNjaGVtYSc7XG5cbmNvbnN0IGR5bmFtb0RCID0gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xuXG5jb25zdCBwbGFjZUJpZCA9IGFzeW5jIChldmVudDogQVBJR2F0ZXdheUV2ZW50ICYgT3duRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSBldmVudC5wYXRoUGFyYW1ldGVycyE7XG4gICAgY29uc3QgeyBhbW91bnQgfSA9IGV2ZW50LmJvZHk7XG5cbiAgICBjb25zdCBhdWN0aW9uOiBBdWN0aW9uID0gYXdhaXQgZ2V0QXVjdGlvbkJ5SWQoaWQhKTtcblxuICAgIGlmIChhdWN0aW9uLnN0YXR1cyAhPT0gQXVjdGlvblN0YXR1cy5PUEVOKSB7XG4gICAgICAgIHRocm93IG5ldyBjcmVhdGVIdHRwRXJyb3IuRm9yYmlkZGVuKGBZb3UgY2Fubm90IGJpZCBvbiBjbG9zZWQgYXVjdGlvbnMhYCk7XG4gICAgfVxuXG4gICAgaWYgKGFtb3VudCA8PSBhdWN0aW9uLmhpZ2hlc3RCaWQuYW1vdW50KSB7XG4gICAgICAgIHRocm93IG5ldyBjcmVhdGVIdHRwRXJyb3IuRm9yYmlkZGVuKGBZb3VyIGJpZCBtdXN0IGJlIGhpZ2hlciB0aGFuICR7YXVjdGlvbi5oaWdoZXN0QmlkLmFtb3VudH0hYCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1zOiBEb2N1bWVudENsaWVudC5VcGRhdGVJdGVtSW5wdXQgPSB7XG4gICAgICAgIFRhYmxlTmFtZTogcHJvY2Vzcy5lbnYuQVVDVElPTlNfVEFCTEVfTkFNRSEsXG4gICAgICAgIEtleTogeyBpZCB9LFxuICAgICAgICBVcGRhdGVFeHByZXNzaW9uOiAnc2V0IGhpZ2hlc3RCaWQuYW1vdW50ID0gOmFtb3VudCcsXG4gICAgICAgIEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM6IHtcbiAgICAgICAgICAgICc6YW1vdW50JzogYW1vdW50LFxuICAgICAgICB9LFxuICAgICAgICBSZXR1cm5WYWx1ZXM6ICdBTExfTkVXJyxcbiAgICB9O1xuXG4gICAgbGV0IHVwZGF0ZWRBdWN0aW9uO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZHluYW1vREIudXBkYXRlKHBhcmFtcykucHJvbWlzZSgpO1xuICAgICAgICB1cGRhdGVkQXVjdGlvbiA9IHJlc3VsdC5BdHRyaWJ1dGVzO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHRocm93IG5ldyBjcmVhdGVIdHRwRXJyb3IuSW50ZXJuYWxTZXJ2ZXJFcnJvcihlcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSh1cGRhdGVkQXVjdGlvbiEsIDIwMSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlcjogSGFuZGxlciA9IGNvbW1vbk1pZGRsZXdhcmUocGxhY2VCaWQpLnVzZSh2YWxpZGF0b3IoeyBpbnB1dFNjaGVtYTogcGxhY2VCaWRTY2hlbWEgfSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/placeBid/index.ts\n");

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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.formatJSONResponse = void 0;\nconst formatJSONResponse = (response, statusCode = 200) => {\n    return {\n        statusCode,\n        body: JSON.stringify(response),\n    };\n};\nexports.formatJSONResponse = formatJSONResponse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGktZ2F0ZXdheS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MtZnJhbWV3b3JrLy4vc3JjL2xpYnMvYXBpLWdhdGV3YXkudHM/NTMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZm9ybWF0SlNPTlJlc3BvbnNlID0gKHJlc3BvbnNlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBzdGF0dXNDb2RlID0gMjAwKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzQ29kZSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpLFxuICAgIH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/api-gateway.ts\n");

/***/ }),

/***/ "./src/libs/commonMiddleware.ts":
/*!**************************************!*\
  !*** ./src/libs/commonMiddleware.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst core_1 = __importDefault(__webpack_require__(/*! @middy/core */ \"@middy/core\"));\nconst http_json_body_parser_1 = __importDefault(__webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\"));\nconst http_event_normalizer_1 = __importDefault(__webpack_require__(/*! @middy/http-event-normalizer */ \"@middy/http-event-normalizer\"));\nconst http_error_handler_1 = __importDefault(__webpack_require__(/*! @middy/http-error-handler */ \"@middy/http-error-handler\"));\nexports[\"default\"] = (handler) => (0, core_1.default)(handler).use([(0, http_json_body_parser_1.default)(), (0, http_event_normalizer_1.default)(), (0, http_error_handler_1.default)()]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9jb21tb25NaWRkbGV3YXJlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MtZnJhbWV3b3JrLy4vc3JjL2xpYnMvY29tbW9uTWlkZGxld2FyZS50cz9lNDYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkeSBmcm9tICdAbWlkZHkvY29yZSc7XG5pbXBvcnQgaHR0cEpzb25Cb2R5UGFyc2VyIGZyb20gJ0BtaWRkeS9odHRwLWpzb24tYm9keS1wYXJzZXInO1xuaW1wb3J0IGh0dHBFdmVudE5vcm1hbGl6ZXIgZnJvbSAnQG1pZGR5L2h0dHAtZXZlbnQtbm9ybWFsaXplcic7XG5pbXBvcnQgaHR0cEVycm9ySGFuZGxlciBmcm9tICdAbWlkZHkvaHR0cC1lcnJvci1oYW5kbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGhhbmRsZXI6IGFueSkgPT4gbWlkZHkoaGFuZGxlcikudXNlKFtodHRwSnNvbkJvZHlQYXJzZXIoKSwgaHR0cEV2ZW50Tm9ybWFsaXplcigpLCBodHRwRXJyb3JIYW5kbGVyKCldKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/commonMiddleware.ts\n");

/***/ }),

/***/ "./src/libs/schemas/placeBidSchema.ts":
/*!********************************************!*\
  !*** ./src/libs/schemas/placeBidSchema.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst schema = {\n    type: 'object',\n    properties: {\n        body: {\n            type: 'object',\n            properties: {\n                amount: {\n                    type: 'number',\n                },\n            },\n            required: ['amount'],\n        },\n    },\n    required: ['body'],\n};\nexports[\"default\"] = schema;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9zY2hlbWFzL3BsYWNlQmlkU2NoZW1hLnRzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzLWZyYW1ld29yay8uL3NyYy9saWJzL3NjaGVtYXMvcGxhY2VCaWRTY2hlbWEudHM/Mjg1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzY2hlbWEgPSB7XG4gICAgdHlwZTogJ29iamVjdCcsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXF1aXJlZDogWydhbW91bnQnXSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHJlcXVpcmVkOiBbJ2JvZHknXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNjaGVtYTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/schemas/placeBidSchema.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/placeBid/index.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;