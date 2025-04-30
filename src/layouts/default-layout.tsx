import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '@components';

export function DefaultLayout() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navigation />

      <Box flex="1" p={4}>
        <Outlet />
      </Box>
    </Box>
  );
}
