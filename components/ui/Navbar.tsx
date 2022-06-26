import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Link, List, ListItem } from '@chakra-ui/react'
import NextLink from 'next/link'

interface IMenuItem {
  name: string
  slug: string
}

const menu: IMenuItem[] = [
  {
    name: 'Home',
    slug: 'home'
  },
  {
    name: 'Our Food',
    slug: 'our-food'
  },
  {
    name: 'Order Now',
    slug: 'order-now'
  },
  {
    name: 'Location',
    slug: 'locations'
  },
  {
    name: 'Reserve',
    slug: 'reserve'
  }
]

export const Navbar = () => {
  return (
    <List>
      {menu.map((link) => (
        <ListItem key={link.slug}>
          <NextLink href={link.slug} passHref>
            <Link color='white' fontSize={'large'} fontWeight={'semibold'}>
              {link.name}
            </Link>
          </NextLink>
        </ListItem>
      ))}
    </List>
  )
}
