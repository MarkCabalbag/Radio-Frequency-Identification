import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import RegisteredCard from "./pages/RegisteredCard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/registered-card" element={<RegisteredCard />} />
      </Route>
      <Route path="/auth" element={<Authentication />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;