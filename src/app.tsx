import { Box, ChakraProvider, ClientOnly, Skeleton, defaultSystem } from '@chakra-ui/react';
import { ColorModeToggle, DefaultLayout } from '@components';
import { ThemeProvider } from 'next-themes';
import { useLocation } from 'react-router-dom';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const location = useLocation();

  // In the future, we can conditionally render different layouts
  // based on the route path or other conditions
  // Example:
  // if (location.pathname.startsWith('/admin')) {
  //   return <AdminLayout />;
  // }

  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <DefaultLayout />

        {/* Global color mode toggle that persists across layouts */}
        <Box pos="absolute" top="4" right="4" zIndex="overlay">
          <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
            <ColorModeToggle />
          </ClientOnly>
        </Box>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
