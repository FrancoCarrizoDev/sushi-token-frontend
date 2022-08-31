import { gql } from '@apollo/client'

export const MainDocument = gql`
  query {
    main {
      data {
        id
        attributes {
          titulo
          banner {
            id
            descripcion
            preTitulo
            titulo
            imagen {
              data {
                attributes {
                  url
                }
              }
            }
            subDescripcion
            primerBoton
            segundoBoton
            descripcionImagen
          }
        }
      }
    }
  }
`
