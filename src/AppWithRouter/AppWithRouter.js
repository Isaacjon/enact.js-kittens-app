import Root from "../routes/root";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import { Route } from "@enact/ui/Routable";

const AppWithRouter = ThemeDecorator(() => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          Home Page!
          <ul>
            <li
              style={{
                cursor: "pointer",
                border: "1px solid red",
                marginTop: "20px",
              }}
            >
              <Link to={`/`}>home</Link>
            </li>
            <li
              style={{
                cursor: "pointer",
                border: "1px solid red",
                marginTop: "20px",
              }}
            >
              <Link to={`/cats`}>cats</Link>
            </li>
          </ul>
        </div>
      ),
    },
    {
      path: "/cats",
      element: (
        <div>
          Cats Page! <br /> <Link to={`/`}>home</Link>
        </div>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
});

export default AppWithRouter;

export { AppWithRouter };
