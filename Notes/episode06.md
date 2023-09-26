# Router

- createBrowserRouter:
This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.

It also enables the v6.4 data APIs like loaders, actions, fetchers and more.
- <RouterProvider>
 All data router objects are passed to this component to render your app and enable the rest of the data APIs.

 - import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={router}
    fallbackElement={<BigSpinner />}
  />
);

- <Oulet />: An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.