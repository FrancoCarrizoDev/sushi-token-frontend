import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ReactNode } from 'react'

const GRAPHQL_ENDPOINT = 'http://localhost:8082/graphql'

const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
})

export default client
