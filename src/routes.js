import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard/index'));
const Pengumuman = React.lazy(() => import('./views/Pengumuman/index'));
const Tentang = React.lazy(() => import('./views/Tentang/index'));
const Repository = React.lazy(() => import('./views/Repository/index'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/pengumuman', exact: true,  name: 'Pengumuman', component: Pengumuman },
  { path: '/tentang', exact: true, name: 'Tentang', component: Tentang },
  { path: '/repository', exact: true, name: 'Repository', component: Repository },
];

export default routes;
