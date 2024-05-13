import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineCalendar,AiOutlineFileAdd, AiOutlineBars,AiOutlineUser, AiOutlineLogout } from "react-icons/ai"; // Add this import for the new icon

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
      icon: AiOutlineDashboard,
      breadcrumbs: false,
      
    },
    // New Event Category dropdown
    {
      id: '13',
      title: 'Event Category',
      type: 'collapse', 
      icon: AiOutlineCalendar,
      children: [
        {
          id: '01',
          // id: '01',
          icon:AiOutlineFileAdd,
          title: 'Create Event Category',
          type: 'item',
          url: '/dashboard/EventCategory/CreateCategory', // URL for creating event category
          breadcrumbs: false
        },
        {
          id: '02',
          // id: '02',
          icon: AiOutlineBars,
          title: 'List of Categories',
          type: 'item',
          url: '/dashboard/EventCategory/CategoryList', // URL for listing categories
          breadcrumbs: false
        }
      ]
      
    },
    {
      id: '14',
      title: 'Events',
      type: 'collapse', 
      icon: AiOutlineCalendar,
      children: [
        {
          id: '01',
          // id: '01',
          icon:AiOutlineFileAdd,
          title: 'Create Event',
          type: 'item',
          url: '/dashboard/Events/CreateEvent', // URL for creating event category
          breadcrumbs: false
        },
        {
          id: '02',
          // id: '02',
          icon: AiOutlineBars,
          title: 'Event List',
          type: 'item',
          url: '/dashboard/Events/EventList', // URL for listing categories
          breadcrumbs: false
        },
       
       
       
        {
          id: '03',
          // id: '02',
          icon: AiOutlineBars,
          title: 'Complete Event List',
          type: 'item',
          url: '/dashboard/Events/CompleteEventList', // URL for listing categories
          breadcrumbs: false
        }, {
          id: '04',
          // id: '02',
          icon: AiOutlineBars,
          title: 'Absense User',
          type: 'item',
          url: '/dashboard/Events/AbsenseUser', // URL for listing categories
          breadcrumbs: false
        },
        {
          id: '05',
          // id: '02',
          icon: AiOutlineBars,
          title: 'Complete Event User',
          type: 'item',
          url: '/dashboard/Events/CompleteEventUser', // URL for listing categories
          breadcrumbs: false
        }
        

      ]
      
    },
    {
      id: '15',
      title: 'Event Members',
      type: 'collapse', 
      icon: AiOutlineCalendar,
      children: [
       
        {
          id: '01',
          // id: '02',
          icon:AiOutlineFileAdd,
          title: 'Add Event Member',
          type: 'item',
          url: '/dashboard/EventMembers/AddEventMember', // URL for listing categories
          breadcrumbs: false
        },
        {
          id: '02',
          // id: '02',
          icon: AiOutlineBars,
          title: 'Join Event List',
          type: 'item',
          url: '/dashboard/EventMembers/JoinEventList', // URL for listing categories
          breadcrumbs: false
        },
      ]      
    }, 
    {
      id: '16',
      title: 'Wish List',
      type: 'collapse', 
      icon: AiOutlineCalendar,
      children: [
       
        {
          id: '01',
          // id: '02',
          icon:AiOutlineFileAdd,
          title: 'Add Wish User',
          type: 'item',
          url: '/dashboard/WishList/AddWishUser', // URL for listing categories
          breadcrumbs: false
        },
       
        {
          id: '02',
          // id: '02',
          icon: AiOutlineBars,
          title: 'Wish Event List',
          type: 'item',
          url: '/dashboard/WishList/WishUserList', // URL for listing categories
          breadcrumbs: false
        },
        
      ]  
    },{
      id: '17',
      title: 'User Mark',
      type: 'collapse', 
      icon: AiOutlineCalendar,
      children: [
       
        {
          id: '01',
          // id: '02',
          icon:AiOutlineFileAdd,
          title: 'Create User Mark',
          type: 'item',
          url: '/dashboard/UserMark/CreateUserMark', // URL for listing categories
          breadcrumbs: false
        },
       
        {
          id: '02',
          // id: '02',
          icon: AiOutlineBars,
          title: 'User Mark List',
          type: 'item',
          url: '/dashboard/UserMark/UserMarkList', // URL for listing categories
          breadcrumbs: false
        },
        
      ]  
    },
    // {
    //     id: '18',
    //     title: 'Setting',
    //     type: 'item',
    //     url: '/dashboard/customer',
    //     icon: CiSettings,
    //     breadcrumbs: false
    //   },
      {
        id: '19',
        title: 'Profile',
        type: 'item',
        url: '/dashboard/Profile/Profile',
        icon: AiOutlineUser,
        breadcrumbs: false
      },
    //   {
    //     id: '20',
    //     title: 'logout',
    //     type: 'item',
    //     url: '/dashboard/customer',
    //     icon:AiOutlineLogout,
    //     breadcrumbs: false
    //   },
  ]
};

export default dashboard;
