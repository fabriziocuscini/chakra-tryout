import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '@components';
import navigation from '@config/navigation';

export function DefaultLayout() {
  return (
    <>
      <NavBar logoUrl="app-logo.svg" appName="Chakra App" navItems={navigation.mainNav} />
      <Box minHeight="100vh" display="flex" flexDirection="column" pt="{sizes.navbar}">
        <Container maxWidth={1650} py={{ base: 4, md: 8 }} flex={1}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
}
