import { Navigate } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />;
}
