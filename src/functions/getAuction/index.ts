import { formatJSONResponse } from '../../libs/api-gateway';
import { APIGatewayEvent, Handler } from 'aws-lambda';
import AWS from 'aws-sdk';
import commonMiddleware from '../../libs/commonMiddleware';
import createHttpError from 'http-errors';
import { Auction } from '../../libs/closeAuction';

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export const getAuctionById = async (id: string): Promise<Auction> => {
    let auction;
    try {
        const result = await dynamoDB
            .get({
                TableName: process.env.AUCTIONS_TABLE_NAME!,
                Key: { id },
            })
            .promise();

        auction = result.Item;
    } catch (error: any) {
        console.error(error);
        throw new createHttpError.InternalServerError(error);
    }

    if (!auction) {
        throw new createHttpError.NotFound(`Auction with ID ${id} not found!`);
    }

    return auction as Auction;
};

const getAuction = async (event: APIGatewayEvent) => {
    const { id } = event.pathParameters!;
    const auction = await getAuctionById(id!);

    return formatJSONResponse(auction, 200);
};

export const handler: Handler = commonMiddleware(getAuction);
