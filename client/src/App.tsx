import HomePage from "./pages/home/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropertiesPage from "./pages/properties/properties";
import LayoutPage from "./pages/layout/layout";
import SinglePage from "./pages/singlePage/singlePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/properties",
        element: <PropertiesPage />,
      },
      {
        path: "/:id",
        element: <SinglePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
