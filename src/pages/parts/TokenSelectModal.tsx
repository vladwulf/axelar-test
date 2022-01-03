import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useLazyQuery } from '@apollo/client'
import Skeleton from 'react-loading-skeleton'

import { useStoreActions, useStoreState } from '../../store/hooks'
import useDebounce from '../../hooks/useDebounce'
import { GET_PAIRS, GET_TOKENS } from '../../graphql/query'
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg'
import { ModalOrigin } from '../../type'

export const TokenSelectModal = () => {
  const { modal, fromToken } = useStoreState(state => state)
  const { setModal, setFromToken, setToToken } = useStoreActions(state => state)

  const [tokenSearch, setTokenSearch] = useState<string>('')
  const debouncedTokenSearch = useDebounce(tokenSearch, 500)

  const [tokens, setTokens] = useState([])
  const [searchTokens, setSearchTokens] = useState([])

  const [getPairs, getPairsData] = useLazyQuery(GET_PAIRS, {
    notifyOnNetworkStatusChange: true
  })
  const [getTokens, getTokensData] = useLazyQuery(GET_TOKENS, {
    notifyOnNetworkStatusChange: true
  })

  useEffect(() => {
    if (!modal.visible) return
    if (modal.origin === ModalOrigin.FROM_TOKEN) {
      // if main token box get all tokens
      getTokens({
        variables: {
          first: 100,
          where: null
        }
      })
      return
    }

    // if secondary token box only get compatible tokens based by pair
    getPairs({
      variables: {
        where: {
          token0: fromToken.id
        }
      }
    })
    // eslint-disable-next-line
  }, [modal.visible])

  /**
   * SEACH LOGIC
   */
  useEffect(() => {
    if (!modal.visible) return
    if (modal.origin === ModalOrigin.FROM_TOKEN) {
      if (debouncedTokenSearch) {
        getTokens({
          variables: {
            first: 100,
            where: {
              symbol_contains: debouncedTokenSearch
            }
          }
        })
      } else {
        getTokensData.refetch({
          first: 100,
          where: null
        })
      }
      return
    }
    // if to token box is open should only suggest tokens from allowed list
    if (debouncedTokenSearch) {
      setSearchTokens(
        tokens.filter(
          (token: any) =>
            token.symbol.toLowerCase().includes(debouncedTokenSearch.toLowerCase()) ||
            token.name.toLowerCase().includes(debouncedTokenSearch.toLowerCase())
        )
      )
    } else {
      setSearchTokens(tokens)
    }

    // eslint-disable-next-line
  }, [debouncedTokenSearch])

  useEffect(() => {
    if (getTokensData.data) {
      const tokens = getTokensData?.data?.tokens || []
      setTokens(tokens)
      setSearchTokens(tokens)
    }
    // eslint-disable-next-line
  }, [getTokensData.loading, getTokensData.data])

  useEffect(() => {
    if (getPairsData.data) {
      const pairs = getPairsData.data?.pairs
      const tokens = pairs?.map((pair: any) => pair.token1)
      setTokens(tokens)
      setSearchTokens(tokens)
    }
    // eslint-disable-next-line
  }, [getPairsData.loading, getPairsData.data])

  function handleOnCloseModal() {
    setTokenSearch('')
    setModal({
      visible: false
    })
  }

  function handleOnTokenSelect(tokenId: string, tokenSymbol: string) {
    if (modal.origin === ModalOrigin.FROM_TOKEN) {
      setFromToken({
        id: tokenId,
        symbol: tokenSymbol
      })
      handleOnCloseModal()
      return
    }

    setToToken({
      id: tokenId,
      symbol: tokenSymbol
    })
    handleOnCloseModal()
  }

  function renderTokenBody() {
    if (getTokensData.loading || getPairsData.loading) return <Skeleton count={10} />
    return searchTokens?.map((token: any) => {
      return (
        <div
          key={token.id}
          className="px-2 py-2 rounded cursor-pointer hover:bg-indigo-50"
          onClick={() => handleOnTokenSelect(token.id, token.symbol)}
        >
          <h5 className="text-base font-semibold">{token.symbol}</h5>
          <p className="text-xs font-light">{token.name}</p>
        </div>
      )
    })
  }

  return (
    <>
      <Transition appear show={modal.visible} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={handleOnCloseModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 mt-20 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="flex justify-between text-lg font-medium leading-6 text-gray-900"
                >
                  <div>Select a Token</div>
                  <CloseIcon
                    className="w-6 h-6 text-indigo-800 rounded cursor-pointer fill-current hover:text-indigo-600 hover:bg-indigo-50"
                    style={{ padding: 3 }}
                    onClick={handleOnCloseModal}
                  />
                </Dialog.Title>
                <div className="mt-2">
                  <input
                    className="w-full px-4 py-2 border rounded"
                    placeholder="Search token by name (case-sensitive)"
                    value={tokenSearch}
                    onChange={e => setTokenSearch(e.target.value)}
                  />
                </div>

                <div className="my-5 overflow-y-auto" style={{ maxHeight: 400 }}>
                  {renderTokenBody()}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
