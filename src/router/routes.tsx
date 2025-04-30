import { RouteObject } from 'react-router-dom';
import Overview from '@/pages/overview';
import Applications from '@/pages/applications';
import Entities from '@/pages/entities';
import KYB from '@/pages/kyb';
import Admin from '@/pages/admin';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Overview />,
  },
  {
    path: '/applications',
    element: <Applications />,
  },
  {
    path: '/entities',
    element: <Entities />,
  },
  {
    path: '/kyb',
    element: <KYB />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
];
