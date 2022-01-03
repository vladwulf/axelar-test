import { useStoreActions, useStoreState } from '../../store/hooks'
import { ModalOrigin } from '../../type'
import { TokenSelectPill } from './TokenSelectPill'

export const FromTokenBox = () => {
  const { fromToken } = useStoreState(state => state)
  const { setFromToken } = useStoreActions(state => state)

  function handleOnAmountChange(input: string) {
    if (isNaN(Number(input))) return false
    setFromToken({
      amount: input
    })
  }

  return (
    <div className="relative flex items-center justify-between h-20 px-6 bg-gray-800 rounded-lg">
      <input
        className="block w-2/4 text-3xl font-light text-left text-white bg-transparent outline-none placeholder:text-gray-400"
        placeholder="0.0"
        value={fromToken.amount}
        onChange={e => handleOnAmountChange(e.target.value)}
      />
      <div className="flex items-center justify-end w-2/4 h-full">
        <TokenSelectPill symbol={fromToken.symbol} origin={ModalOrigin.FROM_TOKEN} />
      </div>
    </div>
  )
}
