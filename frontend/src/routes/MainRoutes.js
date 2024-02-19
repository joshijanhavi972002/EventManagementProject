import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Tax from 'views/Settings/Tax';
import About from 'views/Settings/About';
import Payment from 'views/Payment';
import Products from 'views/Product';
import ProductCategory from 'views/Product-Category';
import Admin from 'views/Settings/Admin';
import GeneralSettings from 'views/Settings/GeneralSettings/GeneralSettings';
import ExpenseCategory from 'views/Settings/Expense-Category';
import PaymentMode from 'views/Settings/Payment-Mode';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const LeadManagement = Loadable(lazy(() => import('views/Customer')));
const ContactManagement = Loadable(lazy(() => import('views/People')));
const Call = Loadable(lazy(() => import('views/Company')));
const Policy = Loadable(lazy(() => import('views/Invoice')));
const Metting = Loadable(lazy(() => import('views/Offer')));
const Email = Loadable(lazy(() => import('views/Quote')));
const Task = Loadable(lazy(() => import('views/Lead')));
const EmailTemplates = Loadable(lazy(() => import('views/EmailTemplates')));
const Document = Loadable(lazy(() => import('views/Expense')));
const Calender = Loadable(lazy(() => import('views/Calender')));
const AddTemplates = Loadable(lazy(() => import('views/EmailTemplates/AddTemplates')));

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
          path: 'customer',
          element: <LeadManagement />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'people',
          element: <ContactManagement />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'company',
          element: <Call />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'lead',
          element: <Task />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'offer',
          element: <Metting />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'invoice',
          element: <Policy />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'quote',
          element: <Email />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'payment',
          element: <Payment />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'expense',
          element: <Document />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'product',
          element: <Products />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'product-category',
          element: <ProductCategory />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'settings',
          children: [
            {
              path: 'admin',
              element: <Admin />
            },
            {
              path: 'general-settings',
              element: <GeneralSettings />
            },
            {
              path: 'expenses-category',
              element: <ExpenseCategory />
            },
            {
              path: 'payment-mode',
              element: <PaymentMode />
            },
            {
              path: 'tax',
              element: <Tax />
            },
            {
              path: 'about',
              element: <About />
            }
          ]
        }
      ]
    },
  ]
};

export default MainRoutes;
