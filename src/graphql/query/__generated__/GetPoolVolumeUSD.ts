/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Pair_filter } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetPoolVolumeUSD
// ====================================================

export interface GetPoolVolumeUSD_pairs {
  __typename: "Pair";
  id: string;
  volumeUSD: any;
  token0Price: any;
  token1Price: any;
}

export interface GetPoolVolumeUSD {
  pairs: GetPoolVolumeUSD_pairs[];
}

export interface GetPoolVolumeUSDVariables {
  where?: Pair_filter | null;
}
