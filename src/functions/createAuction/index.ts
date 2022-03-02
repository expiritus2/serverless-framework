import { APIGatewayEvent } from "aws-lambda";
import { formatJSONResponse } from "../../libs/api-gateway";
import { Handler } from "aws-lambda";
import { RequestBody, AuctionStatus } from "./types";
import { v4 as uuid } from "uuid";
import AWS from "aws-sdk";

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const createAuction = async (event: APIGatewayEvent) => {
  const { title }: RequestBody = JSON.parse(event?.body || "");
  const now = new Date();

  const auction = {
    id: uuid(),
    title,
    status: AuctionStatus.OPEN,
    createdAt: now.toISOString(),
  };

  await dynamoDB
    .put({
      TableName: "AuctionsTable",
      Item: auction,
    })
    .promise();

  return formatJSONResponse(auction, 201);
};

export const handler: Handler = createAuction;
