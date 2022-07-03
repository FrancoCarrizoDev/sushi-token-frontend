import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
}

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
  '3xl': '120em'
})

const styles = {
  global: {}
}

export const theme = extendTheme({ colors, breakpoints, styles })
