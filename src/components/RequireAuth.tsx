import { Navigate } from "react-router-dom";

export const RequireAuth: React.FC<any> = ({ children }) => {
  const user = localStorage.getItem("jwt");

  if (user) {
    <Navigate to="/admin" />;
  } else {
    return <Navigate to="/login" />;
  }
  return children;
};
