import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import NotFound from "../Pages/Others/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: async () => fetch('https://code-monkey-server.vercel.app/courses')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: async ({ params }) => fetch(`https://code-monkey-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element:
                    <PrivateRoute>
                        <Checkout></Checkout>
                    </PrivateRoute>,
                loader: async ({ params }) => fetch(`https://code-monkey-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },


        ]

    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);