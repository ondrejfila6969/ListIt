import React, { createContext, useContext, useState, useEffect } from "react";
import { getUser } from "../../models/user/user";
import type { AuthProviderProps, AuthContextType } from "./types/AuthProvider";
import type { User } from "../../models/user/interfaces/user";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const parseJwt = (token: string) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch {
      return null;
    }
  };

  const fetchUser = async (): Promise<void> => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = await getUser();
      if (userData && userData.payload && Array.isArray(userData.payload)) {
        const payloadToken = parseJwt(token);
        const matchedUser = userData.payload.find(
          (user) => user.email === payloadToken?.email
        );
        if (matchedUser) {
          setUser(matchedUser);
        }
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const login = async (token: string) => {
    localStorage.setItem("token", token);
    await fetchUser();
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider !");
  }
  return context;
};
