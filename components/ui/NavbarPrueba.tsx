import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  Link,
  Popover,
  PopoverTrigger,
  useDisclosure,
  Heading
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { BiRestaurant } from 'react-icons/bi'
import NextLink from 'next/link'
interface IMenuItem {
  label: string
  href: string
}

interface NavItem {
  label: string
  subLabel?: string
  href?: string
}

const MENU: IMenuItem[] = [
  {
    label: 'Home',
    href: 'home'
  },
  {
    label: 'Our Food',
    href: 'our-food'
  },
  {
    label: 'Order Now',
    href: 'order-now'
  },
  {
    label: 'Gallery',
    href: 'gallery'
  },
  {
    label: 'Location',
    href: 'locations'
  },
  {
    label: 'Reserve',
    href: 'reserve'
  }
]

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
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
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {MENU.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <NextLink href={navItem.href ?? '#'} passHref>
                <Link
                  p={2}
                  fontSize={'sm'}
                  fontWeight={600}
                  color={'white'}
                  _hover={{
                    textDecoration: 'none',
                    color: 'pink.400'
                  }}
                >
                  {navItem.label}
                </Link>
              </NextLink>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={'blackAlpha.700'} p={4} display={{ md: 'none' }}>
      {MENU.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none'
        }}
      >
        <NextLink href={href ?? '#'} passHref>
          <Link color='white' fontSize={'md'} fontWeight={'semibold'}>
            {label}
          </Link>
        </NextLink>
      </Flex>
    </Stack>
  )
}
