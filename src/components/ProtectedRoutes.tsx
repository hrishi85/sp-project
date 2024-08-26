import { PropsWithChildren, useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutes({ children }: PropsWithChildren) {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(user === null) {
      navigate("/login", {replace: true});
    }
  }, [user, navigate]);

  return children;
}
