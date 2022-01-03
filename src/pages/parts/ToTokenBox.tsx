import classNames from 'classnames'
import { useStoreState } from '../../store/hooks'
import { ModalOrigin } from '../../type'
import { TokenSelectPill } from './TokenSelectPill'

export const ToTokenBox = () => {
  const { toToken } = useStoreState(state => state)
  return (
    <div className="relative flex items-center justify-between h-20 px-6 bg-gray-800 rounded-lg">
      <div
        className={classNames(
          'block w-2/4 text-3xl font-light text-left bg-transparent outline-none placeholder:text-gray-400',
          {
            'text-green-200': toToken?.amount !== '0'
          },
          {
            'text-white': toToken?.amount === '0'
          }
        )}
      >
        {toToken.amount}
      </div>
      <div className="flex items-center justify-end w-2/4 h-full">
        <TokenSelectPill symbol={toToken.symbol} origin={ModalOrigin.TO_TOKEN} />
      </div>
    </div>
  )
}
