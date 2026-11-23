import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Authentication from "../pages/Authentication";
import { getStoredDean } from "../utils/session";

function AppLayout() {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(getStoredDean());

  useEffect(() => {
    if (!isLoggedIn) navigate("/auth");
  }, [isLoggedIn, navigate]);

  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        {isLoggedIn ? <Outlet /> : <Authentication />}
      </main>
    </div>
  );
}

export default AppLayout;