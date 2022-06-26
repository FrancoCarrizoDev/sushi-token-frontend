interface Menus {
  menus: Menu[]
}

export interface Menu {
  name: MenuTypes
  enabled: boolean
  products: IProduct[]
}
//362x239
type MenuTypes = 'STARTERS' | 'SUSHI' | 'KITCHEN' | 'DESSERTS' | 'DRINKS'
type PriceByPortion = {
  portion: number
  price: number
}
type SuitableTypes = {
  for: 'VEGAN' | 'VEGETARIAN' | 'COELIAC'
  isSuitable: boolean
}
// TODO pensar bien si esto vale la pena
type ingredients = 'queso' | 'salmon' | 'langostinos' | 'pollo'

interface IProduct {
  name: string
  image: string[]
  description: string
  price: PriceByPortion[]
  ingredients: string[]
  enabled: boolean
  inStock: number
  slug: string
  suitable?: SuitableTypes[]
}

export const MENU: Menus = {
  menus: [
    {
      name: 'STARTERS',
      enabled: true,
      products: [
        {
          name: 'Langostinos Crujientes',
          image: ['/assets/langostinos_crujientes.png'],
          description: 'Langosinos rebozados en cerales, acompañado de mayonesa alimonada',
          price: [
            {
              portion: 3,
              price: 1400
            },
            {
              portion: 2,
              price: 1000
            }
          ],
          ingredients: ['langostinos', 'cereales', 'mayonesa alimonada', 'apanado'],
          enabled: true,
          inStock: 10,
          slug: 'langostinos-crujientes'
        },
        {
          name: 'Empanaditas Chinas(Carne)',
          image: ['/assets/empanaditas_chinas.png'],
          description: 'De carne con salsa agridulce. ',
          price: [
            {
              portion: 3,
              price: 1200
            },
            {
              portion: 2,
              price: 900
            }
          ],
          ingredients: ['carne', 'salsa agridulce', 'cebolla', 'verdeo'],
          enabled: true,
          inStock: 25,
          slug: 'empanada-china-carne'
        }
      ]
    },
    {
      name: 'SUSHI',
      enabled: true,
      products: [
        {
          name: 'Feel Roll',
          image: ['/assets/feel_roll.png'],
          description: 'Relleno de salmón, queso y palta, envuelto en tamago. ',
          price: [
            {
              portion: 8,
              price: 1000
            },
            {
              portion: 4,
              price: 600
            }
          ],
          ingredients: ['salmon', 'queso philadelphia', 'palta', 'tamago'],
          enabled: true,
          inStock: 6,
          slug: 'fell-roll',
          suitable: [
            {
              for: 'COELIAC',
              isSuitable: true
            }
          ]
        },
        {
          name: 'Honey Roll',
          image: ['/assets/honey_roll.png'],
          description: 'Relleno de salmón cocido en miel y jengibre, envuelto en hilos de batata. ',
          price: [
            {
              portion: 9,
              price: 900
            },
            {
              portion: 5,
              price: 500
            }
          ],
          ingredients: ['salmon', 'miel', 'gengibre', 'batata'],
          enabled: true,
          inStock: 6,
          slug: 'honey-roll'
        },
        {
          name: 'Buenos Aires Roll',
          image: ['/assets/buenos_aires_roll.png'],
          description:
            'Relleno de salmón langostinos, queso philadelphia y palta, envuelto en salmón, con salsa buenos aires. ',
          price: [
            {
              portion: 9,
              price: 950
            },
            {
              portion: 5,
              price: 550
            }
          ],
          ingredients: [
            'salmon',
            'langostinos',
            'salsa buenos aires',
            'queso philadelpia',
            'arroz',
            'palta'
          ],
          enabled: true,
          inStock: 6,
          slug: 'buenos-aires-roll'
        },
        {
          name: 'Soul Roll',
          image: ['/assets/soul_roll.png'],
          description:
            'Relleno de salmón, palmitos, tamago, envuelto en queso philadelhpia, coronado de almendras acaramelizadas. ',
          price: [
            {
              portion: 8,
              price: 920
            },
            {
              portion: 4,
              price: 520
            }
          ],
          ingredients: [
            'salmon',
            'palmitos',
            'tamago',
            'queso philadelpia',
            'almendras acaramelizadas'
          ],
          enabled: true,
          inStock: 6,
          slug: 'soul-roll'
        },
        {
          name: 'Spf Roll',
          image: ['/assets/spf_roll.png'],
          description:
            'Relleno de salmón, queso philadelphia y palta, envuelto en arroz y semillas de sésamo.',
          price: [
            {
              portion: 9,
              price: 950
            },
            {
              portion: 5,
              price: 550
            }
          ],
          ingredients: ['salmon', 'semillas de sésamo', 'queso philadelpia', 'arroz', 'palta'],
          enabled: true,
          inStock: 6,
          slug: 'spf-roll'
        },
        {
          name: 'Placer Real Roll',
          image: ['/assets/buenos_aires_roll.png'],
          description:
            'Relleno de salmón, queso philadelphia y palta, envuelto en tamago y salmón, coronado de batata, con salsa de maracuyá ',
          price: [
            {
              portion: 9,
              price: 950
            },
            {
              portion: 5,
              price: 550
            }
          ],
          ingredients: ['salmon', 'tamago', 'queso philadelpia', 'palta', 'batata'],
          enabled: true,
          inStock: 6,
          slug: 'placer-real-roll'
        }
      ]
    },
    {
      name: 'KITCHEN',
      enabled: true,
      products: []
    },
    {
      name: 'DESSERTS',
      enabled: true,
      products: []
    },
    {
      name: 'DRINKS',
      enabled: true,
      products: []
    }
  ]
}