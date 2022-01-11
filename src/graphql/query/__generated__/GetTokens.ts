/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Token_filter } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetTokens
// ====================================================

export interface GetTokens_tokens {
  __typename: "Token";
  id: string;
  name: string;
  symbol: string;
}

export interface GetTokens {
  tokens: GetTokens_tokens[];
}

export interface GetTokensVariables {
  where?: Token_filter | null;
  first?: number | null;
}
