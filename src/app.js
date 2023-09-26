import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

/**
 * Food Delevery App
 * Header Component
 *
 *  - App Icon Component
 *  - Nav-bar component
 *
 * Bodycomponent
 *  - Search component
 *  - RestaurentcartComponent
 * Footer Component
 *  - T&C
 *  - Link
 *
 */

const AppLayout = () => {
  const [userNamee, setUserName] = useState();
  useEffect(() => {
    const data = {name: "Gurudayal Singh"}
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value = {{loggedInUser: userNamee, setUserName}}>
    <div className="app">
        <Header />
        <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

export const route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {

        path: '/cart',
        element: <Cart/>

      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading ......</h1>}>
            <Grocery />{" "}
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route} />);
