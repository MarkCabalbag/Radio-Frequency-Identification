import { API_BASE_URL } from "../config/env";
import { clearDean, getToken } from "../utils/session";

// Thin fetch wrapper: JSON in/out, attaches the dean JWT, throws Error(message) on non-2xx.
// Pass { auth: false } for public endpoints (login/register).
export async function request(path, { method = "GET", body, auth = true } = {}) {
  const hasBody = body !== undefined;
  const token = auth ? getToken() : null;

  const headers = {
    ...(hasBody && { "Content-Type": "application/json" }),
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers,
    ...(hasBody && { body: JSON.stringify(body) }),
  });

  const data = await response.json().catch(() => ({}));

  // Expired/invalid token: clear the session and send the user to log in again.
  if (response.status === 401 && token) {
    clearDean();
    window.location.assign("/auth");
    throw new Error(data.message || "Session expired, please log in again");
  }

  if (!response.ok) {
    throw new Error(data.message || "An error occurred");
  }
  return data;
}