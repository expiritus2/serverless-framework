import { formatJSONResponse } from '../../libs/api-gateway';
import { APIGatewayEvent, Handler } from 'aws-lambda';
import AWS from 'aws-sdk';
import commonMiddleware from '../../libs/commonMiddleware';
import validator from '@middy/validator';
import createHttpError from 'http-errors';
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client';
import getAuctionsSchema from '../../libs/schemas/getAuctionsSchema';

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const getAuctions = async (event: APIGatewayEvent) => {
    const { status } = event.queryStringParameters || {};
    let auctions = [];

    const params: DocumentClient.QueryInput = {
        TableName: process.env.AUCTIONS_TABLE_NAME!,
        IndexName: 'statusAndEndDate',
        KeyConditionExpression: '#status = :status',
        ExpressionAttributeValues: {
            ':status': status,
        },
        ExpressionAttributeNames: {
            '#status': 'status',
        },
    };

    try {
        const result = await dynamoDB.query(params).promise();

        auctions = result.Items || [];
    } catch (error: any) {
        console.error(error);
        throw new createHttpError.InternalServerError(error);
    }
    return formatJSONResponse(auctions, 200);
};

export const handler: Handler = commonMiddleware(getAuctions).use(
    validator({
        inputSchema: getAuctionsSchema,
        ajvOptions: {
            useDefaults: true,
            strict: false,
        },
    }),
);
