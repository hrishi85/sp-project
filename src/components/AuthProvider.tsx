import { createContext, PropsWithChildren, useContext, useState } from "react";

// === === === === === === === === CREATING TYPES
type User = {id: number};
type AuthProviderProps = PropsWithChildren & {isSignedIn?:boolean};

// === === === === === === === === CREATING CONTEXT (Which can either be Type User or Type Null)
const AuthContext = createContext<User | null>(null);

export default function AuthProvider({ children, isSignedIn }:AuthProviderProps) {
  const [user] = useState<User | null>(isSignedIn ? {id: 1} : null);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if(context === undefined) {
    throw new Error('useAuth must be within an AuthProvider');
  }
  return context;
}

