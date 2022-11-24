import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import Blog from "../Blog/Blog";
import CheckOut from "../CheckOut/CheckOut";
import Courses from "../Courses/Courses";
import FAQ from "../FAQ/FAQ";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

 export const router=createBrowserRouter([
   {
     path:'/',
     element:<Main></Main>,
     children:[
        {
          path:'/',
          element:<Home></Home>,
         
        },
        {
          path:'/category/:id',
          element:<Category></Category>,
          loader: ({params})=>fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
          path:'/news/:id',
          element:<PrivateRoute><News></News></PrivateRoute>,  
          loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
         path:'/register',
         element:<Register></Register> 
        },
        {
          path:'/courses',
          element:<Courses></Courses>,
          loader:()=>fetch(`http://localhost:5000/news`)
        },
        {
          path:'/faq',
          element:<FAQ></FAQ>
        },
        {
         path:'/blog',
         element:<Blog></Blog>
        },
        {
          path:'/checkout',
          element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
        }
     ]
   }
 ])