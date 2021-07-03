import React from 'react';
import {
  Center,
  ChakraProvider,
  CSSReset,
  extendTheme,
} from '@chakra-ui/react';

interface AppProps {}

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
});

function App({}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Center height="100vh"></Center>
    </ChakraProvider>
  );
}

export default App;
