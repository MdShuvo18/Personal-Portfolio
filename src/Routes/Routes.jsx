import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home";
import WelcomeBanner from "../Pages/WelcomeBanner";
import Projects from "../Pages/Projects";
import LearnBridge from "../Pages/Projects_Details/LearnBridge";
import Education from "../Pages/Education";
import PulsePost from "../Pages/Projects_Details/PulsePost";
import ArtyPot from "../Pages/Projects_Details/ArtyPot";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<WelcomeBanner></WelcomeBanner>
            },
            {
                path:'/aboutme',
                element:<Home></Home>
            },
            {
                path:'/projects',
                element:<Projects></Projects>
            },
            {
                path:'/learnbridge',
                element:<LearnBridge></LearnBridge>
            },
            {
                path:'/education',
                element:<Education></Education>
            },
            {
                path:'/pulsepost',
                element:<PulsePost></PulsePost>
            },
            {
                path:'/artypot',
                element:<ArtyPot></ArtyPot>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    },
]);

export default router