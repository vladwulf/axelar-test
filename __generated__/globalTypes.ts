/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface Pair_filter {
  id?: string | null;
  id_not?: string | null;
  id_gt?: string | null;
  id_lt?: string | null;
  id_gte?: string | null;
  id_lte?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  token0?: string | null;
  token0_not?: string | null;
  token0_gt?: string | null;
  token0_lt?: string | null;
  token0_gte?: string | null;
  token0_lte?: string | null;
  token0_in?: string[] | null;
  token0_not_in?: string[] | null;
  token0_contains?: string | null;
  token0_not_contains?: string | null;
  token0_starts_with?: string | null;
  token0_not_starts_with?: string | null;
  token0_ends_with?: string | null;
  token0_not_ends_with?: string | null;
  token1?: string | null;
  token1_not?: string | null;
  token1_gt?: string | null;
  token1_lt?: string | null;
  token1_gte?: string | null;
  token1_lte?: string | null;
  token1_in?: string[] | null;
  token1_not_in?: string[] | null;
  token1_contains?: string | null;
  token1_not_contains?: string | null;
  token1_starts_with?: string | null;
  token1_not_starts_with?: string | null;
  token1_ends_with?: string | null;
  token1_not_ends_with?: string | null;
  reserve0?: any | null;
  reserve0_not?: any | null;
  reserve0_gt?: any | null;
  reserve0_lt?: any | null;
  reserve0_gte?: any | null;
  reserve0_lte?: any | null;
  reserve0_in?: any[] | null;
  reserve0_not_in?: any[] | null;
  reserve1?: any | null;
  reserve1_not?: any | null;
  reserve1_gt?: any | null;
  reserve1_lt?: any | null;
  reserve1_gte?: any | null;
  reserve1_lte?: any | null;
  reserve1_in?: any[] | null;
  reserve1_not_in?: any[] | null;
  totalSupply?: any | null;
  totalSupply_not?: any | null;
  totalSupply_gt?: any | null;
  totalSupply_lt?: any | null;
  totalSupply_gte?: any | null;
  totalSupply_lte?: any | null;
  totalSupply_in?: any[] | null;
  totalSupply_not_in?: any[] | null;
  reserveETH?: any | null;
  reserveETH_not?: any | null;
  reserveETH_gt?: any | null;
  reserveETH_lt?: any | null;
  reserveETH_gte?: any | null;
  reserveETH_lte?: any | null;
  reserveETH_in?: any[] | null;
  reserveETH_not_in?: any[] | null;
  reserveUSD?: any | null;
  reserveUSD_not?: any | null;
  reserveUSD_gt?: any | null;
  reserveUSD_lt?: any | null;
  reserveUSD_gte?: any | null;
  reserveUSD_lte?: any | null;
  reserveUSD_in?: any[] | null;
  reserveUSD_not_in?: any[] | null;
  trackedReserveETH?: any | null;
  trackedReserveETH_not?: any | null;
  trackedReserveETH_gt?: any | null;
  trackedReserveETH_lt?: any | null;
  trackedReserveETH_gte?: any | null;
  trackedReserveETH_lte?: any | null;
  trackedReserveETH_in?: any[] | null;
  trackedReserveETH_not_in?: any[] | null;
  token0Price?: any | null;
  token0Price_not?: any | null;
  token0Price_gt?: any | null;
  token0Price_lt?: any | null;
  token0Price_gte?: any | null;
  token0Price_lte?: any | null;
  token0Price_in?: any[] | null;
  token0Price_not_in?: any[] | null;
  token1Price?: any | null;
  token1Price_not?: any | null;
  token1Price_gt?: any | null;
  token1Price_lt?: any | null;
  token1Price_gte?: any | null;
  token1Price_lte?: any | null;
  token1Price_in?: any[] | null;
  token1Price_not_in?: any[] | null;
  volumeToken0?: any | null;
  volumeToken0_not?: any | null;
  volumeToken0_gt?: any | null;
  volumeToken0_lt?: any | null;
  volumeToken0_gte?: any | null;
  volumeToken0_lte?: any | null;
  volumeToken0_in?: any[] | null;
  volumeToken0_not_in?: any[] | null;
  volumeToken1?: any | null;
  volumeToken1_not?: any | null;
  volumeToken1_gt?: any | null;
  volumeToken1_lt?: any | null;
  volumeToken1_gte?: any | null;
  volumeToken1_lte?: any | null;
  volumeToken1_in?: any[] | null;
  volumeToken1_not_in?: any[] | null;
  volumeUSD?: any | null;
  volumeUSD_not?: any | null;
  volumeUSD_gt?: any | null;
  volumeUSD_lt?: any | null;
  volumeUSD_gte?: any | null;
  volumeUSD_lte?: any | null;
  volumeUSD_in?: any[] | null;
  volumeUSD_not_in?: any[] | null;
  untrackedVolumeUSD?: any | null;
  untrackedVolumeUSD_not?: any | null;
  untrackedVolumeUSD_gt?: any | null;
  untrackedVolumeUSD_lt?: any | null;
  untrackedVolumeUSD_gte?: any | null;
  untrackedVolumeUSD_lte?: any | null;
  untrackedVolumeUSD_in?: any[] | null;
  untrackedVolumeUSD_not_in?: any[] | null;
  txCount?: any | null;
  txCount_not?: any | null;
  txCount_gt?: any | null;
  txCount_lt?: any | null;
  txCount_gte?: any | null;
  txCount_lte?: any | null;
  txCount_in?: any[] | null;
  txCount_not_in?: any[] | null;
  createdAtTimestamp?: any | null;
  createdAtTimestamp_not?: any | null;
  createdAtTimestamp_gt?: any | null;
  createdAtTimestamp_lt?: any | null;
  createdAtTimestamp_gte?: any | null;
  createdAtTimestamp_lte?: any | null;
  createdAtTimestamp_in?: any[] | null;
  createdAtTimestamp_not_in?: any[] | null;
  createdAtBlockNumber?: any | null;
  createdAtBlockNumber_not?: any | null;
  createdAtBlockNumber_gt?: any | null;
  createdAtBlockNumber_lt?: any | null;
  createdAtBlockNumber_gte?: any | null;
  createdAtBlockNumber_lte?: any | null;
  createdAtBlockNumber_in?: any[] | null;
  createdAtBlockNumber_not_in?: any[] | null;
  liquidityProviderCount?: any | null;
  liquidityProviderCount_not?: any | null;
  liquidityProviderCount_gt?: any | null;
  liquidityProviderCount_lt?: any | null;
  liquidityProviderCount_gte?: any | null;
  liquidityProviderCount_lte?: any | null;
  liquidityProviderCount_in?: any[] | null;
  liquidityProviderCount_not_in?: any[] | null;
}

export interface Token_filter {
  id?: string | null;
  id_not?: string | null;
  id_gt?: string | null;
  id_lt?: string | null;
  id_gte?: string | null;
  id_lte?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  symbol?: string | null;
  symbol_not?: string | null;
  symbol_gt?: string | null;
  symbol_lt?: string | null;
  symbol_gte?: string | null;
  symbol_lte?: string | null;
  symbol_in?: string[] | null;
  symbol_not_in?: string[] | null;
  symbol_contains?: string | null;
  symbol_not_contains?: string | null;
  symbol_starts_with?: string | null;
  symbol_not_starts_with?: string | null;
  symbol_ends_with?: string | null;
  symbol_not_ends_with?: string | null;
  name?: string | null;
  name_not?: string | null;
  name_gt?: string | null;
  name_lt?: string | null;
  name_gte?: string | null;
  name_lte?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  decimals?: any | null;
  decimals_not?: any | null;
  decimals_gt?: any | null;
  decimals_lt?: any | null;
  decimals_gte?: any | null;
  decimals_lte?: any | null;
  decimals_in?: any[] | null;
  decimals_not_in?: any[] | null;
  totalSupply?: any | null;
  totalSupply_not?: any | null;
  totalSupply_gt?: any | null;
  totalSupply_lt?: any | null;
  totalSupply_gte?: any | null;
  totalSupply_lte?: any | null;
  totalSupply_in?: any[] | null;
  totalSupply_not_in?: any[] | null;
  tradeVolume?: any | null;
  tradeVolume_not?: any | null;
  tradeVolume_gt?: any | null;
  tradeVolume_lt?: any | null;
  tradeVolume_gte?: any | null;
  tradeVolume_lte?: any | null;
  tradeVolume_in?: any[] | null;
  tradeVolume_not_in?: any[] | null;
  tradeVolumeUSD?: any | null;
  tradeVolumeUSD_not?: any | null;
  tradeVolumeUSD_gt?: any | null;
  tradeVolumeUSD_lt?: any | null;
  tradeVolumeUSD_gte?: any | null;
  tradeVolumeUSD_lte?: any | null;
  tradeVolumeUSD_in?: any[] | null;
  tradeVolumeUSD_not_in?: any[] | null;
  untrackedVolumeUSD?: any | null;
  untrackedVolumeUSD_not?: any | null;
  untrackedVolumeUSD_gt?: any | null;
  untrackedVolumeUSD_lt?: any | null;
  untrackedVolumeUSD_gte?: any | null;
  untrackedVolumeUSD_lte?: any | null;
  untrackedVolumeUSD_in?: any[] | null;
  untrackedVolumeUSD_not_in?: any[] | null;
  txCount?: any | null;
  txCount_not?: any | null;
  txCount_gt?: any | null;
  txCount_lt?: any | null;
  txCount_gte?: any | null;
  txCount_lte?: any | null;
  txCount_in?: any[] | null;
  txCount_not_in?: any[] | null;
  totalLiquidity?: any | null;
  totalLiquidity_not?: any | null;
  totalLiquidity_gt?: any | null;
  totalLiquidity_lt?: any | null;
  totalLiquidity_gte?: any | null;
  totalLiquidity_lte?: any | null;
  totalLiquidity_in?: any[] | null;
  totalLiquidity_not_in?: any[] | null;
  derivedETH?: any | null;
  derivedETH_not?: any | null;
  derivedETH_gt?: any | null;
  derivedETH_lt?: any | null;
  derivedETH_gte?: any | null;
  derivedETH_lte?: any | null;
  derivedETH_in?: any[] | null;
  derivedETH_not_in?: any[] | null;
  mostLiquidPairs?: string[] | null;
  mostLiquidPairs_not?: string[] | null;
  mostLiquidPairs_contains?: string[] | null;
  mostLiquidPairs_not_contains?: string[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================