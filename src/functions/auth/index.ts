import { AuthResponse, Handler } from 'aws-lambda';
import commonMiddleware from '../../libs/commonMiddleware';
import { APIGatewayTokenAuthorizerEvent } from 'aws-lambda/trigger/api-gateway-authorizer';
import genPolicy from './genPolicy';

const createAuction = async (event: APIGatewayTokenAuthorizerEvent): Promise<AuthResponse | string> => {
    const token = event.authorizationToken;

    if (token === 'allow') {
        return getResponse('allow', event.methodArn);
    } else if (token === 'deny') {
        return getResponse('deny', event.methodArn);
    }

    return 'Unauthorized';
};

const getResponse = (effect: string, methodArn: string) => {
    const policy = genPolicy(effect, methodArn);
    const principalId = 'sdlkfjsdfk';
    const context = {
        simpleAuth: true,
    };
    return {
        principalId,
        policyDocument: policy,
        context,
    };
};

export const handler: Handler = commonMiddleware(createAuction);
