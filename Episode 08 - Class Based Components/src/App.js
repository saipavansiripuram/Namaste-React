import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import ReastaurantCard from "./components/RestaurantCard";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter ,RouterProvider ,Outlet } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <>
      <div className="app">
        <Header></Header>
        {/* path ="/"   <B ody />  */}
        {/* path = "/about"  <About />  */}
          {/* path = "/Contact"  <Contact />  */}
          <Outlet/>
        <Footer></Footer>
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([{
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/about",
      element:<About/>
    },
    { 
      path:"/contact", 
      element:<Contact/>
    },
    { 
      path:"/restaurants/:resId",  //This path is dynamic 
      element:<RestaurantMenu/>
    }
  ],
  errorElement:<Error/>

},

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
