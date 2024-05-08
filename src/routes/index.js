import { createBrowserRouter } from "react-router-dom";
import Form from "../app/form";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Form />
    }
])

export default router;