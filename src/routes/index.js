import { createBrowserRouter } from "react-router-dom";
import Form from "../app/form";
import Support from "../app/supportDetails";
import DeafultLayout from "./deafultLayout";


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
        ]
    }
])

export default router;