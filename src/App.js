import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import { Contact } from "./components/Contact";

const RouteComponent = () => {
  return <Outlet />;
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RouteComponent />,
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
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
