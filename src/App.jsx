import React from "react";
import Head from "./Component/Header/Header";
import Body from "./Component/Body/Body";
import { Provider } from "react-redux";
import store from "./Component/utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Component/MainContainer/MainContainer";
import WatchPage from "./Component/Body/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
const App = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col no-scrollbar ">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;

// Todo ::
/**
       * Head
       * Body
         - Sidebar

       * Main Container
         - Button List
         - Video Container
          - Video Card
       */
