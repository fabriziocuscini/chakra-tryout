import { ChakraProvider } from '@chakra-ui/react';
import { DefaultLayout } from '@components';
import { ThemeProvider } from 'next-themes';
import { system } from './theme';

function App() {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <DefaultLayout />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
