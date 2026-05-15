import { Route, useLocation } from "wouter";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { adminEnabled } from "../config";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!adminEnabled) {
      setLocation("/");
      return;
    }

    if (!user) {
      setLocation("/login");
    }
  }, [user, setLocation]);

  if (!adminEnabled || !user) return null;

  return <Route {...rest} component={Component} />;
}
