import AWS from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';
import { Auction } from './closeAuction';

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export const getEndedAuctions = async (): Promise<Auction[]> => {
    const now = new Date();

    const params: DocumentClient.QueryInput = {
        TableName: process.env.AUCTIONS_TABLE_NAME!,
        IndexName: 'statusAndEndDate',
        KeyConditionExpression: '#status = :status AND endingAt <= :now',
        ExpressionAttributeValues: {
            ':status': 'OPEN',
            ':now': now.toISOString(),
        },
        ExpressionAttributeNames: {
            '#status': 'status',
        },
    };

    const result = await dynamoDB.query(params).promise();
    return result.Items as Auction[];
};
