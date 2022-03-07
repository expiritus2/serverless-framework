export enum AuctionStatus {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
}

export type RequestBody = {
    amount: number;
};

export interface OwnEvent {
    body: RequestBody;
}
