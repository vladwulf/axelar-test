/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Pair_filter } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetPairs
// ====================================================

export interface GetPairs_pairs_token1 {
  __typename: "Token";
  id: string;
  name: string;
  symbol: string;
}

export interface GetPairs_pairs {
  __typename: "Pair";
  id: string;
  token1: GetPairs_pairs_token1;
}

export interface GetPairs {
  pairs: GetPairs_pairs[];
}

export interface GetPairsVariables {
  where?: Pair_filter | null;
}
