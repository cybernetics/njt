export interface SuccessfullyResolvedDestination {
  outcome: "success";
  url: string;
}

export interface UnresolvedDestination {
  outcome: "error";
  error: string;
}

export type ResolvedDestination =
  | SuccessfullyResolvedDestination
  | UnresolvedDestination;
