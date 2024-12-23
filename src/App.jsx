import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AppLayout } from "./components/layout/AppLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CountryDetails } from "./components/layout/CountryDetails";

import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { ErrorPage } from "./pages/ErrorPage";
import "../src/App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/country/:id",
        element: <CountryDetails />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
