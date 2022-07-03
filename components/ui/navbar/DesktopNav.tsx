import { Box, Stack, Popover, PopoverTrigger } from '@chakra-ui/react'
import { FC } from 'react'
import { IMenuItem } from '../../../interfaces'
import ChakraNextLink from '../ChakraNextLink'

interface Props {
  menu: IMenuItem[]
}

export const DesktopNav: FC<Props> = ({ menu }) => {
  return (
    <Stack direction={'row'} spacing={4}>
      {menu.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <ChakraNextLink
                href={navItem.href}
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
              </ChakraNextLink>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}
