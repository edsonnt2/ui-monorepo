import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    hiwe: {
      blue: {
        '100': '#F5F8FA',
        '900': '#123952',
      },
      orange: {
        '400': '#F99928', // orange primary
        '500': '#FF9416', // text orange
      },
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'hiwe.blue.100',
        color: 'hiwe.blue.900',
      },
    },
  },
});
