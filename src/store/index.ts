import { action, Action, createStore } from 'easy-peasy'
import { ModalOrigin } from '../type'

type Token = {
  id: string
  amount: string
  symbol: string
  priceUSD: string
}

type Modal = {
  visible: boolean
  origin: ModalOrigin
}

export interface StoreModel {
  fromToken: Token
  toToken: Token
  modal: Modal
  setFromToken: Action<this, Partial<Token>>
  setToToken: Action<this, Partial<Token>>
  setModal: Action<this, Partial<Modal>>
}

const initialState = {
  fromToken: {
    amount: '',
    id: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    symbol: 'WETH'
  } as Token,
  toToken: {
    amount: '0'
  } as Token,
  modal: {
    visible: false,
    origin: ModalOrigin.FROM_TOKEN
  }
}

export const store = createStore<StoreModel>({
  ...initialState,
  setFromToken: action((state, dto) => {
    state.fromToken = {
      ...state.fromToken,
      ...dto
    }
  }),
  setToToken: action((state, dto) => {
    state.toToken = {
      ...state.toToken,
      ...dto
    }
  }),
  setModal: action((state, dto) => {
    state.modal = {
      ...state.modal,
      ...dto
    }
  })
})
