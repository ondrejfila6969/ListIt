import type { ReactNode } from "react";
import type { User } from "../../../models/user/interfaces/user";

export type AuthProviderProps = {
    children: ReactNode;
}

export type AuthContextType = {
    user: User | null;
    isLoading: boolean;
    login: (token: string) => Promise<void>;
    logout: () => void;
    fetchUser: () => Promise<void>;
}