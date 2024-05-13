import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import CategoryList from 'views/Eventcategory/CategoryList';
import CreateCategory from 'views/Eventcategory/CreateCategory';
import AdddEventMember from 'views/Events/AddEventMember';
import CreateEvent from 'views/Events/CreateEvent';
import EventList from 'views/Events/EventList';
import AdddWishUser from 'views/Events/AddWishUser';
import WishUserList from 'views/Events/WishUserList';
import JoinEventList from 'views/Events/JoinEventList';
import CompleteEventList from 'views/Events/CompleteEventList';
import AbsenseUser from 'views/Events/AbsenseUser';
import CompleteEventUser from 'views/Events/CompleteEventUser';
import UserMark from 'views/Events/CreateUserMark/UserMark';
import UserMarkList from 'views/Events/UserMarkList';
import CreateUserMark from 'views/Events/CreateUserMark';
import Profile from 'views/Profile/Profile';
// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));





// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
   
    {
      path: 'dashboard',
      children: [
        {
          path: 'EventCategory',
          children: [
            {
              path: 'CategoryList',
              element: <CategoryList />
            },
            {
              path: 'CreateCategory',
              element: <CreateCategory />
            },

          ]
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'Events',
          children: [
            {
              path: 'AddEventMember',
              element: <AdddEventMember />
            },
            {
              path: 'CreateEvent',
              element: <CreateEvent />
            },
            {
              path: 'EventList',
              element: <EventList />
            },
            {
              path: 'AddWishUser',
              element: <AdddWishUser />
            },
            {
              path: 'WishUserList',
              element: <WishUserList />
            },
            {
              path: 'JoinEventList',
              element: <JoinEventList />
            },
            {
              path: 'CompleteEventList',
              element: <CompleteEventList />
            },
            {
              path: 'AbsenseUser',
              element: <AbsenseUser />
            },
            {
              path: 'CompleteEventUser',
              element: <CompleteEventUser />
            },



          ]
        }
      ]
    }, {
      path: 'dashboard',
      children: [
        {
          path: 'EventMembers',
          children: [
            {
              path: 'AddEventMember',
              element: <AdddEventMember />
            },

            {
              path: 'JoinEventList',
              element: <JoinEventList />
            },



          ]
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'WishList',
          children: [
            
            {
              path: 'AddWishUser',
              element: <AdddWishUser/>
            },
            {
              path: 'WishUserList',
              element: <WishUserList/>
            },
           


           
          ]
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'UserMark',
          children: [
            
            {
              path: 'CreateUserMark',
              element: <CreateUserMark/>
            },
            {
              path: 'UserMarkList',
              element: <UserMarkList/>
            },
          
          ]
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'Profile',
          children: [
            {
              path: 'Profile',
              element: <Profile/>
            }, 
           

          ]
        }
      ]
    },
  ]
};

export default MainRoutes;
