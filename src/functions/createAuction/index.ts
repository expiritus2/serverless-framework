import { APIGatewayEvent } from "aws-lambda";
import { formatJSONResponse } from "../../libs/api-gateway";
import { Handler } from "aws-lambda";
import { RequestBody, AuctionStatus, OwnEvent } from "./types";
import { v4 as uuid } from "uuid";
import AWS from "aws-sdk";
import commonMiddleware from "../../libs/commonMiddleware";

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const createAuction = async (event: APIGatewayEvent & OwnEvent) => {
  const { title }: RequestBody = event?.body;
  const now = new Date();

  const auction = {
    id: uuid(),
    title,
    status: AuctionStatus.OPEN,
    createdAt: now.toISOString(),
    highestBid: {
      amount: 0,
    },
  };

  await dynamoDB
    .put({
      TableName: process.env.AUCTIONS_TABLE_NAME!,
      Item: auction,
    })
    .promise();

  return formatJSONResponse(auction, 201);
};

export const handler: Handler = commonMiddleware(createAuction);
