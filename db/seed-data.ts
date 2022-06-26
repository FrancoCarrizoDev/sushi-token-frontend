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
          slug: 'fell-roll'
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
