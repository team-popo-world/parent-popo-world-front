// 5E2B00
// FCFCFC
// FFD905

import { Link } from "react-router-dom";

export function SignInPage() {
  return (
    <div className="flex flex-col justify-center px-6 py-10 bg-white rounded-3xl mt-31 scrollbar-hidden">
      <h3 className="mb-6 text-2xl font-bold text-[#5E2B00] text-center">POPO WORLD</h3>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-[#5E2B00] font-bold">아이디</label>
          <input type="text" className="w-full h-10 border border-[#5E2B00] rounded-lg p-2" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[#5E2B00] font-bold">비밀번호</label>
          <input type="password" className="w-full h-10 border border-[#5E2B00] rounded-lg p-2" />
        </div>
      </form>
      <div className="flex flex-col gap-4 mt-4">
        <button className="w-full h-10 bg-[#FFD905] text-white font-bold rounded-lg">로그인</button>
        <Link to="/auth/sign-up">
          <button className="w-full h-10  bg-[#ADCF00] text-white font-bold rounded-lg">회원가입</button>
        </Link>
      </div>
    </div>
  );
}
