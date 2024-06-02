import { useContext } from "react";
import { AuthD } from "../ContextApi/Auth";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({ children }) {
    let { isAuthenticated } = useContext(AuthD);
  
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}
