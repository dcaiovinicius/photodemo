/* eslint-disable react/jsx-no-constructed-context-values */
import { api } from '@app/services/axios';
import React, { useEffect } from 'react';

interface AuthContextApi {
  isAuth: boolean;
  // eslint-disable-next-line no-unused-vars
  handleSingIn: (data: any) => void;
}

interface UserState {
  user: object;
}

export const AuthContext = React.createContext<AuthContextApi>(
  {} as AuthContextApi,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<UserState>();

  const handleSingIn = (value) => {
    const request = async () => {
      try {
        const response = await api.post('api/users/sign_in', {
          user: { ...value },
        });

        setUser({ ...response.data.user });

        localStorage.setItem(
          '@Photomatic:token',
          response.headers.authorization,
        );

        localStorage.setItem(
          '@Photomatic:user',
          JSON.stringify(response.data.user),
        );

        console.log(response);
      } catch (error) {
        alert('Sorry login invalid');
      }
    };

    request();
  };

  useEffect(() => {
    const storagedUser = localStorage.getItem('@Photomatic:user');
    const storagedToken = localStorage.getItem('@Photomatic:token');

    if (storagedUser && storagedToken) {
      setUser(JSON.parse(storagedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth: !!user, handleSingIn }}>
      {children}
    </AuthContext.Provider>
  );
};
