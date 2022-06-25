import '../styles/globals.css'
import type { AppProps } from 'next/app'
import StrapiApolloProvider from '../graphql/apollo'
import { store as ReduxStore } from '../store/store'
import { Provider as ReduxProvider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={ReduxStore}>
      <StrapiApolloProvider>
        <Component {...pageProps} />
      </StrapiApolloProvider>
    </ReduxProvider>
  )
}

export default MyApp
