import { createTypedHooks } from 'easy-peasy'
import { StoreModel } from '.'

const { useStoreState, useStoreActions } = createTypedHooks<StoreModel>()

export { useStoreState, useStoreActions }
