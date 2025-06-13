/**
 * ProtectedRoute 컴포넌트
 *
 * 이 컴포넌트는 인증이 필요한 라우트를 보호하는 역할을 합니다.
 * 사용자가 인증되지 않은 경우 로그인 페이지로 리다이렉트합니다.
 *
 * @param {React.ReactNode} children - 보호할 자식 컴포넌트들
 * @returns {JSX.Element} 인증된 사용자에게는 자식 컴포넌트를, 그렇지 않은 경우 로그인 페이지로 리다이렉트
 */
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../zustand/auth";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Zustand 스토어에서 인증 상태를 가져옵니다
  const { isAuthenticated } = useAuthStore();
  console.log("isAuthenticated", isAuthenticated);
  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  if (!isAuthenticated) {
    // replace 옵션을 사용하여 브라우저 히스토리에 리다이렉트 기록이 남지 않도록 합니다
    return <Navigate to="/auth/sign-in" replace />;
  }

  // 인증된 경우 자식 컴포넌트들을 렌더링
  return <>{children}</>;
};
