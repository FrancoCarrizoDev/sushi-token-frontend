import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { MainLayout, StoreCard } from '../../components/ui'
import { STORES } from '../../db/seed-data'

import { GrCatalog } from 'react-icons/gr'

const OurFoodPage: NextPage = () => {
  return (
    <MainLayout
      title='Nuestros locales'
      pageDescription='Disfruta de las cartas de todos nuestros locales'
    >
      <Box
        paddingTop={{ base: '80px', md: '150px', '3xl': '400px' }}
        width={{ base: '90%', lg: '80%', '2xl': '70%' }}
        margin={'0 auto'}
      >
        <Flex justify={'space-between'} flexDir='column' gap='10px'>
          <Box w='100%'>
            <Flex align='center' gap='5px'>
              <Text as={'h1'} fontSize={'2xl'} fontWeight='600' color={'blackAlpha.800'}>
                Nuestros locales
              </Text>
              <GrCatalog display='inline' size='20px' />
            </Flex>

            <Divider />
          </Box>
          <FormControl>
            <Input size='sm' placeholder='Buscar...' borderRadius='md' variant='outline' />
          </FormControl>
        </Flex>
        <Flex flexWrap='wrap' justify={'space-between'}>
          {STORES.map((store) => (
            <Box key={store.name}>
              <StoreCard store={store} />
            </Box>
          ))}
        </Flex>
      </Box>
    </MainLayout>
  )
}

export default OurFoodPage
