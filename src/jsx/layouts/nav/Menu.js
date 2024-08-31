import { SVGICON } from "../../constant/theme";

export const MenuList = [
  //Content
  {
    title: "YOUR COMPANY",
    classsChange: "menu-title",
  },
  //Dashboard
  {
    title: "Dashboard",
    classsChange: "mm-collapse",
    iconStyle: SVGICON.Home,
    content: [
      {
        title: "Dashboard Light",
        to: "/dashboard",
      },
    ],
  },
  // {
  //   title: "User",
  //   iconStyle: SVGICON.Employe,
  //   to: "/user",
  // },
//services
{
  title : "CMS",
  classsChange: 'mm-collapse',
  update:"NEW",
  iconStyle:  SVGICON.SettingMenu,
  content:[
      {
          title:'Banner',
          to:'banner'
      },            
      {
          title:'Service',
          to:'service'
      },
     
    ]
  },
  //Tasks

  {
    title: "OUR FEATURES",
    classsChange: "menu-title",
  },
  //Apps
  {
    title: "Apps",
    classsChange: "mm-collapse",
    // update:"New",
    iconStyle: SVGICON.Apps,
    content: [
      {
        title: "Users Manager",
        hasMenu: true,
        // update:'New',
        content: [
          {
            title: "User",
            to: "/user",
          },
          {
            title: "Add User",
            to: "/edit-profile",
          },
          {
            title: "Roles Listing",
            to: "/user-roles",
          },
          {
            title: "Add Roles",
            to: "/add-role",
          },
          {
            title: "Profile 1",
            to: "/app-profile",
          },
          {
            title: "Profile 2",
            to: "/app-profile-2",
          },
          {
            title: "Edit Profile",
            to: "edit-profile",
          },
          {
            title: "Post Details",
            to: "post-details",
          },
        ],
      },
      {
        title: "Customer Manager",
        hasMenu: true,
        // update:'New',
        content: [
          {
            title: "Customer",
            to: "/customer",
          },
          {
            title: "Customer Profile",
            to: "/customer-profile",
          },
        ],
      },
      {
        title: "Contacts",
        to: "/contacts",
        // update:"New"
      },
      {
        title: "Email",
        hasMenu: true,
        content: [
          {
            title: "Compose",
            to: "email-compose",
          },
          {
            title: "Index",
            to: "email-inbox",
          },
          {
            title: "Read",
            to: "email-read",
          },
        ],
      },
      {
        title: "Calendar",
        to: "app-calender",
      },
    ],
  },

//details
{
  title: 'Personal info',	
  classsChange: 'mm-collapse',
  iconStyle: SVGICON.Bootstrap,	
  content: [
      {
          title: 'Basic Details',
          to: 'ui-details',					
      },
      {
          title: 'User Properties',
          to: 'ui-properties',					
      },
      {
          title: 'Other Details',
          to: 'ui-other',					
      },
    
    ]
  },

  //Pages
  {
    title: "Pages",
    classsChange: "mm-collapse",
    iconStyle: SVGICON.Pages,
    content: [
      {
        title: "Error",
        hasMenu: true,
        content: [
          {
            title: "Error 404",
            to: "page-error-404",
          },
         
        ],
      },
      {
        title: "Lock Screen",
        to: "page-lock-screen",
      },
    ],
  },
];
