import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Main from "./Pages/Layout/Main";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Services from "./Pages/Services/Services";

function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Main></Main>, children: [
      {path:'/', element: <Home></Home>},
      {path:'/home', element: <Home></Home>},
      {path:'/about', element: <About></About>},
      {path:'/blog', element: <Blog></Blog>},
      {path:'/services', element: <Services></Services>},
      {path:'/login', element: <Login></Login>},
      {path:'/register', element: <Register></Register>},
      {path:'/contact', element: <Contact></Contact>},
      {path:'*', element: <NotFound></NotFound>},

      // {path:'/checkout/:id', 
      // element: 
      // <PrivetRoute>
      //   <CheckOut></CheckOut>
      // </PrivetRoute>
      // },
       
    
    // Dashboard Routes
      // {
      //   path: '/dashboard',
      //   element: 
      //     <PrivetRoute>
      //     <DashbordLayout></DashbordLayout>
      //     </PrivetRoute>,
      //     children: [
      //       {
      //         path: '/dashboard',
      //         element: <Dashboard></Dashboard>
      //       },
      //       {path:'/dashboard/orders', 
      //       element: 
      //       <PrivetRoute>
      //         <Orders></Orders>
      //       </PrivetRoute>
      //       },
      //       {
      //         path: '/dashboard/profile',
      //         element: <Profile></Profile>
      //       },
                     
      //     ]
      // }
    ]},

    
  ])
  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
