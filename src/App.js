import Header from './Components/Header';
import Home from './Components/Home'
import Service from './Components/Service'
import Testimonal from './Components/Testimonal';
import Team from './Components/Team';
import Contact from './Components/Contact';

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; 

const AppLayout = () => {    
  return (
    <>
      
      <div className='relative'>
        <Header />
        <Outlet />
      </div>
         
         
      
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Home />
      },
      {
        path: "service",
        element: <Service/>
      },
      {
        path: "testimonal",
        element: <Testimonal />
      },
      {
        path: "team",
        element:<Team />
      },
      {
        path: "contact",
        element:<Contact />
      },
      
      
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
