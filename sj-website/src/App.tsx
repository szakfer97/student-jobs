import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./components/Home"));
const Jobs = lazy(() => import("./components/Jobs"));
const Reviews = lazy(() => import("./components/Reviews"));
const Shop = lazy(() => import("./components/Shop"));
const Settings = lazy(() => import("./components/Settings"));

export default function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/jobs", element: <Jobs /> },
    { path: "/reviews", element: <Reviews /> },
    { path: "/shop", element: <Shop /> },
    { path: "/settings", element: <Settings /> },
  ];
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
