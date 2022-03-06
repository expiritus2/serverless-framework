import { formatJSONResponse } from "../../libs/api-gateway";
import { Handler } from "aws-lambda";
import AWS from "aws-sdk";
import commonMiddleware from "../../libs/commonMiddleware";
import createHttpError from "http-errors";

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const getAuctions = async () => {
  let auctions = [];

  try {
    const result = await dynamoDB
      .scan({
        TableName: process.env.AUCTIONS_TABLE_NAME!,
      })
      .promise();

    auctions = result.Items || [];
  } catch (error: any) {
    console.error(error);
    throw new createHttpError.InternalServerError(error);
  }
  return formatJSONResponse(auctions, 200);
};

export const handler: Handler = commonMiddleware(getAuctions);
