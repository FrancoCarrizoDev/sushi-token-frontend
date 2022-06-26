import { Flex, Stack, useDisclosure } from '@chakra-ui/react'
import { NavItem } from '../../../interfaces'
import ChakraNextLink from '../ChakraNextLink'

export const MobileNavItem = ({ label, href = '#' }: NavItem) => {
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
        <ChakraNextLink href={href} color='white' fontSize={'md'} fontWeight={'semibold'}>
          {label}
        </ChakraNextLink>
      </Flex>
    </Stack>
  )
}
