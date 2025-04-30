import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  Separator,
  Text,
} from '@chakra-ui/react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { Link, useLocation } from 'react-router-dom';
import navigationConfig from '../config/navigation';
import { ColorModeToggle } from '@components';

// Define NavItem type
export type NavItem = {
  path: string;
  label: string;
};

// Define interface for NavLink props
interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}

// Custom component that combines Button and Link
const NavLink = ({ to, children, isActive }: NavLinkProps) => (
  <Link to={to} style={{ textDecoration: 'none' }}>
    <Button variant={isActive ? 'subtle' : 'ghost'} colorPalette={isActive ? 'purple' : 'gray'}>
      {children}
    </Button>
  </Link>
);

// Internal Navigation component
interface NavMenuProps {
  items?: NavItem[];
}

function NavMenu({ items = navigationConfig.mainNav }: NavMenuProps) {
  const location = useLocation();

  return (
    <HStack gap={1}>
      {items.map(item => (
        <NavLink key={item.path} to={item.path} isActive={location.pathname === item.path}>
          {item.label}
        </NavLink>
      ))}
    </HStack>
  );
}

export interface NavBarProps {
  logoUrl: string;
  appName: string;
  navItems: NavItem[];
  showSearchBar?: boolean;
}

export default function NavBar({
  logoUrl,
  appName = 'MyApp',
  navItems,
  showSearchBar = true,
}: NavBarProps) {
  return (
    <Flex
      as="nav"
      w="100%"
      h="64px"
      px={4}
      justifyContent="space-between"
      bg="bg.panel"
      borderBottom="1px solid"
      borderColor="border"
    >
      <Flex>
        {/* Left side: Logo and App Name */}
        <Flex alignItems="center">
          <Link to="/">
            <HStack align="center" gap={4}>
              <Image src={logoUrl} alt="Logo" h="40px" />
              <Text fontSize="lg" fontWeight="bold">
                {appName}
              </Text>
            </HStack>
          </Link>
        </Flex>

        <Separator orientation="vertical" mx={4} />
      </Flex>

      {/* Middle: Navigation Menu */}
      <Box flex="1" display={{ base: 'none', md: 'flex' }}>
        <NavMenu items={navItems} />
      </Box>

      {/* Right side: Search and Profile */}
      <HStack gap={4}>
        {/* Search Bar */}
        {showSearchBar && (
          <InputGroup startElement={<MagnifyingGlass />} display={{ base: 'none', lg: 'flex' }}>
            <Input placeholder="Search..." variant="subtle" />
          </InputGroup>
        )}
        <ColorModeToggle />
      </HStack>
    </Flex>
  );
}
