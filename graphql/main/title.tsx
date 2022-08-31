import { gql } from '@apollo/client'

export const TitleDocument = gql`
  query {
    main {
      data {
        id
        attributes {
          titulo
        }
      }
    }
  }
`
