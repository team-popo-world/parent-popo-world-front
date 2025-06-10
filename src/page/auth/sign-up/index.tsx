import { Link } from "react-router-dom";

export function SignUpPage() {
  return (
    <>
      <div className="flex flex-col justify-center px-6 py-10 bg-white rounded-3xl mt-8 scrollbar-hidden">
        <h3 className="mb-6 text-2xl font-bold text-[#5E2B00] text-center">회원가입</h3>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-[#5E2B00] font-bold">아이디</label>
            <input
              type="text"
              className="w-full h-10 border border-[#5E2B00] rounded-lg p-2"
              placeholder="아이디를 입력해주세요"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#5E2B00] font-bold">비밀번호</label>
            <input
              type="password"
              className="w-full h-10 border border-[#5E2B00] rounded-lg p-2"
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#5E2B00] font-bold">비밀번호 확인</label>
            <input
              type="password"
              className="w-full h-10 border border-[#5E2B00] rounded-lg p-2"
              placeholder="비밀번호를 다시 입력해주세요"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#5E2B00] font-bold">이름</label>
            <input
              type="text"
              className="w-full h-10 border border-[#5E2B00] rounded-lg p-2"
              placeholder="이름을 입력해주세요"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#5E2B00] font-bold">전화번호</label>
            <input
              type="tel"
              className="w-full h-10 border border-[#5E2B00] rounded-lg p-2"
              placeholder="전화번호를 입력해주세요"
            />
          </div>
        </form>
        <div className="flex flex-col gap-4 mt-4">
          <button className="w-full h-10 bg-[#FFD905] text-white font-bold rounded-lg">가입하기</button>
          <Link to="/auth/sign-in">
            <button className="w-full h-10 bg-[#ADCF00] text-white font-bold rounded-lg">로그인으로 돌아가기</button>
          </Link>
        </div>
      </div>
    </>
  );
}
