import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [subscriptions, setSubscriptions] = useState([]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setSubscriptions([]);
  };

  const addUserSubscription = (subscription) => {
    const existingSubscription = subscriptions.find(
      (sub) =>
        sub.name === subscription.name && sub.variant === subscription.variant
    );
    if (!existingSubscription) {
      setSubscriptions([...subscriptions, subscription]);
    } else {
      alert(
        `Vous avez déjà un abonnement ${subscription.name} (${subscription.variant}).`
      );
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, subscriptions, addUserSubscription }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
