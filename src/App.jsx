import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {

  const curentUser = true;


  const Layuot = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{flex:6}}>
          <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({children}) => {
    if(!curentUser) {
      return <Navigate to='/login'/>
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layuot /></ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
