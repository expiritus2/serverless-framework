import { AuctionStatus } from '../../functions/placeBid/types';

const schema = {
    type: 'object',
    properties: {
        queryStringParameters: {
            type: 'object',
            properties: {
                status: {
                    type: 'string',
                    enum: [AuctionStatus.OPEN, AuctionStatus.CLOSED],
                    default: 'OPEN',
                },
            },
        },
    },
    required: ['queryStringParameters'],
};

export default schema;
