import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../Pages/HomeScreen";
import Layout from "../components/Block/Layout";


export const MainRouter = createBrowserRouter([
    {
        path: "",
        element: <Layout/>,
        children:[
            {
                index: true,
                element: <HomeScreen/>
            }
        ]
    }
])