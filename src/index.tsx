import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { ApolloProvider } from '@apollo/client'
import { StoreProvider } from 'easy-peasy'
import { client } from './graphql'

import { store } from './store'

import App from './App'
import 'react-loading-skeleton/dist/skeleton.css'
import './index.css'

ReactDOM.render(
  <ApolloProvider client={client}>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
