import { NavItem } from '@components/nav-bar';

/**
 * Application navigation configuration
 *
 * This file centralizes all navigation definitions used throughout the application.
 * Different navigation configurations can be exported for different areas of the app.
 */

/**
 * Main navigation items displayed in the primary navigation bar
 */
export const mainNavItems: NavItem[] = [
  { path: '/', label: 'Overview' },
  { path: '/applications', label: 'Applications' },
  { path: '/entities', label: 'Entities' },
  { path: '/kyb', label: 'KYB' },
  { path: '/admin', label: 'Admin' },
];

/**
 * Example of secondary navigation that could be used in a different layout
 */
export const adminNavItems: NavItem[] = [
  { path: '/admin', label: 'Dashboard' },
  { path: '/admin/users', label: 'Users' },
  { path: '/admin/settings', label: 'Settings' },
];

/**
 * Navigation configuration object
 * All navigation configurations should be exported from here
 */
const navigation = {
  mainNav: mainNavItems,
  adminNav: adminNavItems,
};

export default navigation;
