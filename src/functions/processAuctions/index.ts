import { APIGatewayEvent } from 'aws-lambda';
import { formatJSONResponse } from '../../libs/api-gateway';
import { Handler } from 'aws-lambda';
import commonMiddleware from '../../libs/commonMiddleware';
import { OwnEvent } from './types';
import { getEndedAuctions } from '../../libs/getEndedAuctions';

const processAuctions = async (event: APIGatewayEvent & OwnEvent) => {
    const auctionsToClose = await getEndedAuctions();

    return formatJSONResponse(auctionsToClose!);
};

export const handler: Handler = commonMiddleware(processAuctions);
