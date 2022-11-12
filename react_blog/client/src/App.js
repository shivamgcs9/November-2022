import React, { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
  ScrollRestoration,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { Context } from "./context/Context";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

const App = () => {
  const { currentUser } = useContext(Context);

  const Layout = () => {
    return (
      <>
        <ScrollRestoration />

        <div>
          <Topbar />
          <div style={{ display: "flex" }}>
            <div style={{ flex: 9 }}>
              <Outlet />
            </div>
            {/* <div style={{ flex: 3 }}> */}
            {/* <Sidebar /> */}
            {/* </div> */}
          </div>
        </div>
      </>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/posts",
          element: <Homepage />,
        },
        {
          path: "/posts/:id",
          element: <Single />,
        },
        {
          path: "/settings",
          element: (
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          ),
        },
        {
          path: "/write",
          element: (
            <ProtectedRoute>
              <Write />
            </ProtectedRoute>
          ),
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
