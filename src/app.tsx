import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { DefaultLayout } from '@components';
import { ThemeProvider } from 'next-themes';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <DefaultLayout />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
