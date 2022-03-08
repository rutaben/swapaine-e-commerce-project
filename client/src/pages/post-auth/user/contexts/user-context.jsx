import React, {
  useState, useEffect, createContext, useMemo,
} from 'react';
import ApiService from '../../../../services/api-service';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const { id } = '61ee9dd154b537f5470f3da0';

  useEffect(() => {
    (async () => {
      const getFilters = await ApiService.getUser(id);
      try {
        setUser(getFilters);
      } catch (err) {
        throw new Error(err);
      }
    })();
  }, []);

  const providerValue = useMemo(() => ({
    user,
  }), [user]);

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
