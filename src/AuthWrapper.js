import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return <div>Page is Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return <>{children}</>;
};
