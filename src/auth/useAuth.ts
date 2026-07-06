import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function useAuth() {
  const token = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem("token"),
    () => null,
  );
  return { token, isLoggedIn: !!token };
}
