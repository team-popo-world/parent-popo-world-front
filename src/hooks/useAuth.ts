import { useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        // Add your authentication logic here
        setLoading(false);
      } catch (error) {
        console.error("Auth check failed:", error);
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    // Add login logic here
  };

  const logout = async () => {
    // Add logout logic here
    setUser(null);
  };

  return {
    user,
    loading,
    login,
    logout,
  };
};
