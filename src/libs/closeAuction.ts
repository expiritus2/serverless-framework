import AWS from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';
import { AuctionStatus } from '../functions/placeBid/types';

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export interface Auction {
    id: string;
    status: AuctionStatus;
    highestBid: {
        amount: number;
    };
}

export const closeAuction = async (auction: Auction) => {
    const params: DocumentClient.UpdateItemInput = {
        TableName: process.env.AUCTIONS_TABLE_NAME!,
        Key: { id: auction.id },
        UpdateExpression: 'set #status = :status',
        ExpressionAttributeValues: {
            ':status': AuctionStatus.CLOSED,
        },
        ExpressionAttributeNames: {
            '#status': 'status',
        },
    };

    const result = await dynamoDB.update(params).promise();

    return result;
};
