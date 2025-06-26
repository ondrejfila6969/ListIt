import type React from "react";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import "../../scss/WelcomeSign/WelcomeSign.scss";

export const WelcomeSign: React.FC = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="welcomeSign-wrapper">
        {user ? (
          <>
            <h1>Welcome back, <span className="welcomeSign-username">{user.first_name}</span></h1>
          </>
        ) : (
          <>
            <h1>Welcome back, guest</h1>
          </>
        )}
      </div>
    </>
  );
};
