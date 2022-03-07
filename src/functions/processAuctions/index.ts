import { APIGatewayEvent } from 'aws-lambda';
import { formatJSONResponse } from '../../libs/api-gateway';
import { Handler } from 'aws-lambda';
import commonMiddleware from '../../libs/commonMiddleware';
import { OwnEvent } from './types';
import { getEndedAuctions } from '../../libs/getEndedAuctions';
import { Auction, closeAuction } from '../../libs/closeAuction';
import createHttpError from 'http-errors';

const processAuctions = async (event: APIGatewayEvent & OwnEvent) => {
    try {
        const auctionsToClose: Auction[] = await getEndedAuctions();
        const closePromises = auctionsToClose.map(closeAuction);
        await Promise.all(closePromises);

        return formatJSONResponse({ closed: auctionsToClose.length });
    } catch (error: any) {
        throw new createHttpError.InternalServerError(error);
    }

};

export const handler: Handler = commonMiddleware(processAuctions);
