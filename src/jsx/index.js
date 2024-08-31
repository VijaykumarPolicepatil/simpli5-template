import React, { useContext } from "react";

/// React router dom
import { Routes, Route, Outlet } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";
import "./step.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
import ScrollToTop from "./layouts/ScrollToTop";

/// Dashboard
import Home from "./components/Dashboard/Home";

// import User from "./components/Dashboard/User";

//services
import Service from './components/Cms/Service';
import Banner from './components/Cms/Banner';


//Apps
import Contacts from "./components/AppsMenu/Contacts";
import User1 from "./components/AppsMenu/AppProfile/User1";
import UserRoles from "./components/AppsMenu/AppProfile/UserRoles";
import AddRole from "./components/AppsMenu/AppProfile/AddRole";
import AppProfile from "./components/AppsMenu/AppProfile/AppProfile";
import AppProfile2 from "./components/AppsMenu/AppProfile/AppProfile2";
import EditProfile from "./components/AppsMenu/AppProfile/EditProfile";
import PostDetails from "./components/AppsMenu/AppProfile/PostDetails";
import CustomerProfile from "./components/AppsMenu/AppProfile/CustomerProfile";
import AppCustomer from "./components/AppsMenu/AppProfile/AppCustomer";
import Compose from "./components/AppsMenu/Email/Compose/Compose";
import Inbox from "./components/AppsMenu/Email/Inbox/Inbox";
import Read from "./components/AppsMenu/Email/Read/Read";
import Calendar from "./components/AppsMenu/Calendar/Calendar";

//details
import Uidetails from "./components/Personal-Details/Basic_Details";
import Uiproperties from "./components/Personal-Details/User_Properties";
import Uiother from "./components/Personal-Details/Other_details";


/// Pages
import LockScreen from "./pages/LockScreen";
import Error404 from "./pages/Error404";


import { ThemeContext } from "../context/ThemeContext";

const Markup = () => {
  const allroutes = [
    // Dashboard
    { url: "", component: <Home /> },
    { url: "dashboard", component: <Home /> },

    // { url: "user", component: <User /> },

    //services
  ///Cms
  { url: 'banner', component: <Banner/> },
  { url: 'service', component: <Service/> },
 

    //Apps
    { url: "contacts", component: <Contacts /> },
    { url: "user1", component: <User1 /> },
    { url: "user-roles", component: <UserRoles /> },
    { url: "add-role", component: <AddRole /> },
    { url: "app-profile", component: <AppProfile /> },
    { url: "app-profile-2", component: <AppProfile2 /> },
    { url: "edit-profile", component: <EditProfile /> },
    { url: "post-details", component: <PostDetails /> },
    { url: "customer", component: <AppCustomer /> },
    { url: "customer-profile", component: <CustomerProfile /> },

    // Apps
    { url: "email-compose", component: <Compose /> },
    { url: "email-inbox", component: <Inbox /> },
    { url: "email-read", component: <Read /> },
    { url: "app-calender", component: <Calendar /> },

    //details
    { url: "ui-details", component: <Uidetails /> },
    { url: "ui-properties", component: <Uiproperties /> },
    { url: "ui-other", component: <Uiother /> },
   

    // Widget
  ];

  function NotFound() {
    const url = allroutes.map((route) => route.url);
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];

    if (url.indexOf(path) <= 0) {
      return <Error404 />;
    }
  }

  return (
    <>
      <Routes>
        <Route path="/page-lock-screen" element={<LockScreen />} />
        <Route path="/page-error-404" element={<Error404 />} />
        
        <Route element={<MainLayout />}>
          {allroutes.map((data, i) => (
            <Route
              key={i}
              exact
              path={`${data.url}`}
              element={data.component}
            />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </>
  );
};

function MainLayout() {
  const { menuToggle } = useContext(ThemeContext);
  return (
    <div
      id="main-wrapper"
      className={`show ${menuToggle ? "menu-toggle" : ""}`}
    >
      <Nav />
      <div
        className="content-body"
        style={{ minHeight: window.screen.height - 45 }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Markup;
