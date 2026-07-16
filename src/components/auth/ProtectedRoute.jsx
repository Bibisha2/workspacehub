import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const currentUser = JSON.parse(
    localStorage.getItem("workspacehub-current-user")
  );

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;