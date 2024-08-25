import { createBrowserRouter } from "react-router-dom";
import Form from "../app/form";
import Support from "../app/supportDetails";
import DeafultLayout from "./deafultLayout";
import LoginForm from "../app/loginForm";
import Work from "../app/work";


const router = createBrowserRouter([
    {
        path: '/',
        element: <DeafultLayout />,
        children: [
            {
                path: '/',
                element: <Support />
            },
            {
                path: '/form',
                element: <Form />
            },
            {
                path: '/login',
                element: <LoginForm />
            },
            {
                path: '/work',
                element: <Work />
            }
        ]
    }
])

export default router;