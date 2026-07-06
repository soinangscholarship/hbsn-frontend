import { useEffect, useState } from "react";
import api from "../../../lib/api";
import { logout } from "../../../auth/authApi";
import { useNavigate } from "react-router-dom";

type User = { id: number; name: string };
export function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    api
      .get<User[]>("/users")
      .then((res) => setUsers(res.data))
      .catch((e) => setError(e.message));
  }, []);

  function handleLogout() {
    logout();
    nav("/login");
  }
  return (
    <div>
      <h2>Users</h2>
      <button onClick={handleLogout}>Logout</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            #{u.id} - {u.name}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
