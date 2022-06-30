import '../styles/globals.css'
import type { AppProps } from 'next/app'
import StrapiApolloProvider from '../graphql/apollo'
import { store as ReduxStore } from '../store/store'
import { Provider as ReduxProvider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={ReduxStore}>
      <StrapiApolloProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </StrapiApolloProvider>
    </ReduxProvider>
  )
}

export default MyApp
