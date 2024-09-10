import { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

;
const UserContext = createContext<UserContextProps | undefined>(undefined);

export function UserProvider({children}:  { children: ReactNode }){
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return(
    <UserContext.Provider value={{isAuthenticated, login,logout}}>
        {children}
    </UserContext.Provider>
  )
}

//Hook personalizado para acceder al contexto de autenticación.
  export const useAuth = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };
