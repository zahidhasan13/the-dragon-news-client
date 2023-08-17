import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CategoryNews from "../pages/Home/CategoryNews/CategoryNews";
import NewsDetails from "../pages/newsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import TermCondition from "../pages/TermCondition/TermCondition";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
          path: '/',
          element: <Navigate to="/categories/0"></Navigate>
      },
      {
        path: '/termcondition',
        element: <TermCondition></TermCondition>
      },
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "categories/:id",
            element: <CategoryNews></CategoryNews>,
            loader: ({ params }) =>
              fetch(`https://the-dragon-news-server-durdantozahid-gmailcom.vercel.app/categories/${params.id}`),
          },
        ]
      },
      {
        path: "/news/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-dragon-news-server-durdantozahid-gmailcom.vercel.app/news/${params.id}`)
      }
    ]
  }, 
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
]);

export default router;
