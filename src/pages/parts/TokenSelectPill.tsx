import React from 'react'
import { ReactComponent as ArrowDownSvg } from '../../assets/svg/arrow-down.svg'
import { useStoreActions } from '../../store/hooks'
import { ModalOrigin } from '../../type'

type TokenSelectPillProps = {
  symbol: string
  origin: ModalOrigin
}

export const TokenSelectPill: React.FC<TokenSelectPillProps & React.HTMLProps<HTMLDivElement>> =
  props => {
    const { setModal } = useStoreActions(state => state)

    function handleOnShowModal() {
      setModal({
        visible: true,
        origin: props.origin
      })
    }

    if (props.symbol) {
      return (
        <div
          className="flex items-center px-4 py-2 text-indigo-200 bg-indigo-700 shadow cursor-pointer rounded-xl hover:bg-indigo-800"
          onClick={handleOnShowModal}
        >
          <div>{props.symbol}</div>
          <div>
            <ArrowDownSvg className="w-5 h-5 ml-2 text-white fill-current" />
          </div>
        </div>
      )
    }

    return (
      <div
        className="flex items-center px-4 py-2 text-blue-200 bg-blue-700 shadow cursor-pointer rounded-xl hover:bg-blue-800"
        onClick={handleOnShowModal}
      >
        <div>Select token</div>
        <div>
          <ArrowDownSvg className="w-5 h-5 ml-2 text-white fill-current" />
        </div>
      </div>
    )
  }
