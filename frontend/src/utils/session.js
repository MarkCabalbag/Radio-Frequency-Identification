const DEAN_KEY = "dean";

export const getStoredDean = () => {
  try {
    const raw = localStorage.getItem(DEAN_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const getToken = () => getStoredDean()?.token ?? null;

export const storeDean = (dean) =>
  localStorage.setItem(DEAN_KEY, JSON.stringify(dean));

export const clearDean = () => localStorage.removeItem(DEAN_KEY);