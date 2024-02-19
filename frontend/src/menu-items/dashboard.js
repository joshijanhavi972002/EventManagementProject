// assets
import {
  IconHome,
  IconCalendarEvent,
  IconMail,
  IconFileUpload,
  IconFileInvoice,
  IconPhoneCall,
  IconAntennaBars5,
  IconChecklist,
  IconNotebook,
  IconPhoneCheck,
  IconUsers
} from '@tabler/icons';

// constant
const icons = {
  IconHome,
  IconCalendarEvent,
  IconMail,
  IconFileUpload,
  IconFileInvoice,
  IconPhoneCall,
  IconAntennaBars5,
  IconChecklist,
  IconNotebook,
  IconPhoneCheck,
  IconUsers
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  title: 'Dashboard-Menu',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconHome,
      breadcrumbs: false
    },
    {
      id: '01',
      title: 'Customer',
      type: 'item',
      url: '/dashboard/customer',
      icon: icons.IconAntennaBars5,
      breadcrumbs: false
    },
    {
      id: '02',
      title: 'People',
      type: 'item',
      url: '/dashboard/people',
      icon: icons.IconPhoneCheck,
      breadcrumbs: false
    },
    {
      id: '03',
      title: 'Company',
      type: 'item',
      url: '/dashboard/company',
      icon: icons.IconNotebook,
      breadcrumbs: false
    },
    {
      id: '04',
      title: 'Lead',
      type: 'item',
      url: '/dashboard/lead',
      icon: icons.IconChecklist,
      breadcrumbs: false
    },
    {
      id: '05',
      title: 'Offer',
      type: 'item',
      url: '/dashboard/offer',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
      id: '06',
      title: 'Invoice',
      type: 'item',
      url: '/dashboard/invoice',
      icon: icons.IconPhoneCall,
      breadcrumbs: false
    },
    {
      id: '07',
      title: 'Quote',
      type: 'item',
      url: '/dashboard/quote',
      icon: icons.IconMail,
      breadcrumbs: false
    },
    {
      id: '08',
      title: 'Payment',
      type: 'item',
      url: '/dashboard/payment',
      icon: icons.IconCalendarEvent,
      breadcrumbs: false
    },
    {
      id: '09',
      title: 'Expense',
      type: 'item',
      url: '/dashboard/expense',
      icon: icons.IconFileUpload,
      breadcrumbs: false
    },
    {
      id: '10',
      title: 'Product',
      type: 'item',
      url: '/dashboard/product',
      icon: icons.IconFileInvoice,
      breadcrumbs: false
    },
    {
      id: '11',
      title: 'Product Category',
      type: 'item',
      url: '/dashboard/product-category',
      icon: icons.IconFileInvoice,
      breadcrumbs: false
    },
    {
      id: '12',
      title: 'Settings',
      type: 'collapse',
      url: '/dashboard/settings',
      icon: icons.IconFileInvoice,
      breadcrumbs: false,
      children: [
        {
          id: '01',
          title: 'Admin',
          type: 'item',
          url: '/dashboard/settings/admin',
          icon: icons.IconUserCircle,
          breadcrumbs: false
        },
        {
          id: '02',
          title: 'General Settings',
          type: 'item',
          url: '/dashboard/settings/general-settings',
          icon: icons.IconGear,
          breadcrumbs: false
        },
        {
          id: '03',
          title: 'Expenses Category',
          type: 'item',
          url: '/dashboard/settings/expenses-category',
          icon: icons.IconGear,
          breadcrumbs: false
        },
        {
          id: '04',
          title: 'Payment Mode',
          type: 'item',
          url: '/dashboard/settings/payment-mode',
          icon: icons.IconGear,
          breadcrumbs: false
        },
        {
          id: '05',
          title: 'Tax',
          type: 'item',
          url: '/dashboard/settings/tax',
          icon: icons.IconGear,
          breadcrumbs: false
        },
        {
          id: '06',
          title: 'About',
          type: 'item',
          url: '/dashboard/settings/about',
          icon: icons.IconInfo,
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default dashboard;
