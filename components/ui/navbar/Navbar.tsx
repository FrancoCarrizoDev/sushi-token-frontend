import { Box, Flex, IconButton, Collapse, useDisclosure, Heading } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { BiRestaurant } from 'react-icons/bi'
import { IMenuItem } from '../../../interfaces'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'
import { FC } from 'react'
import { useRouter } from 'next/router'
import ChakraNextLink from '../ChakraNextLink'

interface Props {
  menu: IMenuItem[]
}

const Navbar: FC<Props> = ({ menu }) => {
  const { isOpen, onToggle } = useDisclosure()

  const router = useRouter()

  const MENU = menu.map((menuItem: IMenuItem) => ({
    ...menuItem,
    href: router.query.local ? router.query.local + menuItem.href : menuItem.href
  }))

  return (
    <Box as='nav'>
      <Flex
        bg={isOpen ? 'black' : 'blackAlpha.800'}
        color={'white'}
        minH={'60px'}
        py={{ base: 3, md: 4, lg: 5 }}
        align={'center'}
      >
        <Flex
          width={{ base: '90%', lg: '80%', '2xl': '70%' }}
          margin={'0 auto'}
          justifyContent={'space-between'}
          alignItems='center'
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
              <ChakraNextLink href={'/'} _hover={{ textDecoration: 'none' }}>
                SushiToken
              </ChakraNextLink>
            </Heading>
          </Flex>
          <Flex flex={{ base: 1 }} justify={'end'}>
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              display={{ base: 'block', lg: 'none' }}
            />
            <Flex display={{ base: 'none', lg: 'flex' }} ml={10}>
              <DesktopNav menu={MENU} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav menu={MENU} isMenuOpen={isOpen} />
      </Collapse>
    </Box>
  )
}

export default Navbar
