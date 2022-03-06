export enum AuctionStatus {
  OPEN = "OPEN",
}

export type RequestBody = {
  amount: number;
};

export interface OwnEvent {
  body: RequestBody;
}
