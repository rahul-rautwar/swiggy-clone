import "./App.css";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import About from "./components/About";
// import { Contact } from "./components/Contact";
import Error from "./components/Error";
import MainContainer from "./components/MainContainer";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
