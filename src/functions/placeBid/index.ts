import { APIGatewayEvent } from "aws-lambda";
import { formatJSONResponse } from "../../libs/api-gateway";
import { Handler } from "aws-lambda";
import AWS from "aws-sdk";
import commonMiddleware from "../../libs/commonMiddleware";
import createHttpError from "http-errors";
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";
import { OwnEvent } from "./types";
import { getAuctionById } from "../getAuction";

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const placeBid = async (event: APIGatewayEvent & OwnEvent) => {
  const { id } = event.pathParameters!;
  const { amount } = event.body;

  const auction = await getAuctionById(id!);

  if (amount <= auction.highestBid.amount) {
    throw new createHttpError.Forbidden(
      `Your bid must be higher than ${auction.highestBid.amount}!`
    );
  }

  const params: DocumentClient.UpdateItemInput = {
    TableName: process.env.AUCTIONS_TABLE_NAME!,
    Key: { id },
    UpdateExpression: "set highestBid.amount = :amount",
    ExpressionAttributeValues: {
      ":amount": amount,
    },
    ReturnValues: "ALL_NEW",
  };

  let updatedAuction;

  try {
    const result = await dynamoDB.update(params).promise();
    updatedAuction = result.Attributes;
  } catch (error: any) {
    console.error(error);
    throw new createHttpError.InternalServerError(error);
  }

  return formatJSONResponse(updatedAuction!, 201);
};

export const handler: Handler = commonMiddleware(placeBid);
