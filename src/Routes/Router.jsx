import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayouts/MainLayout";
import Home from "../Pages/Home/Home";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import NewsDetails from "../Pages/NewsDeatils/NewsDetails";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('../../public/news.json'),
                children : [
                    {
                        path : '/categoryDetails/:categoryId',
                        element : <CategoryDetails></CategoryDetails>
                    }
                ]
            },
            {
                path : '/newsDetail/:newsDetailsId',
                element : <NewsDetails></NewsDetails>,
                loader : () => fetch('../../public/news.json')
                
            },
            {
                path :'/about',
                element : <About></About>
            },
            {
                path : '/career',
                element : <Career></Career>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            }
            
        ]
    }
])


export default router;