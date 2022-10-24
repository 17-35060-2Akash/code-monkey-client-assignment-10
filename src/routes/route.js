import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div></div>,
        children: [
            {
                path: '/',
                element: <div></div>
            },
        ]

    }
]);