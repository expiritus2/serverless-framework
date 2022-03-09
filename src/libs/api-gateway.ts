import { APIGatewayProxyResult } from 'aws-lambda';

export const formatJSONResponse = (body: Record<string, any>, statusCode = 200): APIGatewayProxyResult => {
    return {
        statusCode,
        body: JSON.stringify(body),
    };
};
