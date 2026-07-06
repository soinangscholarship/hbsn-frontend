import api from "../lib/api";

export async function login(username: string, password: string) {
  const { data } = await api.post<{ token: string }>("/auth/login", {
    username,
    password,
  });
  localStorage.setItem("token", data.token);
}

export function logout() {
  localStorage.removeItem("token");
}

export function isLoggedIn() {
  return !!localStorage.getItem("token");
}
