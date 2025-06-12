import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiClient from "../../../api/api";
import { useAuthStore } from "../../../zustand/auth";

interface SignUpForm {
  email: string;
  password: string;
  name: string;
  sex: string;
  age: number | null;
  role: string;
  parentCode: string;
}

export function SignUpPage() {
  const navigate = useNavigate();
  const { setAccessToken, setUser } = useAuthStore();
  const [formData, setFormData] = useState<SignUpForm>({
    email: "",
    password: "",
    name: "",
    sex: "",
    age: null,
    role: "PARENT",
    parentCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await apiClient.post("/auth/signup", formData);

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
      console.error("회원가입 실패:", error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center px-6 py-10 bg-white rounded-3xl mt-8 scrollbar-hidden">
        <h3 className="mb-6 text-2xl font-bold text-[#5E2B00] text-center">회원가입</h3>
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
          <div className="flex flex-col gap-1">
            <label className="text-[#5E2B00] font-bold">이름</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-10 border border-[#5E2B00] rounded-lg p-2"
              placeholder="이름을 입력해주세요"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#5E2B00] font-bold">성별</label>
            <select
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              className="w-full h-10 border border-[#5E2B00] rounded-lg p-2"
              required
            >
              <option value="">성별을 선택해주세요</option>
              <option value="M">남성</option>
              <option value="F">여성</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#5E2B00] font-bold">나이</label>
            <input
              type="number"
              name="age"
              value={formData.age || ""}
              onChange={handleChange}
              className="w-full h-10 border border-[#5E2B00] rounded-lg p-2"
              placeholder="나이를 입력해주세요"
              required
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <button type="submit" className="w-full h-10 bg-[#FFD905] text-white font-bold rounded-lg">
              가입하기
            </button>
            <Link to="/auth/sign-in">
              <button type="button" className="w-full h-10 bg-[#ADCF00] text-white font-bold rounded-lg">
                로그인으로 돌아가기
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
