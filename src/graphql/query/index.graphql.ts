import { gql } from '@apollo/client'

export const GET_TOKENS = gql`
  query GetTokens($where: Token_filter, $first: Int) {
    tokens(where: $where, orderBy: "tradeVolumeUSD", orderDirection: "desc", first: $first) {
      id
      name
      symbol
    }
  }
`

export const GET_PAIRS = gql`
  query GetPairs($where: Pair_filter) {
    pairs(where: $where, orderBy: volumeUSD, orderDirection: desc) {
      id
      token1 {
        id
        name
        symbol
      }
    }
  }
`

export const GET_POOL_VOLUME_USD = gql`
  query GetPoolVolumeUSD($where: Pair_filter) {
    pairs(where: $where, orderBy: volumeUSD, orderDirection: desc, first: 1) {
      id
      volumeUSD
      token0Price
      token1Price
    }
  }
`
