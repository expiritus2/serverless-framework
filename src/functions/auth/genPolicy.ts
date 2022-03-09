import { PolicyDocument } from 'aws-lambda';

export default (effect: any, resource: any) => {
    const policy: PolicyDocument = {
        Version: '2012-10-17',
        Statement: [
            {
                Action: 'execute-api:Invoke',
                Effect: effect,
                Resource: resource,
            },
        ],
    };

    return policy;
};
