export enum AuctionStatus {
    OPEN = 'OPEN',
}

export type RequestBody = {
    title: string;
};

export interface OwnEvent {
    body: RequestBody;
}
