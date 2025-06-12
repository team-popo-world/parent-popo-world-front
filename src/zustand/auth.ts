import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  user: {
    email: string;
    name: string;
  } | null;
}

interface AuthStore extends AuthState {
  setAccessToken: (accessToken: string) => void;
  setUser: (user: AuthState["user"]) => void;
  logout: () => void;
}

const INITIAL_AUTH_STATE: AuthState = {
  accessToken: null,
  isAuthenticated: false,
  user: null,
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      ...INITIAL_AUTH_STATE,
      setAccessToken: (accessToken) =>
        set({
          accessToken,
          isAuthenticated: true,
        }),
      setUser: (user) => set({ user }),
      logout: () => set(INITIAL_AUTH_STATE),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        accessToken: state.accessToken,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      }),
    }
  )
);
