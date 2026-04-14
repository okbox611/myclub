import { Route, useLocation } from "wouter";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!user) {
      setLocation("/login");
    }
  }, [user]);

  if (!user) return null;

  return <Route {...rest} component={Component} />;
}