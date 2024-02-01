import { createBrowserRouter, RouterProvider } from "react-router-dom";

function Root() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Home Page!</div>,
    },
    {
      path: "/cats",
      element: <div>Cats Page!</div>,
    },
  ]);

  <RouterProvider router={router} />;
}

export default Root;
export { Root };
