import React,{lazy,Suspense, useEffect, useState} from "react";
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
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

// Lazy is a inbuild function in React where it takes import /
const Grocery = lazy(()=>
  import("./components/Grocery")
);



const AppLayout = () => {
  const [userName,setUserName]=useState();
  
  
  // Authentication
    useEffect(()=>{
      const data = { 
        name: "Saipavan Siripuram"
      };
      setUserName(data.name);
    },[])




  return (

    <UserContext.Provider value={{loggedInUser:userName , setUserName}}>
      <div className="app">
        <Header></Header>
        {/* path ="/"   <B ody />  */}
        {/* path = "/about"  <About />  */}
          {/* path = "/Contact"  <Contact />  */}
          <Outlet/>
        <Footer></Footer>
      </div>
    </UserContext.Provider>
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
      path:"/grocery",
      element:<Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>
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
