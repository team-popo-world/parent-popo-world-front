// 5E2B00
// FCFCFC
// FFD905

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiClient from "../../../api/api";
import { useAuthStore } from "../../../zustand/auth";

interface SignInForm {
  email: string;
  password: string;
}

export function SignInPage() {
  const navigate = useNavigate();
  const { setAccessToken, setUser } = useAuthStore();
  const [formData, setFormData] = useState<SignInForm>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await apiClient.post("/auth/login", formData);

      // 토큰 저장
      const accessToken = response.headers["authorization"]?.replace("Bearer ", "");
      if (accessToken) {
        setAccessToken(accessToken);
      }

      // 사용자 정보 저장
      if (response.data.user) {
        setUser({
          email: response.data.user.email,
          name: response.data.user.name,
        });
      }

      // 메인 페이지로 이동
      navigate("/");
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
    }
  };

  return (
    <div className="flex flex-col justify-center px-6 py-10 bg-white rounded-3xl mt-31 scrollbar-hidden">
      <h3 className="mb-6 text-2xl font-bold text-[#5E2B00] text-center">POPO WORLD</h3>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label className="text-[#5E2B00] font-bold">이메일</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-10 border border-[#5E2B00] rounded-lg p-2"
            placeholder="이메일을 입력해주세요"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[#5E2B00] font-bold">비밀번호</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full h-10 border border-[#5E2B00] rounded-lg p-2"
            placeholder="비밀번호를 입력해주세요"
            required
          />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <button type="submit" className="w-full h-10 bg-[#FFD905] text-white font-bold rounded-lg">
            로그인
          </button>
          <Link to="/auth/sign-up">
            <button type="button" className="w-full h-10 bg-[#ADCF00] text-white font-bold rounded-lg">
              회원가입
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
