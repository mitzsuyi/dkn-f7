import MainPage from './components/pages/MainPage';
import TaskPage from './components/pages/TaskPage';
import UnfinishedPage from './components/pages/UnfinishedPage';
import YouPage from './components/pages/YouPage';
import HomePage from './components/pages/HomePage';


import NotFoundPage from './components/pages/NotFoundPage';

export default [
{

    path: '/',
    redirect:"/main/"
},
  {
    path: '/main/',
    component: MainPage,
    tabs:[
    {
      path:"/",
      id:"home",
      component: HomePage
    },
  {
    path: '/task/',
    id:"task",
    component: TaskPage
  },
  {
    path: '/unfinished/',
    id:"unfinished",
    component: UnfinishedPage
  },
  {
    path: '/you/',
    id:"you",
    component: YouPage
  }]
},
  {
    path: '(.*)',
    component: NotFoundPage
  },
];
