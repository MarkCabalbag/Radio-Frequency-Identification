import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStoredDean } from "../utils/session";

// Returns the logged-in dean, redirecting to /auth when there is none.
export function useRequireDean() {
  const navigate = useNavigate();
  const dean = getStoredDean();
  const isLoggedIn = Boolean(dean);

  useEffect(() => {
    if (!isLoggedIn) navigate("/auth");
  }, [isLoggedIn, navigate]);

  return dean;
}