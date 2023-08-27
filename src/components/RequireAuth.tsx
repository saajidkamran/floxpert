import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

export const RequireAuth: React.FC<any> = ({ children }) => {
  const cookies = new Cookies();

  const user = cookies.get("jwt");

  if (user) {
    <Navigate to="/admin" />;
  } else {
    return <Navigate to="/login" />;
  }
  return children;
};
