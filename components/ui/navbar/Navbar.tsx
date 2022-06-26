import { Box, Flex, IconButton, Collapse, useDisclosure, Heading } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { BiRestaurant } from 'react-icons/bi'
import { IMenuItem } from '../../../interfaces'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

const MENU: IMenuItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Our Food',
    href: '/our-food'
  },
  {
    label: 'Order Now',
    href: '/order-now'
  },
  {
    label: 'Gallery',
    href: '/gallery'
  },
  {
    label: 'Location',
    href: '/locations'
  },
  {
    label: 'Reserve',
    href: '/reserve'
  }
]

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box as='nav'>
      <Flex
        bg={'blackAlpha.700'}
        color={'white'}
        minH={'60px'}
        py={{ base: 3 }}
        px={{ base: 4 }}
        align={'center'}
      >
        <Flex>
          <Heading
            as='h1'
            size='lg'
            color={'white'}
            fontWeight='600'
            display={'flex'}
            alignItems='center'
          >
            <Box
              as='span'
              padding={2}
              backgroundColor='hsl(18deg 86% 48%)'
              borderRadius={'full'}
              marginRight={2}
            >
              <BiRestaurant size={'20px'} />
            </Box>{' '}
            SushiToken
          </Heading>
        </Flex>
        <Flex flex={{ base: 1 }} justify={'end'}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            display={{ base: 'block', md: 'none' }}
          />
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav menu={MENU} />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav menu={MENU} />
      </Collapse>
    </Box>
  )
}