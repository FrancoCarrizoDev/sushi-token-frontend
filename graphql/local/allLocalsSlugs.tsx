import { gql } from '@apollo/client'

export const allLocalsSlugs = gql`
  query {
    locales {
      data {
        attributes {
          url
        }
      }
    }
  }
`
