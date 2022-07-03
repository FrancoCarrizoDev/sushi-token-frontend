import { Box, Divider, Fade, Flex, FormControl, Input, Spinner, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { MainLayout, StoreCard } from '../../components/ui'
import { Store, STORES } from '../../db/seed-data'

import { GrCatalog } from 'react-icons/gr'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const OurFoodPage: NextPage = () => {
  const [filter, setFilter] = useState<string>('')
  const [storedFilter, setStoredFilter] = useState<Store[]>([])

  useEffect(() => {
    if (filter === '') {
      setStoredFilter(STORES)
    }
    {
      const storeFiltered = STORES.filter((store) => store.name.includes(filter.toUpperCase()))
      setStoredFilter(storeFiltered)
    }
  }, [filter])

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
            <Input
              size='sm'
              placeholder='Buscar...'
              borderRadius='md'
              variant='outline'
              onChange={(e) => setFilter(e.target.value)}
            />
          </FormControl>
        </Flex>
        <Flex flexWrap='wrap' justify={'space-between'}>
          <AnimatePresence>
            {/* storedFilter.length === 0 */}
            {storedFilter.length === 0 ? (
              <Flex justify={'center'} paddingTop='50px' w='100%'>
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='xl'
                />
              </Flex>
            ) : (
              storedFilter.map((store) => (
                <motion.div
                  key={store.name}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <StoreCard store={store} />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </Flex>
      </Box>
    </MainLayout>
  )
}

export default OurFoodPage
