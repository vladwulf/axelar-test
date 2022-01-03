import { HttpLink, ApolloClient, InMemoryCache, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import toast from 'react-hot-toast'

import { env } from './config'

const httpLink = new HttpLink({
  uri: env.GRAPHQL_API
})

/**
 * Show error toaster
 */
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => toast.error(message))
  }
  if (networkError) toast.error(networkError.message)
})

export const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: false
  })
})
