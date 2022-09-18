import { gql } from '@apollo/client'

export const allLocals = gql`
  query {
    locales {
      data {
        id
        attributes {
          nombre
          direccion
          telefono {
            id
            tipo
            numero
          }
          url
          imagenes {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
          redesSociales {
            id
            url
            iframe
          }
          tags {
            id
            tag
          }
        }
      }
    }
  }
`
