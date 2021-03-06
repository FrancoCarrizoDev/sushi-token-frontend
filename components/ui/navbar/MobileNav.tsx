import { Stack } from '@chakra-ui/react'
import { FC } from 'react'
import { IMenuItem } from '../../../interfaces'
import { MobileNavItem } from './MobileNavItem'

interface Props {
  menu: IMenuItem[]
  isMenuOpen: boolean
}

export const MobileNav: FC<Props> = ({ menu, isMenuOpen }) => {
  return (
    <Stack bg={isMenuOpen ? 'black' : 'blackAlpha.700'} p={4} display={{ md: 'none' }}>
      {menu.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}
