import { Button, HStack } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import navigationConfig from '@/config/navigation';

export type NavItem = {
  path: string;
  label: string;
};

// Custom component that combines Button and Link
const NavLink = ({
  to,
  children,
  isActive,
}: {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}) => (
  <Link to={to} style={{ textDecoration: 'none' }}>
    <Button variant={isActive ? 'solid' : 'ghost'} colorPalette={isActive ? 'blue' : 'gray'}>
      {children}
    </Button>
  </Link>
);

interface NavigationProps {
  items?: NavItem[];
}

export default function Navigation({ items = navigationConfig.mainNav }: NavigationProps) {
  const location = useLocation();

  return (
    <HStack gap={4} p={4} justifyContent="center">
      {items.map(item => (
        <NavLink key={item.path} to={item.path} isActive={location.pathname === item.path}>
          {item.label}
        </NavLink>
      ))}
    </HStack>
  );
}
