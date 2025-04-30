import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { DefaultLayout } from '@components';
import { ThemeProvider } from 'next-themes';
import { useLocation } from 'react-router-dom';

function App() {
  // const location = useLocation();

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
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
