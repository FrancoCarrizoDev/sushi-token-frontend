import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store as ReduxStore } from '../store/store'
import { Provider as ReduxProvider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme/theme'
import client from '../graphql/apolloNext'
import { ApolloProvider } from '@apollo/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={ReduxStore}>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </ReduxProvider>
  )
}

export default MyApp
