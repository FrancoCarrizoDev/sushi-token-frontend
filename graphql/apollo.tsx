import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React, { FC, ReactNode } from 'react'

const GRAPHQL_ENDPOINT = 'http://localhost:8082/graphql'

interface Props {
  children: ReactNode
}

const StrapiApolloProvider: FC<Props> = ({ children }) => {
  const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache()
  })
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default StrapiApolloProvider
