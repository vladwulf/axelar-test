import { useLazyQuery } from '@apollo/client'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { GET_POOL_VOLUME_USD } from '../graphql/query'
import useDebounce from '../hooks/useDebounce'
import { useStoreActions, useStoreState } from '../store/hooks'
import { FromTokenBox, TokenSelectModal, ToTokenBox } from './parts'

export const MainPage = () => {
  const { fromToken, toToken } = useStoreState(state => state)
  const { setToToken } = useStoreActions(state => state)
  const [getPoolVolume, { data, loading }] = useLazyQuery(GET_POOL_VOLUME_USD)

  const debouncedFromTokenAmount = useDebounce(fromToken.amount, 500)

  /**
   * Calculate pool volume USD
   */
  useEffect(() => {
    if (fromToken.symbol && toToken.symbol) {
      getPoolVolume({
        variables: {
          where: {
            token0: fromToken.id,
            token1: toToken.id
          }
        }
      })
    }

    // eslint-disable-next-line
  }, [fromToken.symbol, debouncedFromTokenAmount, toToken.symbol])

  /**
   * Calculate token conversion
   */
  useEffect(() => {
    if (data) {
      const token1Price = data?.pairs[0]?.token1Price
      const newAmount = Math.round(token1Price * Number(debouncedFromTokenAmount) * 100000) / 100000

      if (newAmount || newAmount === 0) {
        setToToken({
          amount: newAmount.toString()
        })
      }
    }

    // eslint-disable-next-line
  }, [loading, data, debouncedFromTokenAmount])

  /**
   * Prevent same tokens case
   */
  useEffect(() => {
    if (fromToken.id === toToken.id) {
      setToToken({
        id: '',
        symbol: '',
        amount: ''
      })
    }

    // eslint-disable-next-line
  }, [fromToken.symbol, toToken.symbol])

  const volumeUSD = data?.pairs[0]?.volumeUSD

  return (
    <>
      <TokenSelectModal />
      <div className="w-full max-w-md p-4 shadow rounded-3xl bg-zinc-900">
        <h4 className="mb-4">Swap</h4>
        <div className="relative">
          <FromTokenBox />
        </div>
        <div className="relative mt-2">
          <ToTokenBox />
        </div>
        {volumeUSD && (
          <div className="my-5 text-center">
            <h4 className="text-sm text-blue-200">POOL VOLUME (USD):</h4>
            <div className="text-2xl">{new Intl.NumberFormat().format(volumeUSD)}</div>
          </div>
        )}
        <button
          className="w-full p-4 mt-2 text-center text-blue-300 bg-blue-800 rounded-lg hover:bg-blue-700 hover:text-blue-200"
          onClick={() => toast.error('Wallet functionality not implemented')}
        >
          Connect Wallet
        </button>
      </div>
    </>
  )
}
